const Sequelize = require("sequelize");
const env = process.env.APP_ENV
let sequelize = null
let dbConfig = null
console.log('connecting to default db')
dbConfig = require("./config/DevDb.config")
if (dbConfig != null) {
    sequelize = new Sequelize(dbConfig);
} else {
    console.log('unable to connect to a database')
    process.exit()
}

const db = {};
if (dbConfig != null) {
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    // models
    db.User = require('./User.model')(sequelize, Sequelize)
    db.Projects = require('./Projects.model')(sequelize, Sequelize)
    db.Contribution_type = require('./Contribution_type.model')(sequelize, Sequelize)
    db.Reward_type = require('./Reward_type.model')(sequelize, Sequelize)
    db.Contributions = require('./Contributions.model')(sequelize, Sequelize)
} 
module.exports = db;
