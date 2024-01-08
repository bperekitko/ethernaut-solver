import { Statistics } from '../../typechain-types/contracts/Statistics';
import { config } from '../config';
import { getLevelAddressByName } from '../gamedata/gamedata';
import { EthereumClient } from './ethereum-client';

export const isLevelCompleted = async (client: EthereumClient, levelName: string) => {
    const playerAddress = await client.getPlayerAddress();
    const contract = await client.getContract<Statistics>('Statistics', config.statisticsAddress);
    const playerExists = await contract.doesPlayerExist(playerAddress);

    return playerExists
        && await contract.isLevelCompleted(playerAddress, getLevelAddressByName(levelName));
}