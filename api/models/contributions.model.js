module.exports = (sequelize, Sequelize) => {
    const Contribution = sequelize.define("contribution", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: Sequelize.UUID,
			allowNull: false,
        },
		project_id: {
            type: Sequelize.UUID,
			allowNull: false,
        },
        is_verified:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'contribution'
    });
    return Contribution;
  };
