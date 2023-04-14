const Sequelize = require("sequelize");
const moment = require("moment")
const db = require('../../models')

    
const ControllerIncludes = {
    companyWithoutTimestamps: { model: db.Company, attributes: { exclude: ['updated_at', 'created_at'] } },
    exchangeWithoutTimestamps: { model: db.Exchange, attributes: { exclude: ['updated_at', 'created_at'] } },
    feedItem: { model: db.FeedItem },
    feedItemLast5Days: {
        model: db.FeedItem,
        where: {
            score: true,
            event_at: {
                [Sequelize.Op.gt]: moment().subtract(5, 'days').toDate()
            }
        }
    },
}

module.exports = ControllerIncludes
