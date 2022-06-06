Titano-Fork for learning purposes




Progress:

-Deployed optimized contract to recent fork of BSC (from the last 10 blocks) using hardhat local environment, proving it can be deployed to the real BSC network)

-Tested functionality and got experience in updating a contract over time from it's initial distribution stage to a public (testnet) distribution





Notes learned while deploying contract on BSC testnet: 

-Setting up the automated market makers when it comes to getting fees working is important, check BSC scan to make sure to retrieve Pancake Swaps address as an automated market maker

-Set the nextRebase value to something that works for now, such as "1", If you dont see rebasing it is because autorebase is not turned on, frequency is very infrequent, or next rebase is set to too far from now. All these can be changed from the setter methods.

-Set the reward yield to be higher than the reward denominator to see any rewards

-Once fees are sent to contract, then the contract eventually funds the treasury and RFV when a certain cutoff is sent

-When sharp drop off functions, RFV wallets can manually fund titano token, same as treasury. Double Check to see if there is an automatic version of this.

-Important, Pancake swaps seem to not work after trying to send token from one address to another using metamask send functionality. Attempt to redeploy contract and recreate suspected reason for crash to see if this is a pivotal bug. If this is a bug, how can it be fixed if it ever happens. Fix this to be able to test titano fork on pancake swap again

Contract activity can be seen on events: https://testnet.bscscan.com/address/0xC57fD8EaA5a404b9199d411DA6009584452d2411





next TODOs:

-Make a nice UI for the token to make the project more presentable, however it is very usable without a UI as long as pancake swap is used.

-Make the project have more personality, and deploy it to BSC mainnet as educational purposes.

-Make testing scripts
