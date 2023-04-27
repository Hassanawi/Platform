

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ERC20Airdrop = await ethers.getContractFactory("ERC20Airdrop");
  const erc20Airdrop = await ERC20Airdrop.deploy();

  const PresaleContract = await ethers.getContractFactory("PresaleContract");
  const presaleContract = await PresaleContract.deploy();

  const LiquidityLock = await ethers.getContractFactory("LiquidityLock"); 
  const liquidityLock = await LiquidityLock.deploy();

  console.log("ERC20Airdrop address:", erc20Airdrop.address);
  console.log("PresaleContract address:", presaleContract.address);
  console.log("LiquidityLock address:", liquidityLock.address);
}

main()
  
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
