const Sequelize = require("sequelize");

let sequelize = null
let dbConfig = null
console.log('connecting to u a local db')
dbConfig = require("./config/DevDb.config")
        
if (dbConfig != null) {
    sequelize = new Sequelize(dbConfig);
} else {
    console.log('unable to connect to a database')
    process.exit()
}

console.log('INFO: setting up associations')

const setAssociations = function(db) {
	db.Projects.hasMany(db.Contributions, {foreignKey: 'project_id'})
    db.Contributions.belongsTo(db.Projects, {foreignKey: 'project_id'})
                                                                            
	db.User.hasMany(db.Contributions, {foreignKey: 'user_id'})
    db.Contributions.belongsTo(db.User, {foreignKey: 'user_id'})
	
	db.Contribution_type.hasMany(db.Projects, {foreignKey: 'contribution_type_id'})
    db.Projects.belongsTo(db.Contribution_type, {foreignKey: 'contribution_type_id'})
	
	db.Reward_type.hasMany(db.Projects, {foreignKey: 'reward_type_id'})
    db.Projects.belongsTo(db.Reward_type, {foreignKey: 'reward_type_id'})
}

module.exports = setAssociations