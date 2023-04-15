const Sequelize = require("sequelize");

function getOperatorSymbol(op) {
    const Op = Sequelize.Op;
    switch(op) {
        case 'Op.eq':
            return Op.eq
        case 'Op.ne':
            return Op.ne
        case 'Op.gte':
            return Op.gte
        case 'Op.gt':
            return Op.gt
        case 'Op.lte':
            return Op.lte
        case 'Op.lt':
            return Op.lt
        case 'Op.not':
            return Op.not
        case 'Op.in':
            return Op.in
        case 'Op.notIn':
            return Op.notIn
        case 'Op.is':
            return Op.is
        case 'Op.like':
            return Op.like
        case 'Op.notLike':
            return Op.notLike
        case 'Op.is':
            return Op.is
        case 'Op.notILike':
            return Op.notILike
        case 'Op.regexp':
            return Op.regexp
        case 'Op.notRegexp':
            return Op.notRegexp
        case 'Op.iRegexp':
            return Op.iRegexp
        case 'Op.notIRegexp':
            return Op.notIRegexp
        case 'Op.between':
            return Op.between
        case 'Op.notBetween':
            return Op.notBetween
        case 'Op.overlap':
            return Op.overlap
        case 'Op.contains':
            return Op.contains
        case 'Op.contained':
            return Op.contained
        case 'Op.adjacent':
            return Op.adjacent
        case 'Op.strictLeft':
            return Op.strictLeft
        case 'Op.strictRight':
            return Op.strictRight
        case 'Op.noExtendLeft':
            return Op.noExtendLeft
        case 'Op.noExtendRight':
            return Op.noExtendRight
        case 'Op.and':
            return Op.and
        case 'Op.or':
            return Op.or
        case 'Op.any':
            return Op.any
        case 'Op.all':
            return Op.all
        case 'Op.values':
            return Op.values
        case 'Op.col':
            return Op.col
        default:
            return null
    }
}
const createSequelizeQuery = (model, query) => {
    if (!query) {
        return
    }
    Object.keys(query).map(
        (queryParam) => {
            if (typeof(query[queryParam]) == "object") {
                const queryParamAttributes = Object.keys(query[queryParam])
                queryParamAttributes.map(
                    (attribute) => {
                        if (attribute.includes('Op.')) {
                            opSymbol = getOperatorSymbol(attribute)
                            const queryAttribute = {[opSymbol]: query[queryParam][attribute]}
                            query[queryParam] = {...query[queryParam], ...queryAttribute}
                            delete query[queryParam][attribute]
                        }
                    }
                )
            }
            
            
        }
    )
    return query
}

module.exports = {
    createSequelizeQuery: createSequelizeQuery
}