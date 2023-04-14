// 3rd party imports
// our imports
const db = require('../models')


const reward_typeDeleteByIdController = async (req, res, next) => {
    const model = db.reward_type
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
    
    
module.exports = reward_typeDeleteByIdController