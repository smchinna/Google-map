const baseConfig = require('./config.base');

module.exports = Object.assign({}, baseConfig, {
    auth: {
        address: 'https://staging.veevra.com/api/auth/',
    },

    account: {
        address: 'https://staging.veevra.com/api/a/',
    },

    affiliate: {
        address: 'https://staging.veevra.com/api/af/',
    },

    core: {
        address: 'https://staging.veevra.com/api/c/',
    },

    state: {
        address: 'https://staging.veevra.com/api/s/',
    },

    user: {
        address: 'https://staging.veevra.com/api/u/',
    },
});
