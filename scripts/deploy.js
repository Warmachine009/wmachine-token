
const hre = require("hardhat");

async function main() {
  const WmachineToken = await hre.ethers.getContractFactory("wmachine");
  const wmachineToken = await WmachineToken.deploy(100000000, 50);

  await wmachineToken.deployed()
  console.log("wmachine Token deployed: ", wmachineToken.address);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
