import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import { HardhatUserConfig } from 'hardhat/config'

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.8.28',
        settings: {
          evmVersion: 'cancun',
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 1000000
          }
        }
      }
    ]
  }
}

export default config
