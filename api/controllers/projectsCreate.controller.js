// 3rd party imports
// our imports
const db = require('../models')


const ProjectsCreateController = async (req, res, next) => {
    const body = req.body
    const model = db.Projects
    model.create(body).then(
        (result) => {
            res.json(result)
        }
    ).catch(err => {
        return res.status(400).send({
            'code': 400,
            'msg': err.message
        })
    })
}
    
    
module.exports = ProjectsCreateController