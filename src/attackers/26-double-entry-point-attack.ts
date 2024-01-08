import { DoubleEntryPoint, DoubleEntryPointBot, Forta } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const DOUBLE_ENTRY_POINT_LEVEL_NAME = "DoubleEntryPoint"

export const doubleEntryPointAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const contract = await ethereum.getContract<DoubleEntryPoint>('DoubleEntryPoint', instanceAddress);
            const fortaAddress = await contract.forta();
            const cryptoVault = await contract.cryptoVault();

            console.log('Deploying bot contract')
            const alertBot = await ethereum.deployContract<DoubleEntryPointBot>('DoubleEntryPointBot', [cryptoVault]);
            console.log('Bot deployed at: ', await alertBot.getAddress(), ' Setting up bot in forta');
            const fortaContract = await ethereum.getContract<Forta>('Forta', fortaAddress);
            const tx = await fortaContract.setDetectionBot(await alertBot.getAddress());
            await tx.wait();
        }
    }
}
