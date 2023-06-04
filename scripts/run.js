const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Bayonetta", "Lightning", "Spyro", "Chun-Li", "Kratos"],
        ["https://fictionhorizon.com/wp-content/uploads/2021/09/Bayonetta.webp",
        "https://fictionhorizon.com/wp-content/uploads/2022/12/Lightning-1019x1300.webp",
        "https://fictionhorizon.com/wp-content/uploads/2022/12/Spyro.webp",
        "https://fictionhorizon.com/wp-content/uploads/2022/12/Chun-Li.png",
        "https://fictionhorizon.com/wp-content/uploads/2022/12/Kratos.jpg"],
        [100, 200, 300, 400, 500], // HP values
        [100, 75, 50, 25, 5] ,      // Attack damage values
        "The Joker",
        "https://tse2.mm.bing.net/th?id=OIP.-6bs1dL3x5JRd7zrIisJsQHaHa&pid=Api&P=0",
        10000,
        50     // Boss attack damage value
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(4);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();
    
    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done!");

    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);
};

const runMain = async() => {
    try{
        await main();
        process.exit(0);
    } catch (error){
        console.log(error);
        process.exit(1);
    }
};

runMain();