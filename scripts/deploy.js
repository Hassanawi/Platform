

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  const LiquidityLock = await ethers.getContractFactory("LiquidityLock"); 
  const liquidityLock = await LiquidityLock.deploy();

  console.log("Token address:", liquidityLock.address);
}

main()
  
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
