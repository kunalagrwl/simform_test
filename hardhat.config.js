require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const RINKEBY_URL=process.env.RINKEBY_URL;
const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: MUMBAI_URL,
      gasPrice: 35000000000,
      accounts: [PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY
  }
};
