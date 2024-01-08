import { GoodSamaritanAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const GOOD_SAMARITAN_LEVEL_NAME = "GoodSamaritan"

export const goodSamaritanAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying attacker');
            const contract = await ethereum.deployContract<GoodSamaritanAttack>('GoodSamaritanAttack');

            console.log('Attacking with attacker deployed on: ', await contract.getAddress());

            const attackTx = await contract.attack(instanceAddress);
            await attackTx.wait();

        }
    }
}