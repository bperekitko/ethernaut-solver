// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface Dex {
    function swap(address from, address to, uint amount) external;
    function approve(address spender, uint amount) external; 
    function token1() view external returns(address);
    function token2() view external returns(address);
    function getSwapAmount(address from, address to, uint amount) external view returns(uint);
    function balanceOf(address token, address account) external view returns (uint);
}