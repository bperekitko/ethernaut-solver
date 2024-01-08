import { ForceAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const FORCE_LEVEL_NAME = "Force"

export const  forceAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const attackerContract = await ethereum.deployContract<ForceAttack>('ForceAttack');
            const deployedAddress = await attackerContract.getAddress();
            console.log('Deployed ForceAttack at: ', deployedAddress)
        
            const depositTx = await ethereum.sendRawTx({to: deployedAddress, value:100});
            await depositTx.wait();

            const attackTx = await attackerContract.attack(instanceAddress);
            await attackTx.wait();
        }
    }
}