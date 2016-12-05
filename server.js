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
        result: {
            method: 'GET',
            path: '/result/{path*}',
            handler: createDirectoryRoute('result')
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
        }
        ,
        spa: {
            method: 'GET',
            path: '/{path*}',
            handler: {
                file: path.join(__dirname, '/dist/component/index.html'),
            }
        }
        
    };

server.route([ routes.filterBar, routes.result, routes.layout, routes.component, routes.spa  ]);
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