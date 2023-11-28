// import { chain, gasManagerPolicyId } from "@/config/client";
import { getRpcUrl } from "@/app/config/rpc";
import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from "@alchemy/aa-accounts";
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import {
  SmartAccountSigner,
  getDefaultEntryPointAddress,
} from "@alchemy/aa-core";
import { useCallback, useState } from "react";
import { Address } from "viem";
import { polygonMumbai } from "viem/chains";
import { useMagicSigner } from "./useMagicSigner";
const chain = polygonMumbai;
export const useAlchemyProvider = () => {
  const [provider, setProvider] = useState<AlchemyProvider>(
    new AlchemyProvider({
      chain,
      rpcUrl: getRpcUrl(),
    })
  );

  const connectProviderToAccount = useCallback(
    async (signer: SmartAccountSigner, account?: Address) => {
      let magicSigner: any;
      try {
        magicSigner = await useMagicSigner().signer;
      } catch (err) {
        console.log("MAGIC SIGNER ERROR =>", err);
      }
      const connectedProvider = provider
        .connect((provider) => {
          return new LightSmartContractAccount({
            rpcClient: provider,
            owner: magicSigner,
            chain,
            entryPointAddress: getDefaultEntryPointAddress(chain),
            factoryAddress: getDefaultLightAccountFactoryAddress(chain),
            accountAddress: account,
          });
        })
        .withAlchemyGasManager({
          policyId: process.env.NEXT_ALCHEMY_GASLESS_POLICY_ID!,
        });

      setProvider(connectedProvider);
      return connectedProvider;
    },
    [provider]
  );

  const disconnectProviderFromAccount = useCallback(() => {
    const disconnectedProvider = provider.disconnect();

    setProvider(disconnectedProvider);
    return disconnectedProvider;
  }, [provider]);

  return { provider, connectProviderToAccount, disconnectProviderFromAccount };
};
