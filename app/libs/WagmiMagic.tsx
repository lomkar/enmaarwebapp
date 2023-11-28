"use client";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { DedicatedWalletConnector } from "@magiclabs/wagmi-connector";
import { magicLinkAPIKey } from "../constants/enviornmentVariables";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);
const chain = polygonMumbai;

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new DedicatedWalletConnector({
      chains,
      options: {
        apiKey:magicLinkAPIKey,
        isDarkMode: true,
        magicSdkConfiguration: {
          network: {
            rpcUrl: process.env.ALCHEMY_RPC_URL!,
            chainId: chain.id,
          },
        },
      },
    }),
  ],
});

function WagmiMagic({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}

export default WagmiMagic;
