const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token Contract", function () {
  it("Deployment shoud assign the total supply of tokens to the owner", async function () {
    
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Mytoken")
    const myToken = await Token.deploy();
    const ownerBalance = await myToken.balanceOf(owner.address)
    

    expect(await myToken.totalSupply()).to.equal(ownerBalance);

  });
});

describe("Transactions", function () {
  it("Should tranfer tokens between accounts", async function () {
    
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Mytoken")
    const myToken = await Token.deploy();
    
    await myToken.transfer(addr1.address, 50);
    expect(await myToken.balanceOf(addr1.address)).to.equal(50);

    await myToken.transfer(addr2.address, 150);
    expect(await myToken.balanceOf(addr2.address)).to.equal(150);

    expect(await myToken.balanceOf(owner.address)).to.equal(await myToken.totalSupply() - 200);
  });
});