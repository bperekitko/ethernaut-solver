import { DenialAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const DENIAL_LEVEL_NAME = "Denial"

export const denialAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying denial attacker');
            const contract = await ethereum.deployContract<DenialAttack>('DenialAttack', [instanceAddress]);
            console.log('Deployed at: ', await contract.getAddress());
        }
    }
}