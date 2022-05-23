// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyEthNFT is  ERC721URIStorage {
    constructor() ERC721("MyEthNFT", "MENFT") {}
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    function addNFTData(address owner, string memory tokenURI) public returns(uint256){
        uint256 newItemId = _tokenIds.current();
        _mint(owner, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _tokenIds.increment();
        return newItemId;
    }
}