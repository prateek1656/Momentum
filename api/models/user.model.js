module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
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
		image_url:{
			type: Sequelize.STRING,
            allowNull: true,
		},
		description: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
		username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
		join_login:{
			type: Sequelize.DATE
		},
		last_login:{
			type: Sequelize.DATE
		}
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'user'
    });
    return User;
  };
