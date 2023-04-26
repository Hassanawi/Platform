const { hre } = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const AirDrop = await ethers.getContractFactory("ERC20Airdrop"); //Replace with name of your smart contract
  const airDrop = await AirDrop.deploy();

  console.log("Token address:", airDrop.address);
}

main()
  
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
