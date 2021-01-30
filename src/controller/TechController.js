const Tech = require("../model/Tech")
const User = require("../model/User")

module.exports = {
    async index(req, res) {
        const data = await User.findAll({
            include: {association: 'techs',  through: {attributes: []}}, 
        })
        if (!data.length) {
            res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                users: [{}]
            })

        } else {
           
            res.json({
                statusCode: 200,
                message: 'Ok',
                totalResults: data.length,
                users: data  
            })
        }
    },
    async show(req, res) {
        const { id } = req.params
        const data = await Tech.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResults: 0,
                tech: {}
            })
        } else {
            res.json({
                statusCode: 200,
                message: "ok",
                totalResults: 1,
                tech: data
            })
        }
    },
    async store(req, res) {
        const { id, name } = req.body
        const data = await User.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: 'not found',
                totalResults:0,
                techs:{}
            }).status(404)
        }
        else {
            try {
                const [tech] = await Tech.findOrCreate({
                    where: { name }
                })
                await data.addTech(tech)
                res.json({
                    statusCode: 201,
                    message: "Created",
                    techs: tech,
                    location: `${process.env.APP_URL}techs/${tech.id}`
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
        const { name } = req.body
        const data = await Tech.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0

            }).status(404)
        }
        else {
            try {
                await Tech.update({ name }, {
                    where: {
                        id: id
                    }
                })
                res.json({
                    statusCode: 200,
                    message: "Ok",
                    location: `${process.env.APP_URL}techs/${id}`
                }).status(200)
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

    async destroy(req, res) {
        const { id } = req.params
        const data = await Tech.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                recordDeleted: 0
            })
        } else {
            await Tech.destroy({
                where: {
                    id: id
                }
            })
            res.json({
                statusCode: 200,
                message: "Ok",
                recordDeleted: 1
            })
        }
    }

}
