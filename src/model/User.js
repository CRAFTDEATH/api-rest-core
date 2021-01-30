const {DataTypes, Model } = require('sequelize');
class User extends Model{
    static init(connection){
        super.init({
            name:{
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    notEmpty: {
                        msg: "Campo Vazio, Por Favor Preencha o Campo Nome"
                    },
                   len:{
                       args:[3, 100],
                       msg: "Campo Invalido, Por Favor Digite um Nome entre 3 a 100 Digitos" 
                   },
                },
                
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    notEmpty: {
                        msg: "Campo Vazio, Por Favor Preencha o Campo E-Mail"
                    },
                    isEmail: {
                        msg: "Campo Invalido,Por Favor Digite um E-mail Valido"
                    }
                }
            }    
        },{
            sequelize: connection
        })
    }
    static associate(models){
        this.hasMany(models.Address,{
            foreignKey: 'userId', as: 'addresses'
        })
        this.belongsToMany(models.Tech,{
            foreignKey: 'userId', through: 'user_techs', as: 'techs' 
        })
    }    
}

module.exports = User