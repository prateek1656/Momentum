module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
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
        documents_url:{
			type: Sequelize.STRING,
            allowNull: false,
		},
        policies_url:{
			type: Sequelize.STRING,
            allowNull: false,
		},
		contribution_type:{
			type: Sequelize.UUID,
            allowNull: false,
		},
		contribution_link:{
			type: Sequelize.DATE,
            allowNull: false,
		},
		reward_type:{
			type: Sequelize.UUID,
            allowNull: false,
		},
		reward_amount:{
			type: Sequelize.INTEGER, 
            allowNull: false,
		},
		end_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        description :{
			type: Sequelize.STRING,
            allowNull: false
		},
		contribution_goal:{
			type: Sequelize.INTEGER, 
            allowNull: false,
		},
		is_active:{
			type: Sequelize.BOOLEAN, 
            allowNull: false
		},
		is_rewarded:{
			type: Sequelize.BOOLEAN, 
            allowNull: false
		}
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'project'
    });
    return Project;
  };
