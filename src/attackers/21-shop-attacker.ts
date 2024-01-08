import { ShopAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const SHOP_LEVEL_NAME = "Shop"

export const shopAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying shop attacker');

            const contract = await ethereum.deployContract<ShopAttack>('ShopAttack', [instanceAddress]);
        
            console.log('Done. Deployed at: ', await contract.getAddress(), 'Attacking');
        
            const attackTx = await contract.attack();
            await attackTx.wait();
        }
    }
}