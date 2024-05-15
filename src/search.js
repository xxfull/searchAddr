const web3 = require('@solana/web3.js');
const fs = require("fs");

const filePath = 'data/keypair.json'

while (true) {
    const wallet = web3.Keypair.generate();

    const wallet_str = wallet.publicKey.toString('base58')

    const str_1 = wallet_str[0]
   
    if(wallet_str[1] == str_1 && wallet_str[2] == str_1 && wallet_str[3] == str_1 && wallet_str[4] == str_1 && wallet_str[5] == str_1 ){
        writeLog(wallet)
    }
}


function writeLog(wallet) {
    let logjson = JSON.parse(fs.readFileSync(filePath));

    let record = {"publicKey": wallet.publicKey,"privateKey": wallet.secretKey}

    logjson.log.push(record)

    fs.writeFileSync(filePath, JSON.stringify(logjson));
}