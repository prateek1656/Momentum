// 3rd party imports
// our imports
const db = require('../models')


const userDeleteByIdController = async (req, res, next) => {
    const model = db.user
    model.destroy(
        {where: {id: req.params.id},}
    ).then(
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
    
    
module.exports = userDeleteByIdController