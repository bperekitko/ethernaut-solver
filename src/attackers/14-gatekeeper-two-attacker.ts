import { GatekepperTwoAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const GATEKEEPER_TWO_LEVEL_NAME = "GatekeeperTwo"

export const gatekeeperTwoAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying attacker, attacking in constructor');

            const contract = await ethereum.deployContract<GatekepperTwoAttack>('GatekepperTwoAttack', [instanceAddress]);
            console.log('Attacker deployed at: ', await contract.getAddress());
        }
    }
}