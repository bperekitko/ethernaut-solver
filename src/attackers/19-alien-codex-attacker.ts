import { AlienCodexAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const ALIEN_CODEX_LEVEL_NAME = "AlienCodex"

export const alienCodexAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying alien codex attacker');

            const contract = await ethereum.deployContract<AlienCodexAttack>('AlienCodexAttack', [instanceAddress]);

            console.log('Deployed at: ', await contract.getAddress(), ' Attacking');

            const attackTx = await contract.attack();
            await attackTx.wait();
        }
    }
}