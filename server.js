var Hapi = require('hapi'),
    path = require('path'),
    port = process.env.PORT || 3000,
    server = new Hapi.Server(port),
    routes = {
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
        services: {
            method: 'GET',
            path: '/services/{path*}',
            handler: createDirectoryRoute('services')
        },
        template: {
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

server.route([ routes.filterBar, routes.resultList, routes.services, routes.template, routes.component, routes.css, routes.spa  ]);
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