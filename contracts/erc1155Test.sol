//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract TOKEN1155 is ERC1155 {
    constructor(address owner, uint256 amount) ERC1155("") {
        _mint(owner, 1, amount , '0x00');
    }
}