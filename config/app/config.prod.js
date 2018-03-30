const baseConfig = require('./config.base');

module.exports = Object.assign({}, baseConfig, {
    auth: {
        address: 'https://api2.veevra.com/',
    },

    account: {
        address: 'https://api1.veevra.com/',
    },

    core: {
        address: 'https://api3.veevra.com/',
    },

    state: {
        address: 'https://api5.veevra.com/',
    },

    user: {
        address: 'https://api4.veevra.com/',
    },
});
