module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'devburger',
    // url: 'postgresql://postgres:GCSiJYqArkbcsjOYZikGyFyWpukoXqTW@autorack.proxy.rlwy.net:24631/railway',

    define: {
        timestamps: true,
        underscore: true,
        underscoreAll: true,
    },
};