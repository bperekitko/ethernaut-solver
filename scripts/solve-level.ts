import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment, TaskArguments } from 'hardhat/types';
import { Attacker, getLevelAttacker } from '../src/attackers/attacker-provider';
import { EthereumClient, getHardHatEthereumClient } from '../src/ethereum/ethereum-client';
import { createLevelInstance, submitLevelInstance } from '../src/ethereum/ethernaut';
import { isLevelCompleted } from '../src/ethereum/statistics';

const LEVEL_NAME_PARAM = 'levelName';
const FORCE_PARAM = 'force';

const solveLevel = async (args: TaskArguments, hre: HardhatRuntimeEnvironment) => {
    const levelName = args[LEVEL_NAME_PARAM];
    const attacker = getLevelAttacker(levelName);
    if (!attacker) {
        console.log(`Cannot attack level ${levelName}. No attacker found.`);
        return;
    }
    const ethereumClient = getHardHatEthereumClient(hre);
    if (await isAlreadyCompleted(args[FORCE_PARAM], ethereumClient, levelName)) {
        console.log(`Level: ${levelName} is already completed. Use --force flag to attack it again.`)
    } else {
        await attackNewInstance(ethereumClient, levelName, attacker);
    }
}

const attackNewInstance = async (client: EthereumClient, levelName: string, attacker: Attacker) => {
    const instanceToSolve = await createLevelInstance(client, levelName);
    console.log(`Attacking level ${levelName} at instance: ${instanceToSolve}.`);

    await attacker.attack(client, instanceToSolve);
    console.log(`Attack completed, submitting instance`);
    await submitLevelInstance(client, instanceToSolve);
    console.log('Verifying if level is hacked.');
    const isCompleted = await isLevelCompleted(client, levelName);
    const message = isCompleted ? `${levelName} successfully attacked!` : `${levelName} attack failed!`;
    console.log(message);
}

const isAlreadyCompleted = async (skipCompletnessCheck: boolean, ethereumClient: EthereumClient, levelName: any) => {
    return !skipCompletnessCheck && await isLevelCompleted(ethereumClient, levelName);
}

task('solve', "Task to solve given level")
    .addPositionalParam(LEVEL_NAME_PARAM, "Name of the level to solve")
    .addFlag(FORCE_PARAM, 'If this flag is present check for already solved levels will be skipped')
    .setAction(solveLevel)
