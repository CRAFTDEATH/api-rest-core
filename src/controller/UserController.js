const User = require("../model/User")

module.exports = {
    async index(req, res) {
        const data = await User.findAll()
        if (!data.length) {
            return res.json({
                statusCode: 404,
                message: 'not found',
                totalResults: 0,
                users: [{}]
            }).status(404)
        } else {
            return res.json({
                statusCode: 200,
                message: 'Ok',
                totalResults: data.length,
                users: data
            }).status(200)
        }
    },
    async show(req, res) {
        const { id } = req.params
        const data = await User.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResults: 0,
                user: {}
            }).status(404)
        } else {
            res.json({
                statusCode: 200,
                message: "ok",
                totalResults: 1,
                users: data
            }).status(200)
        }
    },
    async store(req, res) {
        const { name, email } = req.body
        try {
            const user = await User.create({ name, email })
            return res.json({
                statusCode: 201,
                message: "Created",
                users: user,
                location: `${process.env.APP_URL}users/${user.id}`

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
    },
    async update(req, res) {
        const { id } = req.params
        const { name, email } = req.body
        const data = await User.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                totalResult: 0
            }).status(404)
        } else {
            try {
                await User.update({ name, email }, {
                    where: {
                        id: id
                    }
                })
                res.json({
                    statusCode: 200,
                    message: 'ok',
                    location: `${process.env.APP_URL}users/${id}`
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
        const data = await User.findByPk(id)
        if (!data) {
            res.json({
                statusCode: 404,
                message: "not found",
                recordDeleted: 0
            }).status(404)
        } else {
            const user = await User.destroy({
                where: {
                    id: id
                }
            })
            res.json({
                statusCode: 200,
                message: "Ok",
                recordDeleted: user,
            }).status(200)
        }
    }
}
