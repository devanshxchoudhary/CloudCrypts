require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "ba5aa33765ea4ea6a95e0d68ec8b4f8f";
const SEPOLIA_PRIVATE_KEY = "f18e659a71dba0e2385da492edf4845964d276a0dcab4ee4fc2d207081e9c1c7";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337
  },
  sepolia: {
    url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
    accounts: [SEPOLIA_PRIVATE_KEY]
  }

},
  paths: {
    artifacts: "./client/src/artifacts",
  },
}
