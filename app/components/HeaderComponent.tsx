"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useWalletContext } from "../context/wallet";

export default function HeaderComponent() {
  const router = useRouter();
  const { isLoggedIn, login, logout, username, scaAddress, provider } =
    useWalletContext();
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

  const handleLogout = useCallback(async () => {
    setIsLoggingOut(true);
    await logout();
    setIsLoggingOut(false);
  }, [logout]);
  return (
    <div className="flex flex-row border-b border-[#6A5BC2] bg-[#F4F185]">
      <div className="basis-[20%] flex justify-center items-center border-r border-[#6A5BC2] py-5">
        <div className="p-3 border-2 border-black rounded-[50px]">
          <h1 className="font-bold text-xl">Enmmar</h1>
        </div>
      </div>
      <div className="basis-[45%] flex justify-center items-center px-5">
        {/*search  feature has not been develop  till then set to  false */}
        {isLoggedIn && (
          <div className="border-2 border-black flex flex-row w-full rounded-full">
            <input
              className="p-3 basis-[70%] border-none text-base placeholder-black bg-[#F4F185]"
              style={{ borderRadius: "50px 0 0 50px" }}
              type="text"
              placeholder="Search community..."
            />
            <button
              className="border-y-0 border-x-0 border-l-2 p-3 basis-[30%] border border-black bg-white cursor-pointer"
              style={{
                borderRadius: "0px 50px 50px 0px",
              }}
            >
              Search
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-center items-center basis-[35%] border-y-0 border-r-0 border-l border-[#6A5BC2]">
        <div className="flex flex-row justify-center items-center pt-5 pb-5">
          {isLoggedIn ? (
            <div className="flex flex-row gap-4 items-center">
              <span className="border-2 border-[#6A5BC2]  p-2 rounded-full">
                {username}
              </span>
              <button
                className="border-2 border-[#6A5BC2]  bg-[#6A5BC2] text-white  py-1 px-2 rounded hover:bg-white   hover:text-[#6A5BC2] "
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-row gap-4 ">
              <Link
                className="rounded-full border-2 border-[#6A5BC2]  bg-[#6A5BC2] text-white  py-1 px-2 hover:bg-white   hover:text-[#6A5BC2] "
                href={"/signin"}
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
