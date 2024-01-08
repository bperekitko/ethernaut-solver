import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const MAGIC_NUMBER_LEVEL_NAME = "MagicNumber"

export const magicNumberAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            const contractBytecCode = '0x600a600c600039600a6000f3602a60505260206050f3';
            const tx = await ethereum.sendRawTx({ data: contractBytecCode });
            const receipt = await tx.wait();
            const solverAddress = receipt?.contractAddress;
            console.log('Deployed solver at: ', solverAddress);

            const calldata = ethereum.createCallData('setSolver', ['address'], [solverAddress]);
            console.log('Setting solver in the instance.')
            const tx2 = await ethereum.sendRawTx({ to: instanceAddress, data: calldata });
            await tx2.wait();
        }
    }
}