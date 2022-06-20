
const hre = require("hardhat");

async function main() {
  const SimFormToken = await hre.ethers.getContractFactory("SimFormToken");
  const simFormToken = await hre.upgrades.deployProxy(SimFormToken);

  await simFormToken.deployed();

  console.log("SimFormToken deployed to:", simFormToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
