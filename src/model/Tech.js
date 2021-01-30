const { DataTypes, Model } = require('sequelize');

class Tech extends Model {
    static init(connection) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo Vazio, Por Favor Preencha o Campo de Tecnologia"
                    },
                    len:{
                       args:[1, 100],
                       msg: "Campo Invalido, Digite uma Tecnologia Entre 1 a 100 Digitos" 
                   },
                }
            }
        }, {
            sequelize: connection,
            tableName: 'techs'
        })
    }
    static associate(models) {
        this.belongsToMany(models.User, {
            foreignKey: 'tech_id', through: 'user_techs', as: 'users'
        })
    }
}

module.exports = Tech