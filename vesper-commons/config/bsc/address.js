'use strict'

const Address = {
  BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  MultiCall: '0xcA11bde05977b3631167028862bE2a173976CA11',
  WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  NATIVE_TOKEN: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  Alpaca: {
    ibBNB: '0xd7D069493685A581d27824Fc46EdA46B7EfC0063',
    ibBUSD: '0x7C9e73d4C71dae564d41F78d56439bB4ba87592f',
  },
  Stargate: {
    STG: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
    router: '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8',
    lpStaking: '0x3052A0F6ab15b4AE1df39962d5DdEFacA86DaB47',
  },
  Venus: {
    Unitroller: '0xfD36E2c2a6789Db23113685031d7F16329158384',
    vBNB: '0xA07c5b74C9B40447a954e1466938b865b6BBea36',
    vBUSD: '0x95c78222B3D6e262426483D42CfA53685A67Ab9D',
    XVS: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
  },
  Vesper: {
    DEPLOYER: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271',
    FEE_COLLECTOR: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271', // Deployer EOA
    KEEPER: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271', // Deployer EOA
    Swapper: '0x2E99f1b571d1A3D7987f8CaDd9F4C5f2240354e2',
  },
}

module.exports = Object.freeze(Address)
