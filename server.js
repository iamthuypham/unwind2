var Hapi = require('hapi'),
    path = require('path'),
    port = process.env.PORT || 3000,
    server = new Hapi.Server(port),
    routes = {
        assets: {
            method: 'GET',
            path: '/assets/{path*}',
            handler: createDirectoryRoute('assets')
        },
        filterBar: {
            method: 'GET',
            path: '/filterBar/{path*}',
            handler: createDirectoryRoute('filterBar')
        },
        resultList: {
            method: 'GET',
            path: '/resultList/{path*}',
            handler: createDirectoryRoute('resultList')
        },
        layout: {
            method: 'GET',
            path: '/template/{path*}',
            handler: createDirectoryRoute('template')
        },
        component: {
            method: 'GET',
            path: '/component/{path*}',
            handler: createDirectoryRoute('component')
        },
        css: {
            method: 'GET',
            path: '/styles/{path*}',
            handler: createDirectoryRoute('styles')
        },
        spa: {
            method: 'GET',
            path: '/{path*}',
            handler: {
                file: path.join(__dirname, '/dist/component/index.html'),
            }
        }
        
    };

server.route([ routes.assets, routes.filterBar, routes.resultList, routes.layout, routes.component, routes.css, routes.spa  ]);
server.start( onServerStarted );

function onServerStarted() {
    console.log( 'Server running on port ', port );
}

function createDirectoryRoute( directory ) {
    return {
        directory: {
            path: path.join(__dirname, '/dist/', directory)
        }
    };
}

module.exports = server;