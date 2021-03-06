const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log( "Deployer Address : " , deployer.address)
    
    const MyNFT = await ethers.getContractFactory("MyEthNFT");

    const myNft = await MyNFT.deploy();
    console.log("NFT Balance in This Account: ", await myNft.balanceOf(deployer.address))
    var tokenId = await myNft.addNFTData(deployer.address, "../resource/itemResource.json")    
    var tokenId2 = await myNft.addNFTData(deployer.address, "../resource/itemResource.json") 


    await myNft.deployed();
    //await myNft2.deployed();

    console.log("NFT Balance in This Account: ", await myNft.balanceOf(deployer.address))
    console.log("NFT1 address: ", await myNft._tokenIds)
    console.log("Total Amount : ", await myNft.totalSupply())


}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})