//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Mytoken{
    string public name = "my first token";
    string public symbol = "MFT";
    uint256 public totalSupply = 1000;
    address public owner;
    mapping(address => uint256) balances;

    constructor(){
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external{
        require(balances[msg.sender] >= amount, "Not Enough Tokens");

        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns(uint256) {
        return balances[account];
    }
}