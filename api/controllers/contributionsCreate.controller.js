// 3rd party imports
// our imports
const db = require('../models')


const ContributionsCreateController = async (req, res, next) => {
    const body = req.body
    const model = db.Contributions
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
    
    
module.exports = ContributionsCreateController