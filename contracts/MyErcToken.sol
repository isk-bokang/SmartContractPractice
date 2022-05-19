//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyErcToken is ERC20{
    constructor() ERC20("MyErcToken", "MET") {
        console.log("Sender Address : ", msg.sender);
        _mint(msg.sender, 10000);
    }

    function decimals() public pure override(ERC20) returns (uint8){
        return 0;
    }
}
