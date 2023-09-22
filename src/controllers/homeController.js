import db from '../models/index';

let getHomePage = (req, res) => {
    res.send('hello world');
}
module.exports = {
    getHomePage:getHomePage
}
