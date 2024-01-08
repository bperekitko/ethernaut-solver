import { Ethernaut } from '../../typechain-types';
import { config } from '../config';
import { getLevelAddressByName, getLevelCreationMsgEthValue } from '../gamedata/gamedata';
import { EthereumClient } from './ethereum-client';

export const createLevelInstance = async (client: EthereumClient, levelName: string) => {
    console.log(`Creating new instance of ${levelName} to attack.`);
    const player = await client.getPlayerAddress();
    const contract = await client.getContract<Ethernaut>('Ethernaut', config.ethernautAddress);
    const levelAddress = getLevelAddressByName(levelName);
    const msgCreateValue = getLevelCreationMsgEthValue(levelName);

    const creationTx = await contract.createLevelInstance(levelAddress, { value: client.parseEther(msgCreateValue) });
    await creationTx.wait();

    const filter = contract.filters.LevelInstanceCreatedLog(player, undefined, levelAddress);
    const logs = await contract.queryFilter(filter, -1);

    return logs[0].args[1];
}

export const submitLevelInstance = async (client: EthereumClient, instanceAddress: string) => {
    const contract = await client.getContract<Ethernaut>('Ethernaut', config.ethernautAddress);
    const tx = await contract.submitLevelInstance(instanceAddress);
    await tx.wait();
}