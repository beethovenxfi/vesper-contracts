'use strict'

const Address = {
  ZERO: '0x0000000000000000000000000000000000000000',
  DAIe: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
  SUSHI_ROUTER: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', // TraderJoe router
  UNI2_ROUTER: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', // TraderJoe router
  NATIVE_TOKEN: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', // WAVAX
  USDCe: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', // USDC bridge token on Avalanche
  USDC: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', // Native USDC on Avalanche chain
  USDTe: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
  WETHe: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
  WBTCe: '0x50b7545627a5162F82A992c33b87aDc75187B218',
  renBTC: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
  MultiCall: '0x98e2060F672FD1656a07bc12D7253b5e41bF3876',
  MultiSend: '0xA1dabEF33b3B82c7814B6D82A79e50F4AC44102B',
  Aave: {
    AddressProvider: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
    aAvaDAI: '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE',
    aAvaWETH: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
    avDAI: '0x47afa96cdc9fab46904a55a6ad4bf6660b53c38a',
    avUSDC: '0x46A51127C3ce23fb7AB1DE06226147F446e4a857',
    avUSDT: '0x532e6537fea298397212f09a61e03311686f548e',
    avWBTC: '0x686bef2417b6dc32c50a3cbfbcc3bb60e1e9a15d',
  },
  Alpha: {
    ibDAIev2: '0x69491FD9a6D9e32f32113cC076B1B69D8B9EBD3F',
    ibWETHev2: '0xf9EB24B83B51fBC0Bcb1204221c8C9f1Cef33994',
    ibUSDCev2: '0xD3843b60e69f958eF93BeC299467e6Ed301CbEeB',
    ibUSDCv2: '0xA0b8aDC61e76e2b3961EB66e2E37840e02053591',
    ibUSDTev2: '0x858D6353A52c25C53Df1869230282d22b41f5790',
    ibWBTCev2: '0x1DE90c0cE3D940412C3Ba7322a257F7BDcC00ceB',
    ibAVAXv2: '0x21C630B7824D15BcDFeefA73CBd4e49cAfe9F836',
  },
  Benqi: {
    COMPTROLLER: '0x486Af39519B4Dc9a7fCcd318217352830E8AD9b4',
    REWARD_DISTRIBUTOR: '0x486Af39519B4Dc9a7fCcd318217352830E8AD9b4',
    qiAVAX: '0x5C0401e81Bc07Ca70fAD469b451682c0d747Ef1c',
    qiETH: '0x334AD834Cd4481BB02d09615E7c11a00579A7909',
    qiBTC: '0xe194c4c5aC32a3C9ffDb358d9Bfd523a0B6d1568',
    qiUSDC: '0xBEb5d47A3f720Ec0a390d04b4d41ED7d9688bC7F',
    qiUSDCn: '0xB715808a78F6041E46d61Cb123C9B4A27056AE9C',
    qiUSDT: '0xc9e5999b8e75C3fEB117F6f73E664b9f3C8ca65C',
    qiDAI: '0x835866d37AFB8CB8F8334dCCdaf66cf01832Ff5D',
    qiLINK: '0x4e9f683A27a6BdAD3FC2764003759277e93696e6',
    qiQI: '0x35Bd6aedA81a7E5FC7A7832490e71F757b0cD9Ce',
    QI: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
  },
  MultiSig: {
    safe: '0x98ca142b7a7856375d665B58A64FB6D29b49eF1f',
  },
  TraderJoe: {
    COMPTROLLER: '0xdc13687554205E5b89Ac783db14bb5bba4A1eDaC',
    REWARD_DISTRIBUTOR: '0x45B2C4139d96F44667577C0D7F7a7D170B420324',
    jAVAX: '0xC22F01ddc8010Ee05574028528614634684EC29e',
    jWETH: '0x929f5caB61DFEc79a5431a7734a68D714C4633fa',
    jWBTC: '0x3fE38b7b610C0ACD10296fEf69d9b18eB7a9eB1F',
    jUSDC: '0xEd6AaF91a2B084bd594DBd1245be3691F9f637aC',
    jUSDCNative: '0x29472D511808Ce925F501D25F9Ee9efFd2328db2',
    jUSDT: '0x8b650e26404AC6837539ca96812f0123601E4448',
    jDAI: '0xc988c170d0E38197DC634A45bF00169C7Aa7CA19',
    jLINK: '0x585E7bC75089eD111b656faA7aeb1104F5b96c15',
    jMIM: '0xcE095A9657A02025081E0607c8D8b081c76A75ea',
    JOE: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
  },
  Vesper: {
    ADDRESS_LIST_FACTORY: '0xc5CdF8CBE886FC5c1EF5CD4fdd599C975eC6BB54',
    DEPLOYER: '0x1cbfae0367a9b1e4ac2c158e57b5f00ccb337271',
    FEE_COLLECTOR: '0x1cbfae0367a9b1e4ac2c158e57b5f00ccb337271', // Same as deployer
    KEEPER: '0x76d266DFD3754f090488ae12F6Bd115cD7E77eBD', // Bot address
    JCV: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271', // JCV Keeper
    MP: '0xdf826ff6518e609E4cEE86299d40611C148099d5', // MP Keeper
    Swapper: '0xC85831dED6fCB15A288dfF49D256CBBC2B58388f',
    vaWBTCe: '0xba3Fb2277c7b33D1C3E1b558cf8060bc7443b13d',
    vaWETHe: '0x2B6c40Ef15Db0D78D08A7D1b4E12d57E88a3e324',
    vaUSDCe: '0x13AECC59A88A65F02E053eEce29d743a952D6f1e',
    vaUSDC: '0x4378041dceF18713CE30E36A6b9c8aA41C0dB631',
    vaDAIe: '0x5323F445A8665239222b117aE095423a238F5706',
    VSP: '0xE70EFb1ff1C0b63FDF84B5EA319693cf804914A8',
    aTokenOracle: '0x482841410B613b46752C67bc42c51BaF043EFa05',
    MasterOracle: '0xe42e893353448143f36B59E0122fA8F58346611A',
    CurveLpTokenOracle: '0x757d531F2Eb1148f003853b51e3F6971e260BE72',
    BtcPeggedOracle: '0x47A584a5C10A3BC39b61977411f976f5787663d4',
  },
  Curve: {
    CRV: '0x47536F17F4fF30e64A96a7555826b8f9e66ec468',
    AVWBTCRENBTC_POOL: '0x16a7DA911A4DD1d83F3fF066fE28F3C792C50d90',
    AAVE_POOL: '0x7f90122BF0700F9E7e1F688fe926940E8839F353',
    REN_POOL_LP: '0xC2b1DF84112619D190193E48148000e3990Bf627',
    AAVE_POOL_LP: '0x1337BedC9D22ecbe766dF105c9623922A27963EC',
  },
}

module.exports = Object.freeze(Address)
