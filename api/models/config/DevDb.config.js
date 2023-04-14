console.log('connecting to db')


module.exports = {
    host: "mysql-3056fcf1-prateekyadav1656-6378.aivencloud.com",
    port: "10506",
    username: "avnadmin",
    password: "AVNS_m2YBZb10iyE0k6Ntz1I",
    database: "defaultdb",
    dialect: "mysql",
    dialectModule: require('mysql2'),
    dialectOptions: {
      connectTimeout: 30000
    },
    // host: "127.0.0.1",
    // port: "3306",
    // username: "root",
    // password: "rG5$#tF7@kL2&zP9*!",
    // database: "Momentum",
    // dialect: "mysql",
    // dialectModule: require('mysql2'),
    // dialectOptions: {
    //   connectTimeout: 30000
    // },
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      freezeTableName: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    pool: {
      max: 8,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };