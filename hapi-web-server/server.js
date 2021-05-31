const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : ' 172.31.25.30',
    routes: {
        cors: {
            origin: ['*'],
        },
    },
});