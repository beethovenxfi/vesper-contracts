'use strict'

const { ethers } = require('hardhat')
const Address = require('./address')
const StrategyTypes = require('../../utils/strategyTypes')
const { CurvePoolTypes } = require('../../utils/curvePoolTypes')

const swapper = Address.Vesper.Swapper
const masterOracle = Address.Vesper.MasterOracle
const config = { debtRatio: 0, externalDepositFee: 0 }

const setup = {
  feeCollector: Address.Vesper.FEE_COLLECTOR,
  keepers: [Address.Vesper.KEEPER],
}

/* eslint-disable camelcase */
const StrategyConfig = {
  AaveV3_Vesper_Xy_ETH_USDC: {
    contract: 'AaveV3VesperXy',
    type: StrategyTypes.AAVE_V3_VESPER_XY,
    constructorArgs: {
      swapper,
      receiptToken: Address.Aave.aOptWETH,
      borrowToken: Address.USDC,
      aaveAddressProvider: Address.Aave.AddressProvider,
      vPool: Address.Vesper.vaUSDC,
      strategyName: 'AaveV3_Vesper_Xy_ETH_USDC',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },
  AaveV3_Vesper_Xy_OP_USDC: {
    contract: 'AaveV3VesperXy',
    type: StrategyTypes.AAVE_V3_VESPER_XY,
    constructorArgs: {
      swapper,
      receiptToken: Address.Aave.aOptOP,
      borrowToken: Address.USDC,
      aaveAddressProvider: Address.Aave.AddressProvider,
      vPool: Address.Vesper.vaUSDC,
      strategyName: 'AaveV3_Vesper_Xy_OP_USDC',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },
  AaveV3_Vesper_Xy_wstETH_USDC: {
    contract: 'AaveV3VesperXy',
    type: StrategyTypes.AAVE_V3_VESPER_XY,
    constructorArgs: {
      swapper,
      receiptToken: Address.Aave.aOptwstETH,
      borrowToken: Address.USDC,
      aaveAddressProvider: Address.Aave.AddressProvider,
      vPool: Address.Vesper.vaUSDC,
      strategyName: 'AaveV3_Vesper_Xy_wstETH_USDC',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },
  Curve_sETH_ETH: {
    contract: 'CurveETH',
    type: StrategyTypes.CURVE,
    constructorArgs: {
      crvPool: Address.Curve.SETH_ETH_POOL,
      curvePoolType: CurvePoolTypes.PLAIN_2_POOL,
      crvDeposit: ethers.constants.AddressZero,
      crvToken: Address.Curve.CRV,
      crvSlippage: 100, // 1%
      masterOracle,
      swapper,
      collateralIdx: 0,
      strategyName: 'Curve_sETH_ETH',
      wethLike: Address.WETH,
    },
    config: { ...config },
    setup: { ...setup },
  },
  Curve_sUSD_USDC: {
    contract: 'Curve',
    type: StrategyTypes.CURVE,
    constructorArgs: {
      crvPool: Address.Curve.SUSD_POOL,
      curvePoolType: CurvePoolTypes.META_4_POOL,
      depositZap: Address.Curve.FACTORY_METAPOOL_DEPOSIT_ZAP,
      crvToken: Address.Curve.CRV,
      crvSlippage: 250, // 2.5%
      masterOracle,
      swapper,
      collateralIdx: 2,
      strategyName: 'Curve_sUSD_USDC',
    },
    config: { ...config },
    setup: { ...setup },
  },
}

module.exports = Object.freeze(StrategyConfig)
