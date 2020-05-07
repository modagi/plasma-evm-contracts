const config = require('../config');
const RootChain = artifacts.require('RootChain.sol');

module.exports = async function (callback) {
  try {
    const rootchain = await RootChain.at(config.rootchain);

    const NRELength = await rootchain.NRELength();
    console.log(`NRELength: ${NRELength}`);
  } catch (err) {
    console.error(err.message);
  } finally {
    callback();
  }
};