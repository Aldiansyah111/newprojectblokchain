const hre = require("hardhat");

async function main() {
    const ChatApp = await hre.ethers.getContractFactory("chat_app"); 
    const chatapp = await ChatApp.deploy(); 

    await chatapp.waitForDeployment();

    console.log(`Contract deployed to: ${await chatapp.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
