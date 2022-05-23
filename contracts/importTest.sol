// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract parent1{
    function testFun() public view virtual {
        console.log("parent1");
    }
}

 contract parent2 is parent1{
    function testFun() public view override virtual{
        console.log("parent2");
    }
}

contract child is parent1, parent2{
    function testFun() public view override (parent1, parent2) {
        super.testFun();
    }

    constructor() {
        testFun();
    }
}