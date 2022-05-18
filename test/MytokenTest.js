const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", function () {
  it("Deployment shoud assign the total supply of tokens to the owner", async function () {
    
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Mytoken")
    const myToken = await Token.deploy();
    const ownerBalance = await myToken.balanceOf(owner.address)
    
    console.log(owner)

    expect(await myToken.totalSupply()).to.equal(ownerBalance);

  });
});
