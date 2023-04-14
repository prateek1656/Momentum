// 3rd party imports
// our imports
const db = require('../models')


const reward_typeUpdateController = async (req, res, next) => {
    const body = req.body
    const id = body.id
    if (id == null) {
        console.log('ERROR: id of the object to be updated is missing from body')
        return res.status(400).send({
            'code': 400,
            'msg': 'id of the object to be updated is missing from body'
        })
    }
    const model = db.reward_type
    model.update(body, {where: {id: id}}).then(
        (result) => {
            res.status(204).send()
        }
    ).catch(err => {
        return res.status(400).send({
            'code': 400,
            'msg': err.message
        })
    })
}
    
    
module.exports = reward_typeUpdateController