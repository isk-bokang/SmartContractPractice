const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log( "Deployer Address : " , deployer.address)
    

    const Token = await ethers.getContractFactory("MyErcToken");
    const token = await Token.deploy();

    console.log("Token Balance in This Account: ", await token.balanceOf(deployer.address))
    console.log("Token address: ", token.address)

    
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})