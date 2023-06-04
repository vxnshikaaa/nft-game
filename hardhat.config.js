require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://yolo-practical-market.ethereum-sepolia.discover.quiknode.pro/6a936fb81f96aa9f7eccc703701e598d3d68c6b2/",
      accounts: ["857a9f70a033a6823ea81f6a841fefe56ceffb68c5d6f0bbc68467a411b85fb3"],
    },
  },
};

//https://goerli.pixxiti.com/nfts/0x0d936e6b83929643f6fdB2D00ccaaAEf5f7789b2/1

//https://sepolia.pixxiti.com/nfts/ 0x1eE0EDef3f71DA42acAe4d9D6de5F9886b07863d/4