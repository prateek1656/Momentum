const db = require('../models')
const ControllerIncludes = require('./includes')  
const ControllerAttributes= require('./attributes')
const ControllerOrders = require('./orders')
const QueryUtils = require('../utils/query.utils')


const contribution_typeSearchController = async (req, res, next) => {
    const model = db.contribution_type
    try {
        // Get all query parameters
        let limit = parseInt(req.query.limit)
        let offset = parseInt(req.query.offset)
        let reqAttributes = req.query.attributes
        let reqIncludes = req.query.includes
        let reqOrders = req.query.orders
        let query = req.body.query
        let order = req.body.order
        let group = req.body.group
        // Create sequelize query based on user provided query parameters
        query = QueryUtils.createSequelizeQuery(model, query)
        // map query attributes from findAll query
        let queryAttributes = null
        if (reqAttributes) {
            reqAttributes = reqAttributes.replace('[','').replace(']', '').split(',')
            reqAttributes.map(
                (attr) => {
                    if (attr in ControllerAttributes) {
                        queryAttributes = ControllerAttributes[reqAttributes]
                        // queryAttributes.push(ControllerAttributes[reqAttributes])
                    }
                }
            )
        }
        // Create includes array for findAll query
        let queryIncludes = []
        if (reqIncludes) {
            reqIncludes = reqIncludes.replace("[", "").replace("]","")
            reqIncludes = reqIncludes.split(",")
            reqIncludes.map(
                (reqInclude) => {
                    let reqIncludeWhereQuery = null
                    if (reqInclude.includes("where=")) {
                        reqIncludeSplit = reqInclude.split("?where=")
                        reqInclude = reqIncludeSplit[0]
                        reqIncludeWhereQuery = reqIncludeSplit[1]
                    }
                    if (reqInclude in ControllerIncludes) {
                        if (reqIncludeWhereQuery) {
                            reqIncludeWhereQuery = JSON.parse(reqIncludeWhereQuery)
                        }
                        let includeQuery=ControllerIncludes[reqInclude]
                        if ('where' in ControllerIncludes[reqInclude]) {
                            includeQuery['where'] = {
                                ...ControllerIncludes[reqInclude]['where'],
                                ...reqIncludeWhereQuery
                            }
                        } else {
                            includeQuery['where'] = reqIncludeWhereQuery
                        }
                        queryIncludes.push(includeQuery)
                    }
                }
            )
        }
        // Create order array for findAll query
        let queryOrders = []
        if (reqOrders) {
            reqOrders = reqOrders.replace('[','').replace(']', '').split(',')
            reqOrders.map(
                (order) => {
                    if (order in ControllerOrders) {
                        queryOrders = ControllerOrders[reqOrders]
                    }
                }
            )
        }
        // setting default limit and offset for pagination
        if (!limit) {
            limit = 10
        }
        if (!offset) {
            offset = 0
        }
        order = queryOrders ? queryOrders : order
        model.findAll(
            {
                limit: limit, offset: offset, 
                where: query,  
                group: group,
                order: queryOrders,
                attributes: queryAttributes,
                include: queryIncludes
            }, 
        ).then((result) => {
            if (result != null) {
                console.log('INFO: found objects based on search query')
                return res.json(result)
            } else {
                console.log('ERROR: object not found for the given search query')
                return res.status(404).send(
                    {
                        'code': 404,
                        'msg': 'object not found for the given search query'
                    }
                )
            }
        });
    } catch(err) {
        console.log('ERROR: '+err.message)
        return res.status(400).send({
            'code': 400,
            'msg': err.message
        })
    }
}
    
    
module.exports = contribution_typeSearchController

