const { ethers } = require("hardhat");

const deploy = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account ", deployer.address);

  const Hunters = await ethers.getContractFactory("Hunters");
  const deployed = await Hunters.deploy(10000);
  console.log("Hunters is deployed at: ", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("error: ", error);
    process.exit(1);
  });
