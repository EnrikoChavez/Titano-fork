require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      "outputSelection": {
        "*": {
          "*": [
            "evm.bytecode",
            "evm.deployedBytecode",
            "devdoc",
            "userdoc",
            "metadata",
            "abi"
          ]
        }
      },
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    chainstack: {
        url: "https://nd-804-006-500.p2pify.com/2180ad5f697282081c9240ca44c03437",
        accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    },
    localHost: {
      url: "http://127.0.0.1:8545",
      gas: 1200000000000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    }
  }
};
