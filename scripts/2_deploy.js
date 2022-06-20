
const hre = require("hardhat");

async function main() {
  const SimFormTokenFactory = await hre.ethers.getContractFactory("SimFormTokenFactory");
  const simFormTokenFactory = await SimFormTokenFactory.deploy("0x0247554D4fadA5b13D8384f6Abcc81e5Ff5b4cbF");

  await simFormTokenFactory.deployed();

  console.log("SimFormTokenFactory deployed to:", simFormTokenFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
