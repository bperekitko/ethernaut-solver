# ethernaut-solver
Application with solutions to the Ethernaut levels (https://ethernaut.openzeppelin.com/). 

# Prerequisites

Create '.env' file in main directory  (copy .env-example) and fill missing variables. You'll need Alchemy account and a private key to a wallet with some sepolia ETH.


# Usage
Level names are written in /src/gamedata/levels.sepolia.json file.

```shell
npx hardhat solve <levelName>
npx hardhat solved-levels
npx hardhat accounts
```