const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log( "Deployer Address : " , deployer.address)
    

    const MyNFT = await ethers.getContractFactory("MyEthNFT");
    const myNft = await MyNFT.deploy();
    await myNft.addNFTData(deployer.address, "../resource/itemResource.json")   
    var tokenId = await myNft.addNFTData(deployer.address, "../resource/itemResource.jsn")    


    console.log("NFT Balance in This Account: ", await myNft.balanceOf(deployer.address))
    console.log("NFT address: ", myNft.address)

    console.log("current Token Id : ",await tokenId)
    console.log("Token URI : ", await myNft.tokenURI(0))
    
    
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})