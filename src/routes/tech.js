const express = require("express")
const asyncHandler = require("express-async-handler")
const TechController = require("../controller/TechController")

const routes = express.Router()

/**
 * @api {get} /techs 
 * @apiVersion 1.0.0
 * @apiName Listagem de tecnologias
 * @apiGroup Tecnologia
 * @apiDescription Essa API lista todas tecnologias cadastradas
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *         "statusCode": 200,
 *         "message": "Ok",
 *         "totalResults": 1,
 *             "users": [{
 *                 "id": 7,
 *                 "name": "Junior Souza",
 *                 "email": "junio1994s@hotmail.com",
 *                 "createdAt": "2021-01-27T22:55:57.000Z",
 *                 "updatedAt": "2021-01-27T22:55:57.000Z",
 *                 "techs": [{
 *                     "id": 10,
 *                     "name": "php",
 *                     "createdAt": "2021-01-28T17:59:28.000Z",
 *                     "updatedAt": "2021-01-28T18:00:51.000Z"
 *                  }]
 *               }]
 *     }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "users":[]
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */
routes.get('/techs', asyncHandler(TechController.index))
/**
* @api {get} /techs/:id
* @apiVersion 1.0.0 
* @apiName Procurar uma Tecnologia por um id
* @apiParam {Number} id Id(Identificador) de Tecnologia 
* @apiGroup Tecnologia
* @apiDescription Essa API lista as tecnologias cadastradas pelo seu id informado
* @apiSuccessExample {json} Success-Response:
*    HTTP/1.1 200 OK
*    {
*        "statusCode": 200,
*        "message": "Ok",
*        "totalResults": 1,
*        "tech":{
*           "id": 5,
*           "name": "PHP",
*           "createdAt": "2021-01-04T21:04:33.000Z",
*           "updatedAt": "2021-01-04T21:04:33.000Z"
*        },
*     }
* @apiErrorExample {json} Error-Response:
*    HTTP/1.1 404 Not Found
*    {
*        "statusCode": 404,
*        "message": "not found",
*        "totalResults": 0,
*        "tech":{}
*    }
* @apiErrorExample {json} Error-Response:
*    HTTP/1.1 500 Internal Server Error
*    {
*        "message": "Internal Server Error",
*        "statusCode": 500
*    }
*/
routes.get('/techs/:id', asyncHandler(TechController.show))
/**
 * @api {post} /techs
 * @apiVersion 1.0.0 
 * @apiName Registra uma Tecnologia na tabela tech
 * @apiGroup Tecnologia
 * @apiParam {number} id Id(Identificador) de Tecnologia
 * @apiParam {string} name Nome da tecnologia
 * @apiDescription Essa API salva uma tecnologia
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 201 Created
 *    {
 *        "statusCode": 201,
 *        "message": "Created",
 *        "tech": {
 *            "id": 9,
 *            "name": "Cobol",
 *            "createdAt": "2021-01-15T14:13:37.000Z",
 *            "updatedAt": "2021-01-15T14:13:37.000Z"
 *         },
 *         "location": "http://localhost:3333/techs/9"
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *        "techs":{}
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 400 Bad Request
 *    {
 *        "statusCode": 400,
 *        "message": "bad request",
 *        "totalErrors": 2,
 *        "errors": [
 *             {
 *                 "field": "name",
 *                 "message": "Campo Vazio, Por Favor Preencha o Campo de Tecnologia"
 *             },
 *             {
 *                 "field": "name",
 *                 "message": "Campo Invalido, Digite uma Tecnologia Entre 1 a 100 Digitos"
 *             }
 *         ]
 *    }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *       "message": "Internal Server Error",
 *       "statusCode": 500
 *    }
 */
routes.post('/techs', asyncHandler(TechController.store))
/**
 * @api {put} /techs/:id
 * @apiVersion 1.0.0 
 * @apiName Atualiza uma Tecnologia na tabela tech
 * @apiGroup Tecnologia
 * @apiParam {number} id Id(Identificador) de Tecnologia
 * @apiParam {string} name Nome da tecnologia
 * @apiDescription Essa API atualiza uma tecnologia cadastrada
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 Ok  
 *  {
 *      "statusCode": 200,
 *      "message": "Ok",
 *      "location": "http://localhost:3333/techs/9"
 *  }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 404 Not Found
 *    {
 *        "statusCode": 404,
 *        "message": "not found",
 *        "totalResults": 0,
 *    }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *         "statusCode": 400,
 *         "message": "bad request",
 *         "totalErrors": 2,
 *         "errors": [
 *              {
 *                  "field": "name",
 *                  "message": "Campo Vazio, Por Favor Preencha o Campo de Tecnologia"
 *              },
 *              {
 *                  "field": "name",
 *                  "message": "Campo Invalido, Digite uma Tecnologia Entre 1 a 100 Digitos"
 *              }
 *          ]
 *     }
 * @apiErrorExample {json} Error-Response:
 *    HTTP/1.1 500 Internal Server Error
 *    {
 *        "message": "Internal Server Error",
 *        "statusCode": 500
 *    }
 */
routes.put('/techs/:id', asyncHandler(TechController.update))
/**
 * @api {delete} /techs/:id
 * @apiVersion 1.0.0
 * @apiname Deletar uma tecnologia
 * @apiParam {Number} id Id(Identificador) de Tecnologia
 * @apiGroup Tecnologia
 * @apiDescription Essa API deleta uma tecnologia cadastrada
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
routes.delete('/techs/:id', asyncHandler(TechController.destroy))

module.exports = routes