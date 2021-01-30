const express = require("express")
const asyncHandler = require("express-async-handler")
const UserController = require("../controller/UserController")

const routes = express.Router()

/**
 * @api {get} /users 
 * @apiVersion 1.0.0
 * @apiName Listagem de usuarios
 * @apiGroup Usuario
 * @apiDescription Essa API lista todos os usuarios cadastrados
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "statusCode": 200,
 *        "message": "Ok",
 *        "totalResults": 2,
 *        "users":[{
 *             "id": 1,
 *             "name": "example",
 *             "email": "example@hotmail.com"
 *             "updatedAt": "2021-01-11T17:48:21.447Z",
 *             "createdAt": "2021-01-11T17:48:21.447Z"    
 *         },
 *         {
 *             "id": 2,
 *             "name": "example2",
 *             "email": "example2@hotmail.com",
 *             "updatedAt": "2021-01-11T17:48:21.447Z",
 *             "createdAt": "2021-01-11T17:48:21.447Z"
 *         }]       
 *     }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "users":[
 *             {}
 *         ]
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */
routes.get('/users', asyncHandler(UserController.index))
/**
 * @api {get} /users/:id
 * @apiVersion 1.0.0 
 * @apiName Procurar um Usuario por seu id
 * @apiParam {Number} id Id(Identificador) Usuario 
 * @apiGroup Usuario
 * @apiDescription Essa API lista o usuario cadastrado pelo seu id informado
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *        "statusCode": 200,
 *        "message": "Ok",
 *        "totalResults": 1,
 *        "users":{
 *            "id": 1,
 *            "name": "example",
 *            "email": "example@hotmail.com",
 *            "updatedAt": "2021-01-11T17:48:21.447Z",
 *            "createdAt": "2021-01-11T17:48:21.447Z"
 *        }       
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "users":{
 *           
 *        }
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */
routes.get('/users/:id', asyncHandler(UserController.show))
/**
 * @api {post} /users
 * @apiVersion 1.0.0 
 * @apiName Registra um usuario
 * @apiGroup Usuario
 * @apiParam {String} name Nome do usuario
 * @apiParam {String} email Email do usuario
 * @apiDescription Essa API salva um usuario
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created
 *    {
 *        "statusCode": 201,
 *        "message": "Created",
 *        "users": {
 *            "id": 1,
 *            "name": "example",
 *            "email": "example@hotmail.com",
 *            "updatedAt": "2021-01-11T17:48:21.447Z",
 *            "createdAt": "2021-01-11T17:48:21.447Z", 
 *         },
 *         "location": "https://api-rest-core.herokuapp.com/users/1"  
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "statusCode": 400,
 *        "message": "bad request",
 *        "totalErrors": 4,
 *            "errors": [
 *                 {
 *                     "field": "name",
 *                     "message": "Campo Vazio, Por Favor Preencha o Campo Nome"
 *                 },
 *                 {
 *                     "field": "name",
 *                     "message": "Campo Invalido, Por Favor Digite um Nome entre 3 a 100 Digitos"
 *                 },
 *                 {
 *                     "field": "email",
 *                     "message": "Campo Vazio, Por Favor Preencha o Campo E-Mail"
 *                 },
 *                 {
 *                     "field": "email",
 *                     "message": "Campo Invalido,Por Favor Digite um E-mail Valido"
 *                 }
 *             ]
 *     }
 *  @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */
routes.post('/users', asyncHandler(UserController.store))
/**
 * @api {put} /users/:id
 * @apiVersion 1.0.0
 * @apiname Atualizar um usuario
 * @apiParam {Number} id Id(Identificador) Usuario
 * @apiParam {String} name Nome do usuario
 * @apiParam {String} email E-mail do usuario
 * @apiGroup Usuario
 * @apiDescription Essa API atualiza um usuario cadastrado
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *        "statusCode": 200,
 *        "message": "Ok",
 *        "location": "https://api-rest-core.herokuapp.com/users/1"      
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResult": 0  
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "statusCode": 400,
 *        "message": "bad request",
 *        "totalErrors": 4,
 *            "errors": [{
 *                 "field": "name",
 *                 "message": "Campo Vazio, Por Favor Preencha o Campo Nome"
 *             },
 *             {
 *                 "field": "name",
 *                 "message": "Campo Invalido, Por Favor Digite um Nome entre 3 a 100 Digitos"
 *             },
 *             {
 *                 "field": "email",
 *                 "message": "Campo Vazio, Por Favor Preencha o Campo E-Mail"
 *             },
 *             {
 *                 "field": "email",
 *                 "message": "Campo Invalido,Por Favor Digite um E-mail Valido"
 *             }
 *          ]
 *     }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */
routes.put('/users/:id', asyncHandler(UserController.update))
/**
 * @api {delete} /users/:id
 * @apiVersion 1.0.0
 * @apiname Deletar um usuario
 * @apiParam {Number} id Id(Identificador) Usuario
 * @apiGroup Usuario
 * @apiDescription Essa API deleta um usuario cadastrado
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *        "statusCode": 200,
 *        "message": "Ok",  
 *        "recordDeleted": 1        
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found"
 *        "recordDeleted": 0  
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */
routes.delete('/users/:id', asyncHandler(UserController.destroy))

module.exports = routes
