module.exports = function(sequelize, DataTypes) {
    const burgers = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return burgers;
}
