const { DataTypes, Model } = require('sequelize');

class Address extends Model {
    static init(connection) {
        super.init({
            country:{ 
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    notEmpty:{
                        msg: "Campo Vazio, Por Favor Preencha o campo de Região"
                    },
                    len:{
                        args: [1,255],
                        msg: "Campo Invalido, Por Favor Digite uma Região entre 1 a 255 Digitos"
                    },
                    is:{
                        args: /^[a-z Á-ú]+$/i,
                        msg: "Campo Invalido, Por Favor Digite uma Região Valida"
                    }
                }
            },
            zipCode: { 
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    notEmpty:{
                        msg: "Campo Vazio, Por Favor Preencha o campo de CEP"
                    },
                    len:{
                        args: [8],
                        msg: "Campo Invalido, Por Favor Digite um Cep Valido com 8 Digitos"
                    },
                    isNumeric: {
                        args: true,
                        msg: "Campo Invalido, Por Favor Digite um Cep Que Contenha Somente Numeros e sem Espaços"
                    }
                }
            },
            state: { 
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    notEmpty:{
                        msg: "Campo Vazio, Por Favor Preencha o Campo de Estado"
                    },
                    len:{
                        args: [2,2],
                        msg: "Campo Invalido, Por Favor Digite um Estado com 2 Digitos"
                    },
                    is:{
                        args: /^[a-zÁ-ú]+$/i,
                        msg: "Campo Invalido, Por Favor Digite um Estado Valido sem Espaço"
                    }
                }
            },
            city: { 
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    notEmpty:{
                        msg: "Campo Vazio, Por Favor Preencha o campo de Cidade"
                    },
                    len:{
                        args: [1,255],
                        msg: "Campo Invalido, Por Favor Digite uma cidade entre 1 a 255 Digitos"
                    },
                    is:{
                        args: /^[a-z Á-ú]+$/i,
                        msg: "Campo Invalido, Por Favor Digite uma Cidade Valida"
                    }
                }
            },
            street:{
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    notEmpty:{
                        msg: "Campo Vazio, Por Favor Preencha o campo Rua"
                    },
                    len:{
                        args: [1,255],
                        msg: "Campo Invalido, Por Favor Digite uma Rua entre 1 a 255 Digitos"
                    },
                    is:{
                        args: /^[a-z Á-ú0-9]+$/i,
                        msg: "Campo Invalido, Por Favor Digite uma Rua Valida"
                    }
                }
            },
            number:{ 
                type: DataTypes.INTEGER,
                validate:{
                    notEmpty:{
                        msg: "Campo Vazio, Por Favor Preencha o Campo de Numeração de Casa"
                    },
                    isNumeric:{
                        args: true,
                        msg: "Campo Invalido, Por favor Digite Somente Numeros em Numeração"
                    },
                    len:{
                        args: [1,10],
                        msg: "Campo Invalido, Por Favor Digite entre 1 a 10 Digitos"
                    }
                    
                   
                }
            },
            complement:{ 
                type: DataTypes.STRING,
                validate:{
                    notEmpty:{
                        msg: "Campo Vazio, Por Favor Preencha o campo de Complemento"
                    },
                    len:{
                        args: [1, 255],
                        msg: "Campo Invalido, Por Favor Digite uma Complemento Entre 1 a 255 Digitos"
                    },
                }
            },
            userId:{ 
                type: DataTypes.INTEGER,
                allowNull: false,
                validate:{
                    notEmpty:{
                        msg: "Campo Vazio, Por Favor Preencha o Campo de id de Usuario"
                    },
                    isNumeric:{
                        args:true,
                        msg: "Campo Invalido, Por Favor Digite Somente Numeros"
                    }
                }
            }

        }, {
            sequelize: connection
        })
    }
    static associate(models){
        this.belongsTo(models.User,{
            foreignKey: 'userId', as: 'user'
        })
    }
}

module.exports = Address