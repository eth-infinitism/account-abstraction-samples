# Sample ERC-4337 Hardhat Project

This project demonstrates a basic ERC-4337 Hardhat project.
It comes with a the following samples:

* `SimpleAccount.sol` - Smart Contract Account that mimics the functionality of an EOA
* `BLSAccount.sol` - Smart Contract Account that replaces the signature scheme by utilising the aggregated BLS signatures
* `TokenPaymaster.sol` - Paymaster Contract that allows users to pay gas in ERC-20 tokens instead of native Ether currency
* `VerifyingPaymaster.sol` - Paymaster Contract that allows a centralized backend server to manage gas payments for its users.

and many more.

Try running the following task:

```shell
npx hardhat test
```
