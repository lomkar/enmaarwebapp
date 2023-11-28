import { WalletClientSigner } from "@alchemy/aa-core";
import { Magic } from "magic-sdk";
import { createWalletClient, custom } from "viem";
import { magicLinkAPIKey } from "../constants/enviornmentVariables";

export const magic = new Magic(magicLinkAPIKey);

export const createMagicSigner = async () => {
  await magic.wallet.connectWithUI();

  const magicClient = createWalletClient({
    transport: custom(await magic.wallet.getProvider()),
  });

  return new WalletClientSigner(
    magicClient,
    "magic" // signerType
  );
};
