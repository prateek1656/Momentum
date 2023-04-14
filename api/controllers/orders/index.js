const Sequelize = require("sequelize");
const db = require('../../models')


const ControllerOrders = {
    oneDayNetAmountAsc: [
        [Sequelize.literal('one_day_net_amount ASC')]
    ],
    oneDayNetAmountDesc: [
        [Sequelize.literal('one_day_net_amount DESC')]
    ],
    oneWeekNetAmountAsc: [
        [Sequelize.literal('one_week_net_amount ASC')]
    ],
    oneWeekNetAmountDesc: [
        [Sequelize.literal('one_week_net_amount DESC')]
    ],
    oneMonthNetAmountAsc: [
        [Sequelize.literal('one_month_net_amount ASC')]
    ],
    oneMonthNetAmountDesc: [
        [Sequelize.literal('one_month_net_amount DESC')]
    ],
    threeMonthNetAmountAsc: [
        [Sequelize.literal('three_month_net_amount ASC')]
    ],
    threeMonthNetAmountDesc: [
        [Sequelize.literal('three_month_net_amount DESC')]
    ],
    sixMonthNetAmountAsc: [
        [Sequelize.literal('six_month_net_amount ASC')]
    ],
    sixMonthNetAmountDesc: [
        [Sequelize.literal('six_month_net_amount DESC')]
    ],
    oneYearNetAmountAsc: [
        [Sequelize.literal('one_year_net_amount ASC')]
    ],
    oneYearNetAmountDesc: [
        [Sequelize.literal('one_year_net_amount DESC')]
    ],
}

module.exports = ControllerOrders
