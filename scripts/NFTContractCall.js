const { ethers } = require("hardhat");

async function main() {
    const [curUser] = await ethers.getSigners();
    console.log( "curUser Address : " , curUser.address)
    

    const MyNFT = await ethers.getContractFactory("MyEthNFT");
    const myNft = await MyNFT.connect(curUser);
    var tokenId = myNft.addNFTData(curUser.address, "../resource/itemResource.json")    
    

    console.log("NFT Balance in This Account: ", await myNft.balanceOf(curUser.address))
    console.log("NFT address: ", myNft.address)

    console.log("current Token Id : ", tokenId)
    console.log("Token URI : ", myNft.tokenURI(tokenId))
    
    
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})