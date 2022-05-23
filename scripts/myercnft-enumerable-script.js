const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log( "Deployer Address : " , deployer.address)
    
    const MyNFT = await ethers.getContractFactory("MyErcNFT_Enumerable");

    const myNft = await MyNFT.deploy();
    var tokenId = await myNft.addNFTData(deployer.address, "../resource/itemResource.json")    
    var tokenId2 = await myNft.addNFTData(deployer.address, "../resource/itemResource.json")

    console.log("NFT Balance in This Account: ", await myNft.balanceOf(deployer.address))
    console.log("NFT address: ", myNft.address)

    console.log("NFT Token ID: ", tokenId)
    console.log("NFT Token ID2: ", tokenId2)
    console.log("Total Amount : ", await myNft.totalSupply())

}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})