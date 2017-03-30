var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    appId: 'r3g3pzf51je658wx',
    scheme: 'https'
});

// START_CUSTOM_CODE_backendServices1
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_backendServices1
module.exports = provider;