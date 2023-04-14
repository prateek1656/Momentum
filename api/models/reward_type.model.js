module.exports = (sequelize, Sequelize) => {
    const Reward_type = sequelize.define("reward_type", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
		unit: {
			type: Sequelize.STRING,
            allowNull: false
		}
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'reward_type'
    });
    return Reward_type;
  };
