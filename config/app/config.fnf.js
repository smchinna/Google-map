const baseConfig = require('./config.base');

module.exports = Object.assign({}, baseConfig, {
    auth: {
        address: 'https://fnf2.veevra.com/',
    },

    account: {
        address: 'https://fnf1.veevra.com/',
    },

    core: {
        address: 'https://fnf3.veevra.com/',
    },

    state: {
        address: 'https://fnf5.veevra.com/',
    },

    user: {
        address: 'https://fnf4.veevra.com/',
    },
});
