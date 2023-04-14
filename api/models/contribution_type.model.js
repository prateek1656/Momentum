module.exports = (sequelize, Sequelize) => {
    const Contribution_type = sequelize.define("contribution_type", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'contribution_type'
    });
    return Contribution_type;
  };
