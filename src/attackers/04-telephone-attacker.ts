import { TelephoneAttacker } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const TELEPHONE_LEVEL_NAME = "Telephone"

export const telephoneAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying TelephoneAttacker');

            const attackerContract = await ethereum.deployContract<TelephoneAttacker>('TelephoneAttacker');
            const deployedAddress = await attackerContract.getAddress();

            console.log('Deployed TelephoneAttacker at: ', deployedAddress)
            console.log('Attacking!')

            const attackTx = await attackerContract.attack(instanceAddress);
            await attackTx.wait();
        }
    }
}