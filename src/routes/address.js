const express = require("express")
const asyncHandler = require("express-async-handler")
const AddressController = require("../controller/AddressController")

const routes = express.Router()
/**
 * @api {get} /addresses 
 * @apiVersion 1.0.0
 * @apiName Listar endereço
 * @apiGroup Endereço
 * @apiDescription Essa API lista todos endereço cadastrados
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *        "statusCode": 200,
 *        "message": "Ok",
 *        "totalResults": 1,
 *        "user": [{
 *            "id": 14,
 *            "name": "example",
 *            "email": "example@hotmai.com",
 *            "createdAt": "2021-01-11T17:45:14.000Z",
 *            "updatedAt": "2021-01-11T17:45:14.000Z",
 *            "addresses": [
 *                {
 *                    "id": 21,
 *                    "country": "Brazil",
 *                    "zipCode": "19990-111",
 *                    "state": "São Paulo",
 *                    "city": "Brasilia",
 *                    "street": "Jardin Teodoro",
 *                    "number": 12,
 *                    "complement": "Casa",
 *                    "userId": 14,
 *                    "createdAt": "2021-01-15T15:32:08.000Z",
 *                    "updatedAt": "2021-01-15T15:32:08.000Z"
 *                }
 *            ],
 *     }],
 * },
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "users":[
 *             {}
 *        ]
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *         "message": "Internal Server Error",
 *         "statusCode": 500
 *     }
 */
routes.get('/addresses', asyncHandler(AddressController.index))
/**
 * @api {get} /addresses/:userId 
 * @apiVersion 1.0.0
 * @apiName Buscar Endereço
 * @apiParam {Number} userId userId(Identificador) Usuario
 * @apiGroup Endereço
 * @apiDescription Essa API lista o endereço cadastrado pelo seu id informado
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *        "statusCode": 200,
 *        "message": "Ok",
 *        "totalResults": 1,
 *         "user": {
 *             "id": 14,
 *             "name": "example",
 *             "email": "example@hotmai.com",
 *             "createdAt": "2021-01-11T17:45:14.000Z",
 *             "updatedAt": "2021-01-11T17:45:14.000Z",
 *             "addresses": [{
 *                 "id": 21,
 *                 "country": "Brazil",
 *                 "zipCode": "19990-111",
 *                 "state": "São Paulo",
 *                 "city": "Brasilia",
 *                 "street": "Jardin Teodoro",
 *                 "number": 12,
 *                 "complement": "Casa",
 *                 "createdAt": "2021-01-15T15:32:08.000Z",
 *                 "updatedAt": "2021-01-15T15:32:08.000Z"
 *             }],
 *          },
 *      }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *         "statusCode": 404,
 *         "message": "not found",
 *         "totalResults": 0,
 *         "users":{}
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *     }
 */
routes.get('/addresses/:userId', asyncHandler(AddressController.show))
/**
 * @api {post} /addresses
 * @apiVersion 1.0.0 
 * @apiName Salvar Endereço
 * @apiGroup Endereço
 * @apiParam {String} country Região(País)
 * @apiParam {Number} zipCode CEP(Código de Endereçamento Postal)
 * @apiParam {String} state Estado
 * @apiParam {String} city Cidade
 * @apiParam {String} street Rua
 * @apiParam {Number} number Numero da casa
 * @apiParam {String} complement Complemento
 * @apiParam {Number} userId Id(Identificador) Usuario
 * @apiDescription Esse API salva um endereço
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created
 *    {
 *          "statusCode": 201,
 *          "message": "Created",
 *          "address": {
 *          "id": 23,
 *          "country": "Brazil",
 *          "zipCode": "19900",
 *          "state": "São Paulo",
 *          "city": "Douradinho",
 *          "street": "Marechal Rondon",
 *          "number": "308",
 *          "complement": "Casa",
 *          "userId": 8,
 *          "updatedAt": "2021-01-15T16:24:06.684Z",
 *          "createdAt": "2021-01-15T16:24:06.684Z"
 *    },
 *    "location": "http://localhost:3333/addresses/14"
 * }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "users":{
 *   
 *        }
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *         "statusCode": 400,
 *         "message": "bad request",
 *         "totalErrors": 1,
 *         "errors": [{
 *              "field": "state",
 *              "message": "Campo Invalido, Por Favor Digite um Estado com 2 Digitos"
 *          }]
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *     }
 */
routes.post('/addresses', asyncHandler(AddressController.store))
/**
 * @api {put} /addresses/:id
 * @apiVersion 1.0.0 
 * @apiName Atualiza um Endereço
 * @apiGroup Endereço
 * @apiParam {Number} id Id(Identificador) Endereço
 * @apiParam {String} country Região(País)
 * @apiParam {Number} zipCode CEP(Código de Endereçamento Postal)
 * @apiParam {String} state Estado
 * @apiParam {String} city Cidade
 * @apiParam {String} street Rua
 * @apiParam {Number} number Numero da casa
 * @apiParam {String} complement Complemento
 * @apiParam {Number} userId Id(Usuario)
 * @apiDescription Essa API atualiza um endereço cadastrado
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 Ok
 *    {
 *      "statusCode": 200,
 *      "message": "Ok",
 *      "location": "http://localhost:3333/addresses/14"   
 *    }
 *
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "users":{
 *   
 *        }
 *     }
 *  @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *          "statusCode": 400,
 *          "message": "bad request",
 *          "totalErrors": 1,
 *          "errors": [{
 *              "field": "state",
 *              "message": "Campo Invalido, Por Favor Digite um Estado com 2 Digitos"
 *           }]
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "message": "Internal Server Error",
 *       "statusCode": 500
 *     }
 */
routes.put('/addresses/:id', asyncHandler(AddressController.update))
/**
 * @api {delete} /addresses/:id
 * @apiVersion 1.0.0
 * @apiname Deletar um Endereço
 * @apiParam {Number} id Id(Identificador) Endereço
 * @apiGroup Endereço
 * @apiDescription Essa API deleta um endereço cadastrado
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "statusCode": 200,
 *       "message": "Ok",  
 *       "recordDeleted": 1        
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "statusCode": 404,
 *        "message": "not found"
 *        "recordDeleted": 0  
 *     }
 *  @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *     }
 */
routes.delete('/addresses/:id', asyncHandler(AddressController.destroy))

module.exports = routes