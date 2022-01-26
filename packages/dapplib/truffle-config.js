require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name razor oven purpose install cover army gas'; 
let testAccounts = [
"0x4eb63f608f97c18ff0f3c9c437ccbbee17c9c6372085e2087272ffb070a62002",
"0x3ec162f3acbd9382973e7f02633eceafa102220e08ddd66ae35e8d5a84f47490",
"0xdcb74d1a15eb639b5b4ded24f325775cd8c8b1675426456d1cb0f5815fd33132",
"0x86ef8b5f804f49e4b3ac84fd33cf45e9b0130fa18670987858402bbe9839ad6e",
"0x0d7208b99c6e146e80c3fab81d2043fb176e44f4d969b846d0d8acb53f352ea9",
"0xa6871d68247a94ff2b81309a17bed6e43c9b4ba9ed16a2e04773d6fa9648619a",
"0xf073f8eaa83cf1a1e05c51e016e2e47dba8f5b6b39d6e07264172eef34a4b2b5",
"0xafd43be3d5e2f4087bf7c8095f755cd3727ccad835c7dece84f321dc877cc647",
"0x4f51f7c44545d9976e0c4d83166ed655bb9b020cbb1d3aabc926c4602293035a",
"0x8bfd4651a618c3241bbc1657a26e7a3a48fb787e58ab2000f615174310ab211c"
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

