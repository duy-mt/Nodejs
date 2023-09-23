import crud from '../services/CRUDService';

let CreateUserController = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    crud.createUser(email, password);
}

module.exports = {
    CreateUserController: CreateUserController
}