const corsProxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy.createServer({
    originWhitelist: ['https://www.bloxstaking.com', 'https://bloxinfra.site.strattic.io', 'https://bloxinfra.preview.strattic.io', 'https://ssv.network', 'https://ssv-network.preview.strattic.io', 'https://ssv-network.site.strattic.io', 'https://ssv-new.local'],
//    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
