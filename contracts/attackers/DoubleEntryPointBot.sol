// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IDetectionBot {
    function handleTransaction(address user, bytes calldata msgData) external;
}

interface Forta {
    function setDetectionBot(address detectionBotAddress) external;

    function notify(address user, bytes calldata msgData) external;

    function raiseAlert(address user) external;
}

interface DoubleEntryPoint {
    function cryptoVault() external view returns (address);

    function delegatedFrom() external view returns (address);

    function forta() external view returns (address);
}

interface CryptoVault {
    function sweepToken(address token) external;
}

contract DoubleEntryPointBot is IDetectionBot {
    address private cryptoVault;

    constructor(address _cryptoVault) {
        cryptoVault = _cryptoVault;
    }

    function handleTransaction(
        address user,
        bytes calldata msgData
    ) external override {
        // wtf why it does not work?
        // address origSender = abi.decode(msgData[168:], (address)); 

        address origSender;
        assembly {
            origSender := calldataload(0xa8)
        }

        if (origSender == cryptoVault) {
            Forta(msg.sender).raiseAlert(user);
        }
    }
}
