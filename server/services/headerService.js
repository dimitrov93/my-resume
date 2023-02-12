const Header = require('../models/Header')

exports.findUser = () => Header.find();
exports.create = (data) => Header.create(data)
