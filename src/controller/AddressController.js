const Address = require("../model/Address")
const User = require("../model/User")

module.exports = {
    async index(req, res) {
        const data = await User.findAll({
            include: { 
                association: 'addresses',
                attributes:{
                    exclude: ['userId']} 
                },
        })
        if (!data.length) {
            res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                user: [{}]
            }).status(404)
        } else {
            res.json({
                statusCode: 200,
                message: 'Ok',
                totalResults: data.length,
                user: data
            }).status(200)
        }
    },
    async show(req, res) {
        const { userId } = req.params
        const data = await User.findByPk(userId, {
            include: { association: 'addresses',
            attributes:{
                exclude: ['userId']} 
            },
        })
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResults: 0,
                user: {}
            })
        } else {
            res.json({
                statusCode: 200,
                message: "ok",
                totalResults: 1,
                user: data
            }).status(200)
        }
    },
    async store(req, res) {
        const { country, zipCode, state, city } = req.body
        const { street, number, complement, userId } = req.body
        const data = await User.findByPk(userId)
        if (!data) {
            res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                users:{}
            }).status(404)
        }
        else {
            try {
                const address = await Address.create({
                    country,
                    zipCode,
                    state,
                    city,
                    street,
                    number,
                    complement,
                    userId
                })
                res.json({
                    statusCode: 201,
                    message: 'Created',
                    address: address,
                    location: `${process.env.APP_URL}addresses/${data.id}`
                }).status(201)
            } catch (err) {
                const { errors } = err
                let custom = []

                for (let i = 0; i < errors.length; i++) {

                    let items = {
                        field: errors[i].path,
                        message: errors[i].message
                    }
                    custom.push(items)
                }
                return res.status(400).json({
                    statusCode: 400,
                    message: "bad request",
                    totalErrors: errors.length,
                    errors: custom
                })
            }
        }
    },
    async update(req, res) {
        const { id } = req.params
        const { country, zipCode, state, city } = req.body
        const { street, number, complement, userId } = req.body
        const user = await User.findByPk(userId)
        const address = await Address.findByPk(id)
        if (!user || !address) {
            res.json({
                statusCode: 404,
                message: "not found",
                address: [{

                }]
            }).status(404)
        } else {
            try {
                await Address.update({
                    country,
                    zipCode,
                    state,
                    city,
                    street,
                    number,
                    complement,
                    userId
                }, {
                    where: {
                        id: id
                    }
                })
                res.json({
                    statusCode: 200,
                    message: 'Ok',
                    location: `${process.env.APP_URL}addresses/${userId}`
                }).status(200)
            }
            catch (err) {
                const { errors } = err
                
                let custom = []
                for (let i = 0; i < errors.length; i++) {

                    let items = {
                        field: errors[i].path,
                        message: errors[i].message
                    }
                    custom.push(items)
                }

                return res.status(400).json({
                    statusCode: 400,
                    message: "bad request",
                    totalErrors: errors.length,
                    errors: custom
                })
            }
        }
    },
    async destroy(req, res) {
        const { id } = req.params
        const data = await Address.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                recordDeleted: 0
            }).status(404)
        } else {
            await Address.destroy({
                where: {
                    id: id
                }
            })
            res.json({
                statusCode: 200,
                message: "Ok",
                recordDeleted: 1
            }).status(200)
        }
    }
}
