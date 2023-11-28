"use client";
import React, { useCallback, useState } from "react";
import { polygonMumbai } from "viem/chains";
import { useBalance } from "wagmi";
import { useWalletContext } from "../context/wallet";
import HeaderComponent from "../components/HeaderComponent";
import { useRouter } from "next/navigation";

const chain = polygonMumbai;

function SignInPage() {
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const { isLoggedIn, login, logout, username, scaAddress, provider } =
    useWalletContext();

  const onEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setEmail(e.target.value);
    },
    []
  );

  const handleLogin = useCallback(async () => {
    await login(email);
    setIsLoggingIn(false);
    setEmail("");
    router.push("/dashboard");
  }, [login, email]);

  const handleLogout = useCallback(async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
  }, [logout]);

  const { data, isError, isLoading } = useBalance({
    address: scaAddress,
  });

  return (
    <div className="flex flex-col">
      <HeaderComponent />

      <div className="flex flex-col justify-center items-center mt-5">
        <div className="flex flex-col w-[600px] bg-[#6A5BC2] text-white p-4 rounded">
          <h2 className="font-bold text-center text-lg">Log In</h2>
          <h3 className="ml-1 mt-4">Enter your email: </h3>
          <input
            placeholder="Email here..."
            onChange={onEmailChange}
            className="rounded-full text-black border border-solid border-black px-4 py-2 mt-2 placeholder-black"
          />
          <div className="flex flex-col mt-4">
            <button
              onClick={handleLogin}
              className=" bg-[#F4F185] text-black px-4 py-2"
            >
              LogIn
            </button>
          </div>
        </div>
      </div>

      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="btn text-black bg-gradient-2 disabled:opacity-25 disabled:text-black transition ease-in-out duration-500 transform hover:scale-110 max-md:w-full"
        >
          {isLoggingOut ? "Logging Out" : "Log Out"}
          {isLoggingOut && (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </button>
      )}
    </div>
  );
}

export default SignInPage;
