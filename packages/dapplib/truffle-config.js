require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million purpose gloom enter forward sudden'; 
let testAccounts = [
"0x0535f5e53d8745558d04f35490384d5cf9ecbe8814936e58ac9e98b6c43a6d2b",
"0x5511581ce840d6c2365693aa3d6f74ce9fa3022e22b0c2a5c98b3f4be2385480",
"0xc6810c55822a630edf78dd1e091b0fb163f8002375449dc21754f40b3c160847",
"0x80aea7f4f3f86221bdcc56bf4c2dbdb3df05407f9277bee57a9bc58a1bf9b813",
"0x2a2fcb40193a1dc5dcd44a9a38140bdcee8751fdc305ba6cec25db4118d7e916",
"0xe3b1928e9fac6fb386b0b7c6e2abc0afad7f2cf2d215a4f8ce6b3e6c3ea04858",
"0x2c68e2dac91543864cc1c4b95d14ebdcb9a3cc3d9e0e115199ec31da43d1adc3",
"0x282f342dd57e61042f5e11a6654c1e3bb83ccd56a667d23a6b89b9e208304b21",
"0xa206064f651edb152f1803f8d224456ffc162aa2bf3cce02536bea4613afbaf6",
"0xe172bd10f80b88527f47ed1c75207f2a76c683bd9e29105f0d73f2114b0d59b3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

