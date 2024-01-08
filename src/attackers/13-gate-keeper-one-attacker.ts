import { GatekeeperOneAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const GATEKEEPER_ONE_LEVEL_NAME = "GatekeeperOne"

export const gatekeeperOneAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying GatekeeperOneAttacker');

            const contract = await ethereum.deployContract<GatekeeperOneAttack>('GatekeeperOneAttack');
            console.log('Attacker deployed at: ', await contract.getAddress(), ' Perfoming the attack');

            const attackTx = await contract.attack(instanceAddress);
            await attackTx.wait();
        }
    }
}