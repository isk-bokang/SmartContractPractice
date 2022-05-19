const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log( "Deployer Address : " , deployer.address)
    console.log( "Account Balance : ", ( await deployer.getBalance()).toString())

    const Token = await ethers.getContractFactory("Mytoken");
    const token = await Token.deploy();
    
    console.log("Token address: ", token.address)
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
})