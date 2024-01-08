import { EthereumClient } from '../ethereum/ethereum-client';
import { HELLO_ETHERNAUT_LEVEL_NAME, helloEthernautAttacker } from './00-hello-ethernaut-attack';
import { FALLBACK_LEVEL_NAME, fallbackAttacker } from './01-fallback-attacker';
import { FALLOUT_LEVEL_NAME, falloutAttacker } from './02-fallout-attacker';
import { COIN_FLIP_LEVEL_NAME, coinFlipAttacker } from './03-coinflip-attacker';
import { TELEPHONE_LEVEL_NAME, telephoneAttacker } from './04-telephone-attacker';
import { TOKEN_LEVEL_NAME, tokenAttacker } from './05-token-attacker';
import { DELEGATION_LEVEL_NAME, delegationAttacker } from './06-delegation-attack';
import { FORCE_LEVEL_NAME, forceAttacker } from './07-force-attack';
import { VAULT_LEVEL_NAME, vaultAttacker } from './08-vault-attack';
import { KING_LEVEL_NAME, kingAttacker } from './09-king-attacker';
import { REENTRANCY_LEVEL_NAME, reentrancyAttacker } from './10-reentrancy-attack';
import { ELEVATOR_LEVEL_NAME, elevatorAttacker } from './11-elevator-attacker';
import { PRIVACY_LEVEL_NAME, privacyAttacker } from './12-privacy-attacker';
import { GATEKEEPER_ONE_LEVEL_NAME, gatekeeperOneAttacker } from './13-gate-keeper-one-attacker';
import { GATEKEEPER_TWO_LEVEL_NAME, gatekeeperTwoAttacker } from './14-gatekeeper-two-attacker';
import { NAUGHT_COIN_LEVEL_NAME, naughtCoinAttacker } from './15-naught-coin-attacker';
import { PRESERVATION_LEVEL_NAME, preservationAttacker } from './16-preservation-attacker';
import { RECOVERY_LEVEL_NAME, recoveryAttacker } from './17-recovery-attacker';
import { MAGIC_NUMBER_LEVEL_NAME, magicNumberAttacker } from './18-magic-number-attacker';
import { ALIEN_CODEX_LEVEL_NAME, alienCodexAttacker } from './19-alien-codex-attacker';
import { DENIAL_LEVEL_NAME, denialAttacker } from './20-denial-attacker';
import { SHOP_LEVEL_NAME, shopAttacker } from './21-shop-attacker';
import { DEX_LEVEL_NAME, dexAttacker } from './22-dex-attacker';
import { DEX_TWO_LEVEL_NAME, dexTwoAttacker } from './23-dex-two-attacker';
import { PUZZLE_WALLET_LEVEL_NAME, puzzleWalletAttacker } from './24-puzzle-wallet-attacker';
import { MOTORBIKE_LEVEL_NAME, motorbikeAttacker } from './25-motorbike-attacker';
import { DOUBLE_ENTRY_POINT_LEVEL_NAME, doubleEntryPointAttacker } from './26-double-entry-point-attack';
import { GOOD_SAMARITAN_LEVEL_NAME, goodSamaritanAttacker } from './27-good-samaritan-attacker';
import { GATEKEEPER_THREE_LEVEL_NAME, gatekeeperThreeAttacker } from './28-gatekeeper-three-attacker';
import { SWITCH_LEVEL_NAME, switchAttacker } from './29-switch-attacker';

export type Attacker = {
    attack(client: EthereumClient, instanceAddress: string): Promise<void>;
}

export const getLevelAttacker = (levelName: string): Attacker | undefined => {
    return {
        [HELLO_ETHERNAUT_LEVEL_NAME]: helloEthernautAttacker(),
        [FALLBACK_LEVEL_NAME]: fallbackAttacker(),
        [FALLOUT_LEVEL_NAME]: falloutAttacker(),
        [COIN_FLIP_LEVEL_NAME]: coinFlipAttacker(),
        [TELEPHONE_LEVEL_NAME]: telephoneAttacker(),
        [TOKEN_LEVEL_NAME]: tokenAttacker(),
        [DELEGATION_LEVEL_NAME]: delegationAttacker(),
        [FORCE_LEVEL_NAME]: forceAttacker(),
        [VAULT_LEVEL_NAME]: vaultAttacker(),
        [KING_LEVEL_NAME]: kingAttacker(),
        [REENTRANCY_LEVEL_NAME]: reentrancyAttacker(),
        [ELEVATOR_LEVEL_NAME]: elevatorAttacker(),
        [PRIVACY_LEVEL_NAME]: privacyAttacker(),
        [GATEKEEPER_ONE_LEVEL_NAME]: gatekeeperOneAttacker(),
        [GATEKEEPER_TWO_LEVEL_NAME]: gatekeeperTwoAttacker(),
        [NAUGHT_COIN_LEVEL_NAME]: naughtCoinAttacker(),
        [PRESERVATION_LEVEL_NAME]: preservationAttacker(),
        [RECOVERY_LEVEL_NAME]: recoveryAttacker(),
        [MAGIC_NUMBER_LEVEL_NAME]: magicNumberAttacker(),
        [ALIEN_CODEX_LEVEL_NAME]: alienCodexAttacker(),
        [DENIAL_LEVEL_NAME]: denialAttacker(),
        [SHOP_LEVEL_NAME]: shopAttacker(),
        [DEX_LEVEL_NAME]: dexAttacker(),
        [DEX_TWO_LEVEL_NAME]: dexTwoAttacker(),
        [PUZZLE_WALLET_LEVEL_NAME]: puzzleWalletAttacker(),
        [MOTORBIKE_LEVEL_NAME]: motorbikeAttacker(),
        [DOUBLE_ENTRY_POINT_LEVEL_NAME]: doubleEntryPointAttacker(),
        [GOOD_SAMARITAN_LEVEL_NAME]: goodSamaritanAttacker(),
        [GATEKEEPER_THREE_LEVEL_NAME]: gatekeeperThreeAttacker(),
        [SWITCH_LEVEL_NAME]: switchAttacker(),
    }[levelName]
}