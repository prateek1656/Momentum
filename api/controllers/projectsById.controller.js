const db = require('../models')
const ControllerIncludes = require('./includes')  
const ControllerAttributes= require('./attributes')


const projectsByIdController = async (req, res, next) => {
    try {
        const model = db.projects  
        // Get all query parameters
        let reqAttributes = req.query.attributes
        let reqIncludes = req.query.includes
        // map query attributes from findAll query
        let queryAttributes = null
        if (reqAttributes) {
            if (reqAttributes in ControllerAttributes) {
                queryAttributes = ControllerAttributes[reqAttributes]
            }
        }
        // Create includes array for findAll query
        let queryIncludes = []
        if (reqIncludes) {
            reqIncludes = reqIncludes.replace("[", "").replace("]","")
            reqIncludes = reqIncludes.split(",")
            reqIncludes.map(
                (reqInclude) => {
                    if (reqInclude in ControllerIncludes) {
                        queryIncludes.push(ControllerIncludes[reqInclude])
                    }
                }
            )
        }

        model.findOne({
            where: {id: req.params.id},
            attributes: queryAttributes,
            include: queryIncludes
        }).then(
            (result) => {
                if (result != null) {
                    console.log('INFO: found the object')
                    return res.json(result)
                } else {
                    console.log('ERROR: object not found for the given id')
                    return res.status(404).send(
                        {
                            'code': 404,
                            'msg': 'object not found for the given id'
                        }
                    )
                } 
            }
        )
    } catch(err) {
        console.log('ERROR: '+err.message)
        return res.status(400).send({
            'code': 400,
            'msg': err.message
        })
    }
}
    
    
module.exports = projectsByIdController