const Portfolio = require('../models/Portfolio')

exports.find = () => Portfolio.find()
exports.create = (data) => Portfolio.create(data)
exports.deletePortoflio = (id) => Portfolio.findByIdAndDelete(id)