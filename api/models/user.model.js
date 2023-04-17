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
		first_login:{
			type: Sequelize.STRING
		},
		last_login:{
			type: Sequelize.STRING
		},
        ciam_id:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'user'
    });
    return User;
  };
