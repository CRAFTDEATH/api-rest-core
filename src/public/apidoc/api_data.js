define({ "api": [
  {
    "type": "put",
    "url": "/addresses/:id",
    "title": "",
    "version": "1.0.0",
    "name": "Atualiza_um_Endereço",
    "group": "Endereço",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) Endereço</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Região(País)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "zipCode",
            "description": "<p>CEP(Código de Endereçamento Postal)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Estado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Cidade</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>Rua</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Numero da casa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complement",
            "description": "<p>Complemento</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Id(Usuario)</p>"
          }
        ]
      }
    },
    "description": "<p>Essa API atualiza um endereço cadastrado</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n  \"statusCode\": 200,\n  \"message\": \"Ok\",\n  \"location\": \"http://localhost:3333/addresses/14\"   \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"message\": \"not found\",\n   \"totalResults\": 0,\n   \"users\":{\n\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"statusCode\": 400,\n     \"message\": \"bad request\",\n     \"totalErrors\": 1,\n     \"errors\": [{\n         \"field\": \"state\",\n         \"message\": \"Campo Invalido, Por Favor Digite um Estado com 2 Digitos\"\n      }]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Internal Server Error\",\n  \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/address.js",
    "groupTitle": "Endereço"
  },
  {
    "type": "get",
    "url": "/addresses/:userId",
    "title": "",
    "version": "1.0.0",
    "name": "Buscar_Endereço",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>userId(Identificador) Usuario</p>"
          }
        ]
      }
    },
    "group": "Endereço",
    "description": "<p>Essa API lista o endereço cadastrado pelo seu id informado</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"statusCode\": 200,\n   \"message\": \"Ok\",\n   \"totalResults\": 1,\n    \"user\": {\n        \"id\": 14,\n        \"name\": \"example\",\n        \"email\": \"example@hotmai.com\",\n        \"createdAt\": \"2021-01-11T17:45:14.000Z\",\n        \"updatedAt\": \"2021-01-11T17:45:14.000Z\",\n        \"addresses\": [{\n            \"id\": 21,\n            \"country\": \"Brazil\",\n            \"zipCode\": \"19990-111\",\n            \"state\": \"São Paulo\",\n            \"city\": \"Brasilia\",\n            \"street\": \"Jardin Teodoro\",\n            \"number\": 12,\n            \"complement\": \"Casa\",\n            \"createdAt\": \"2021-01-15T15:32:08.000Z\",\n            \"updatedAt\": \"2021-01-15T15:32:08.000Z\"\n        }],\n     },\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n    \"users\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"message\": \"Internal Server Error\",\n   \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/address.js",
    "groupTitle": "Endereço"
  },
  {
    "type": "delete",
    "url": "/addresses/:id",
    "title": "",
    "version": "1.0.0",
    "name": "Deletar_um_Endereço",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) Endereço</p>"
          }
        ]
      }
    },
    "group": "Endereço",
    "description": "<p>Essa API deleta um endereço cadastrado</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n  \"statusCode\": 200,\n  \"message\": \"Ok\",  \n  \"recordDeleted\": 1        \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"message\": \"not found\"\n   \"recordDeleted\": 0  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"message\": \"Internal Server Error\",\n   \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/address.js",
    "groupTitle": "Endereço"
  },
  {
    "type": "get",
    "url": "/addresses",
    "title": "",
    "version": "1.0.0",
    "name": "Listar_endereço",
    "group": "Endereço",
    "description": "<p>Essa API lista todos endereço cadastrados</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 Ok\n   {\n       \"statusCode\": 200,\n       \"message\": \"Ok\",\n       \"totalResults\": 1,\n       \"user\": [{\n           \"id\": 14,\n           \"name\": \"example\",\n           \"email\": \"example@hotmai.com\",\n           \"createdAt\": \"2021-01-11T17:45:14.000Z\",\n           \"updatedAt\": \"2021-01-11T17:45:14.000Z\",\n           \"addresses\": [\n               {\n                   \"id\": 21,\n                   \"country\": \"Brazil\",\n                   \"zipCode\": \"19990-111\",\n                   \"state\": \"São Paulo\",\n                   \"city\": \"Brasilia\",\n                   \"street\": \"Jardin Teodoro\",\n                   \"number\": 12,\n                   \"complement\": \"Casa\",\n                   \"userId\": 14,\n                   \"createdAt\": \"2021-01-15T15:32:08.000Z\",\n                   \"updatedAt\": \"2021-01-15T15:32:08.000Z\"\n               }\n           ],\n    }],\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"message\": \"not found\",\n   \"totalResults\": 0,\n   \"users\":[\n        {}\n   ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/address.js",
    "groupTitle": "Endereço"
  },
  {
    "type": "post",
    "url": "/addresses",
    "title": "",
    "version": "1.0.0",
    "name": "Salvar_Endereço",
    "group": "Endereço",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Região(País)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "zipCode",
            "description": "<p>CEP(Código de Endereçamento Postal)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Estado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Cidade</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>Rua</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Numero da casa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complement",
            "description": "<p>Complemento</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Id(Identificador) Usuario</p>"
          }
        ]
      }
    },
    "description": "<p>Esse API salva um endereço</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 201 Created\n   {\n         \"statusCode\": 201,\n         \"message\": \"Created\",\n         \"address\": {\n         \"id\": 23,\n         \"country\": \"Brazil\",\n         \"zipCode\": \"19900\",\n         \"state\": \"São Paulo\",\n         \"city\": \"Douradinho\",\n         \"street\": \"Marechal Rondon\",\n         \"number\": \"308\",\n         \"complement\": \"Casa\",\n         \"userId\": 8,\n         \"updatedAt\": \"2021-01-15T16:24:06.684Z\",\n         \"createdAt\": \"2021-01-15T16:24:06.684Z\"\n   },\n   \"location\": \"http://localhost:3333/addresses/14\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   \"statusCode\": 404,\n   \"message\": \"not found\",\n   \"totalResults\": 0,\n   \"users\":{\n\n   }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"statusCode\": 400,\n    \"message\": \"bad request\",\n    \"totalErrors\": 1,\n    \"errors\": [{\n         \"field\": \"state\",\n         \"message\": \"Campo Invalido, Por Favor Digite um Estado com 2 Digitos\"\n     }]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"message\": \"Internal Server Error\",\n   \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/address.js",
    "groupTitle": "Endereço"
  },
  {
    "type": "put",
    "url": "/techs/:id",
    "title": "",
    "version": "1.0.0",
    "name": "Atualiza_uma_Tecnologia_na_tabela_tech",
    "group": "Tecnologia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) de Tecnologia</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da tecnologia</p>"
          }
        ]
      }
    },
    "description": "<p>Essa API atualiza uma tecnologia cadastrada</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok  \n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"location\": \"http://localhost:3333/techs/9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"statusCode\": 400,\n    \"message\": \"bad request\",\n    \"totalErrors\": 2,\n    \"errors\": [\n         {\n             \"field\": \"name\",\n             \"message\": \"Campo Vazio, Por Favor Preencha o Campo de Tecnologia\"\n         },\n         {\n             \"field\": \"name\",\n             \"message\": \"Campo Invalido, Digite uma Tecnologia Entre 1 a 100 Digitos\"\n         }\n     ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tech.js",
    "groupTitle": "Tecnologia"
  },
  {
    "type": "delete",
    "url": "/techs/:id",
    "title": "",
    "version": "1.0.0",
    "name": "Deletar_uma_tecnologia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) de Tecnologia</p>"
          }
        ]
      }
    },
    "group": "Tecnologia",
    "description": "<p>Essa API deleta uma tecnologia cadastrada</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",  \n    \"recordDeleted\": 1        \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\"\n    \"recordDeleted\": 0  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tech.js",
    "groupTitle": "Tecnologia"
  },
  {
    "type": "get",
    "url": "/techs",
    "title": "",
    "version": "1.0.0",
    "name": "Listagem_de_tecnologias",
    "group": "Tecnologia",
    "description": "<p>Essa API lista todas tecnologias cadastradas</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"statusCode\": 200,\n     \"message\": \"Ok\",\n     \"totalResults\": 1,\n         \"users\": [{\n             \"id\": 7,\n             \"name\": \"Junior Souza\",\n             \"email\": \"junio1994s@hotmail.com\",\n             \"createdAt\": \"2021-01-27T22:55:57.000Z\",\n             \"updatedAt\": \"2021-01-27T22:55:57.000Z\",\n             \"techs\": [{\n                 \"id\": 10,\n                 \"name\": \"php\",\n                 \"createdAt\": \"2021-01-28T17:59:28.000Z\",\n                 \"updatedAt\": \"2021-01-28T18:00:51.000Z\"\n              }]\n           }]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n    \"users\":[]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tech.js",
    "groupTitle": "Tecnologia"
  },
  {
    "type": "get",
    "url": "/techs/:id",
    "title": "",
    "version": "1.0.0",
    "name": "Procurar_uma_Tecnologia_por_um_id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) de Tecnologia</p>"
          }
        ]
      }
    },
    "group": "Tecnologia",
    "description": "<p>Essa API lista as tecnologias cadastradas pelo seu id informado</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 1,\n    \"tech\":{\n       \"id\": 5,\n       \"name\": \"PHP\",\n       \"createdAt\": \"2021-01-04T21:04:33.000Z\",\n       \"updatedAt\": \"2021-01-04T21:04:33.000Z\"\n    },\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n    \"tech\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tech.js",
    "groupTitle": "Tecnologia"
  },
  {
    "type": "post",
    "url": "/techs",
    "title": "",
    "version": "1.0.0",
    "name": "Registra_uma_Tecnologia_na_tabela_tech",
    "group": "Tecnologia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) de Tecnologia</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nome da tecnologia</p>"
          }
        ]
      }
    },
    "description": "<p>Essa API salva uma tecnologia</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"statusCode\": 201,\n    \"message\": \"Created\",\n    \"tech\": {\n        \"id\": 9,\n        \"name\": \"Cobol\",\n        \"createdAt\": \"2021-01-15T14:13:37.000Z\",\n        \"updatedAt\": \"2021-01-15T14:13:37.000Z\"\n     },\n     \"location\": \"http://localhost:3333/techs/9\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n    \"techs\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"statusCode\": 400,\n    \"message\": \"bad request\",\n    \"totalErrors\": 2,\n    \"errors\": [\n         {\n             \"field\": \"name\",\n             \"message\": \"Campo Vazio, Por Favor Preencha o Campo de Tecnologia\"\n         },\n         {\n             \"field\": \"name\",\n             \"message\": \"Campo Invalido, Digite uma Tecnologia Entre 1 a 100 Digitos\"\n         }\n     ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n   \"message\": \"Internal Server Error\",\n   \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tech.js",
    "groupTitle": "Tecnologia"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "",
    "version": "1.0.0",
    "name": "Atualizar_um_usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail do usuario</p>"
          }
        ]
      }
    },
    "group": "Usuario",
    "description": "<p>Essa API atualiza um usuario cadastrado</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"location\": `${process.env.APP_URL}users/1`      \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResult\": 0  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"statusCode\": 400,\n    \"message\": \"bad request\",\n    \"totalErrors\": 4,\n        \"errors\": [{\n             \"field\": \"name\",\n             \"message\": \"Campo Vazio, Por Favor Preencha o Campo Nome\"\n         },\n         {\n             \"field\": \"name\",\n             \"message\": \"Campo Invalido, Por Favor Digite um Nome entre 3 a 100 Digitos\"\n         },\n         {\n             \"field\": \"email\",\n             \"message\": \"Campo Vazio, Por Favor Preencha o Campo E-Mail\"\n         },\n         {\n             \"field\": \"email\",\n             \"message\": \"Campo Invalido,Por Favor Digite um E-mail Valido\"\n         }\n      ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "",
    "version": "1.0.0",
    "name": "Deletar_um_usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) Usuario</p>"
          }
        ]
      }
    },
    "group": "Usuario",
    "description": "<p>Essa API deleta um usuario cadastrado</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",  \n    \"recordDeleted\": 1        \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\"\n    \"recordDeleted\": 0  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "version": "1.0.0",
    "name": "Listagem_de_usuarios",
    "group": "Usuario",
    "description": "<p>Essa API lista todos os usuarios cadastrados</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 2,\n    \"users\":[{\n         \"id\": 1,\n         \"name\": \"example\",\n         \"email\": \"example@hotmail.com\"\n         \"updatedAt\": \"2021-01-11T17:48:21.447Z\",\n         \"createdAt\": \"2021-01-11T17:48:21.447Z\"    \n     },\n     {\n         \"id\": 2,\n         \"name\": \"example2\",\n         \"email\": \"example2@hotmail.com\",\n         \"updatedAt\": \"2021-01-11T17:48:21.447Z\",\n         \"createdAt\": \"2021-01-11T17:48:21.447Z\"\n     }]       \n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n    \"users\":[\n         {}\n     ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "",
    "version": "1.0.0",
    "name": "Procurar_um_Usuario_por_seu_id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id(Identificador) Usuario</p>"
          }
        ]
      }
    },
    "group": "Usuario",
    "description": "<p>Essa API lista o usuario cadastrado pelo seu id informado</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"statusCode\": 200,\n    \"message\": \"Ok\",\n    \"totalResults\": 1,\n    \"users\":{\n        \"id\": 1,\n        \"name\": \"example\",\n        \"email\": \"example@hotmail.com\",\n        \"updatedAt\": \"2021-01-11T17:48:21.447Z\",\n        \"createdAt\": \"2021-01-11T17:48:21.447Z\"\n    }       \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"statusCode\": 404,\n    \"message\": \"not found\",\n    \"totalResults\": 0,\n    \"users\":{\n       \n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "",
    "version": "1.0.0",
    "name": "Registra_um_usuario",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuario</p>"
          }
        ]
      }
    },
    "description": "<p>Essa API salva um usuario</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"statusCode\": 201,\n    \"message\": \"Created\",\n    \"users\": {\n        \"id\": 1,\n        \"name\": \"example\",\n        \"email\": \"example@hotmail.com\",\n        \"updatedAt\": \"2021-01-11T17:48:21.447Z\",\n        \"createdAt\": \"2021-01-11T17:48:21.447Z\", \n     },\n     \"location\": `${process.env.APP_URL} users/1`  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"statusCode\": 400,\n    \"message\": \"bad request\",\n    \"totalErrors\": 4,\n        \"errors\": [\n             {\n                 \"field\": \"name\",\n                 \"message\": \"Campo Vazio, Por Favor Preencha o Campo Nome\"\n             },\n             {\n                 \"field\": \"name\",\n                 \"message\": \"Campo Invalido, Por Favor Digite um Nome entre 3 a 100 Digitos\"\n             },\n             {\n                 \"field\": \"email\",\n                 \"message\": \"Campo Vazio, Por Favor Preencha o Campo E-Mail\"\n             },\n             {\n                 \"field\": \"email\",\n                 \"message\": \"Campo Invalido,Por Favor Digite um E-mail Valido\"\n             }\n         ]\n }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\": \"Internal Server Error\",\n    \"statusCode\": 500\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Usuario"
  }
] });
