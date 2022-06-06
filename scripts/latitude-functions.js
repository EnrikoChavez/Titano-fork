// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Latitude = await hre.ethers.getContractFactory("Latitude");
  const latitude = await Latitude.attach("0xC57fD8EaA5a404b9199d411DA6009584452d2411"); // 0xC57fD8EaA5a404b9199d411DA6009584452d2411 is where Laitude BscTestnet Lives
  
  //use for hardhat testing, address changes frequently
//   const Latitude = await hre.ethers.getContractFactory("LatitudeTesting");
//   const latitude = await Latitude.attach("0x5053AE5ade0d7c82968798E4F686886187e0DF47"); 
  
  //getter functions, no gas needed
  const cs = await latitude.getCirculatingSupply();
  console.log("circulating supply: ", cs);

  var ar = await latitude.autoRebase();
  console.log("auto rebase turned on: ", ar);

  

  var account = "0xC57fD8EaA5a404b9199d411DA6009584452d2411";
  var bo = await latitude.balanceOf(account);
  console.log(account, "  balance:  ", bo);

//   const idf = await latitude.rewardYield();
//   console.log("reward yield: ", idf);

//   await latitude.transfer("0x70997970c51812dc3a010c7d01b50e0d17dc79c8", 10000);

//   await latitude.setRebaseFrequency(1);
//   await latitude.setNextRebase(1);

  var ts = await latitude.totalSupply();
  console.log("total supply", ts);

  var fe = await latitude.checkFeeExempt("38a2500839ffe53c6c299c832b8ac21bfe9cf787");
  console.log("  fee exempt:  ", fe);

  var amm = await latitude.automatedMarketMakerPairs("4943214fe84be3ca37778088a4e3eaf3c16646f7");
  console.log("  amm:  ", amm);

  //await latitude.setAutomatedMarketMakerPair("7e5a17e11af41be2b6b4d6e4588d25fb34853a4e", true);

//   account = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
//   bo = await latitude.balanceOf(account);
//   console.log(account, "  balance:  ", bo);

//   account = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
//   bo = await latitude.balanceOf(account);
//   console.log(account, "  balance:  ", bo);

//   ts = await latitude.totalSupply();
//   console.log("total supply", ts);


  //setter functions, only call when necessary as they use gas
//  await latitude.setInitialDistributionFinished(true);
//  await latitude.setAutoRebase(true);
//  await latitude.setRewardYield(39581250000, 10581250000);
//   await latitude.setFees(12,12,12,12,100)
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
