'use strict'
const Address = {
  ZERO: '0x0000000000000000000000000000000000000000',
  DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  MIM: '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3',
  MUSD: '0xe2f2a5C287993345a840Db3B0845fbC70f5935a5',
  FEI: '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
  UNI: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  FRAX: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
  ALUSD: '0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9',
  SUSHI_ROUTER: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  UNI2_ROUTER: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  NATIVE_TOKEN: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
  MultiCall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  MultiSend: '0x40A2aCCbd92BCA938b02010E17A5b8929b49130D',
  WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  DPI: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
  SHIB: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
  PUNK: '0x269616d549d7e8eaa82dfb17028d0b212d11232a',
  APE: '0x4d224452801ACEd8B2F0aebE155379bb5D594381',
  LMR: '0x4b1D0b9F081468D780Ca1d5d79132b64301085d1',
  stETH: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
  renBTC: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  CVX: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
  FXS: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
  sUSD: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
  Aave: {
    AddressProvider: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
    AAVE: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
    aDAI: '0x028171bCA77440897B824Ca71D1c56caC55b68A3',
    aDPI: '0x6F634c6135D2EBD550000ac92F494F9CB8183dAe',
    aFEI: '0x683923dB55Fead99A79Fa01A27EeC3cB19679cC3',
    aLINK: '0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0',
    aSTETH: '0x1982b2F5814301d4e9a8b0201555376e62F82428',
    aUNI: '0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1',
    aUSDC: '0xBcca60bB61934080951369a648Fb03DF4F96263C',
    aUSDCv1: '0x9bA00D6856a4eDF4665BcA2C2309936572473B7E',
    aUSDT: '0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811',
    aWETH: '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e',
    stkAAVE: '0x4da27a545c0c5B758a6BA100e3a049001de870f5',
    aWBTC: '0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656',
  },
  Alpha: {
    ibDAIv2: '0xee8389d235E092b2945fE363e97CDBeD121A0439',
    ibDPIv2: '0xd80ce6816f263c3ca551558b2034b61bc9852b97',
    ibETHv2: '0xeea3311250fe4c3268f8e684f7c87a82ff183ec1',
    ibLINKv2: '0xb59Ecdf6C2AEA5E67FaFbAf912B26658d43295Ed',
    ibUSDCv2: '0x08bd64BFC832F1C2B3e07e634934453bA7Fa2db2',
    ibUSDTv2: '0x020eDC614187F9937A1EfEeE007656C6356Fb13A',
  },
  Compound: {
    COMPTROLLER: '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B',
    COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
    cDAI: '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',
    cETH: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
    cLINK: '0xFAce851a4921ce59e912d19329929CE6da6EB0c7',
    cUNI: '0x35A18000230DA775CAc24873d00Ff85BccdeD550',
    cUSDC: '0x39AA39c021dfbaE8faC545936693aC917d5E7563',
    cUSDT: '0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9',
    cWBTC: '0xccF4429DB6322D5C611ee964527D42E5d685DD6a',
  },
  DyDx: {
    SOLO: '0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e',
  },
  Euler: {
    Euler: '0x27182842E098f60e3D576794A5bFFb0777E025d3',
    EUL: '0xd9Fcd98c322942075A5C3860693e9f4f03AAE07b',
    EulDistributor: '0xd524E29E3BAF5BB085403Ca5665301E94387A7e2',
    Exec: '0x59828FdF7ee634AaaD3f58B19fDBa3b03E2D9d80',
    Markets: '0x3520d5a913427E6F0D6A83E07ccD4A4da316e4d3',
  },
  Inverse: {
    COMPTROLLER: '0x4dCf7407AE5C07f8681e1659f626E114A7667339',
    INV: '0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68',
    anETH: '0x697b4acAa24430F254224eB794d2a85ba1Fa1FB8',
  },
  IronBank: {
    Unitroller: '0xAB1c342C7bf5Ec5F02ADEA1c2270670bCa144CbB',
    iWETH: '0x41c84c0e2EE0b740Cf0d31F63f3B6F627DC6b393',
    iDAI: '0x8e595470Ed749b85C6F7669de83EAe304C2ec68F',
    iDPI: '0x7736Ffb07104c0C400Bb0CC9A7C228452A732992',
  },
  Drops: {
    COMPTROLLER: '0x79b56CB219901DBF42bB5951a0eDF27465F96206',
    DOP: '0x6bB61215298F296C55b19Ad842D3Df69021DA2ef',
    dETH: '0x4aE7413182849D062B72518928a4b2DE87F0e411',
  },
  Maker: {
    MCD_JOIN_ETH_A: '0x2F0b23f53734252Bda2277357e97e1517d6B042A',
    MCD_JOIN_ETH_C: '0xF04a5cC80B1E94C69B48f5ee68a08CD2F09A7c3E',
    MCD_JOIN_WBTC_A: '0xBF72Da2Bd84c5170618Fbe5914B0ECA9638d5eb5',
    MCD_JOIN_WBTC_C: '0x7f62f9592b823331E012D3c5DdF2A7714CfB9de2',
    MCD_JOIN_LINK_A: '0xdFccAf8fDbD2F4805C174f856a317765B49E4a50',
    MCD_JOIN_UNI_A: '0x3BC3A58b4FC1CbE7e98bB4aB7c99535e8bA9b8F1',
    MCD_JOIN_WSTETH_A: '0x10CD5fbe1b404B7E19Ef964B63939907bdaf42E2',
    MCD_JOIN_WSTETH_B: '0x248cCBf4864221fC0E840F29BB042ad5bFC89B5c',
  },
  Vesper: {
    ADDRESS_LIST_FACTORY: '0xded8217De022706A191eE7Ee0Dc9df1185Fb5dA3',
    COLLATERAL_MANAGER: '0xaBC64889601F01e7B26277Ef8756250d6ABf8c18',
    DEPLOYER: '0xB5AbDABE50b5193d4dB92a16011792B22bA3Ef51',
    FEE_COLLECTOR: '0x80d426D65D926dF121dc58C18D043B73e998CE2b',
    GOVERNOR: '0x9520b477Aa81180E6DdC006Fc09Fb6d3eb4e807A',
    KEEPER: '0x76d266dfd3754f090488ae12f6bd115cd7e77ebd', // Bot address
    JCV: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271', // JCV Keeper
    MP: '0xdf826ff6518e609E4cEE86299d40611C148099d5', // MP Keeper
    Swapper: '0x8f156189A3CD28dFc8FB7BbbAce58F98F09c0bB3',
    MasterOracle: '0x80704Acdf97723963263c78F861F091ad04F46E2',
    StableCoinProvider: '0xfd5216426B516008137E9b7Ec33D2B0931690773',
    CurveLpTokenOracle: '0x794fE3Aa3C1c4A003d1B649b3F71852A2C21A7d3',
    BtcPeggedOracle: '0x54525f751b71e1eA58A558649f0057451E4946b4',
    VSP: '0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421',
    vDAI: '0xB4eDcEFd59750144882170FCc52ffeD40BfD5f7d',
    vaDPI: '0x9b91ab47cefC35dbe4DDCC7983fFA1fB40795663',
    vaDAI: '0x0538C8bAc84E95A9dF8aC10Aad17DbE81b9E36ee',
    vLINK: '0x0a27E910Aee974D05000e05eab8a4b8Ebd93D40C',
    vaLINK: '0xef4F4604106de23CDadfEAE08fcC34602cB475C1',
    vWBTC: '0x4B2e76EbBc9f2923d83F5FBDe695D8733db1a17B',
    vaWBTC: '0x01e1d41C1159b745298724c5Fd3eAfF3da1C6efD',
    vaETH: '0xd1C117319B3595fbc39b471AB1fd485629eb05F2',
    vaUSDC: '0xa8b607Aa09B6A2E306F93e74c282Fb13f6A80452',
    vVSP: '0xbA4cFE5741b357FA371b506e5db0774aBFeCf8Fc',
    vaFEI: '0x2B6c40Ef15Db0D78D08A7D1b4E12d57E88a3e324',
    vaFRAX: '0xc14900dFB1Aa54e7674e1eCf9ce02b3b35157ba5',
  },
  Yearn: {
    yvDAI: '0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
    yvUSDC: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
    yvWETH: '0xa258C4606Ca8206D8aA700cE2143D7db854D168c',
  },
  MultiSig: {
    safe: '0x9520b477Aa81180E6DdC006Fc09Fb6d3eb4e807A',
  },
  Rari: {
    fusePoolDirectory: '0x835482FE0532f169024d5E9410199369aAD5C77E',
  },
  Stargate: {
    STG: '0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6',
    router: '0x8731d54E9D02c286767d56ac03e8037C07e01e98',
    lpStaking: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
  },
  Curve: {
    CRV: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    REN_POOL: '0x93054188d876f558f4a66B2EF1d97d16eDf0895B',
    FRAX_USDC_POOL: '0xDcEF968d416a41Cdac0ED8702fAC8128A64241A2',
    FRAX_USDC_LP: '0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC',
    THREE_POOL: '0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7',
    SBTC_POOL: '0x7fC77b5c7614E1533320Ea6DDc2Eb61fa00A9714',
    MIM_3CRV_POOL: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
    TRIPOOL_DEPOSIT_ZAP: '0xA79828DF1850E8a3A3064576f380D90aECDD3359',
    AAVE_POOL: '0xDeBF20617708857ebe4F679508E7b7863a8A8EeE',
    SUSD_POOL: '0xA5407eAE9Ba41422680e2e00537571bcC53efBfD',
    SUSD_DEPOSIT: '0xFCBa3E75865d2d561BE8D220616520c171F12851',
    SBTC_DEPOSIT: '0x7AbDBAf29929e7F8621B757D2a7c04d78d633834',
    D3_POOL: '0xBaaa1F5DbA42C3389bDbc2c9D2dE134F5cD0Dc89',
    DOLA_3CRV_POOL: '0xAA5A67c256e27A5d80712c51971408db3370927D',
    FRAX_3CRV_POOL: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
    IBBTC_SBTC_POOL: '0xFbdCA68601f835b27790D98bbb8eC7f05FDEaA9B',
    MUSD_POOL: '0x8474DdbE98F5aA3179B3B3F5942D724aFcdec9f6',
    MUSD_DEPOSIT: '0x803A2B40c5a9BB2B86DD630B274Fa2A9202874C2',
    GUSD_POOL: '0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956',
    GUSD_DEPOSIT: '0x64448B78561690B70E17CBE8029a3e5c1bB7136e',
    BUSD_POOL: '0x79a8C46DeA5aDa233ABaFFD40F3A0A2B1e5A4F27',
    BUSD_DEPOSIT: '0xb6c057591E073249F2D9D88Ba59a46CFC9B59EdB',
    USDT_POOL: '0x52EA46506B9CC5Ef470C5bf89f17Dc28bB35D85C',
    USDT_DEPOSIT: '0xac795D2c97e60DF6a99ff1c814727302fD747a80',
    COMPOUND_POOL: '0xA2B47E3D5c44877cca798226B7B8118F9BFb7A56',
    COMPOUND_DEPOSIT: '0xeB21209ae4C2c9FF2a86ACA31E123764A3B6Bc06',
    PAX_POOL: '0x06364f10B501e868329afBc005b3492902d6C763',
    PAX_DEPOSIT: '0xA50cCc70b6a011CffDdf45057E39679379187287',
    Y_POOL: '0x45F783CCE6B7FF23B2ab2D70e416cdb7D6055f51',
    Y_DEPOSIT: '0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3',
  },
  Saddle: {
    FRAXBP_POOL: '0x13Cc34Aa8037f722405285AD2C82FE570bfa2bdc',
    FRAXBP_LP: '0x927E6f04609A45B107C789aF34BA90Ebbf479f7f',
  },
}

module.exports = Object.freeze(Address)
