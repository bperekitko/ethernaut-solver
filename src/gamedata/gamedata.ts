import { KING_LEVEL_NAME } from '../attackers/09-king-attacker';
import { REENTRANCY_LEVEL_NAME } from '../attackers/10-reentrancy-attack';
import { RECOVERY_LEVEL_NAME } from '../attackers/17-recovery-attacker';
import { DENIAL_LEVEL_NAME } from '../attackers/20-denial-attacker';
import { PUZZLE_WALLET_LEVEL_NAME } from '../attackers/24-puzzle-wallet-attacker';

export const getLevelsData = () => {
    return require(`../gamedata/levels.sepolia.json`);
}

export const getLevelAddressByName = (name: string): string => {
    return getLevelsData()[name];
}
const levelNamesRequiringEthOnCreation = [
    KING_LEVEL_NAME,
    REENTRANCY_LEVEL_NAME,
    RECOVERY_LEVEL_NAME,
    DENIAL_LEVEL_NAME,
    PUZZLE_WALLET_LEVEL_NAME
]

export const getLevelCreationMsgEthValue = (levelName: string) => {
    return levelNamesRequiringEthOnCreation.includes(levelName) ? '0.001' : '0';
}
