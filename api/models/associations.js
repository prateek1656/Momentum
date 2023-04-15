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
	db.Contribution.hasOne(db.Project, {foreignKey: 'project_id'})
    db.Project.belongsTo(db.Contribution, {foreignKey: 'project_id'})
                                                                            
	db.User.hasMany(db.Contribution, {foreignKey: 'user_id'})
    db.Contribution.belongsTo(db.User, {foreignKey: 'user_id'})
	
	db.Contribution_type.hasOne(db.Project, {foreignKey: 'contribution_type_id', as: 'projectContributionType'})
    db.Project.belongsTo(db.Contribution_type, {foreignKey: 'contribution_type_id', as: 'projectContributionType'})
	
	// db.Project.hasOne(db.Reward_type, {foreignKey: 'reward_type_id', as: 'RewardType'})
    // db.Reward_type.belongsTo(db.Project, {foreignKey: 'reward_type_id', as: 'RewardType'})
}

module.exports = setAssociations