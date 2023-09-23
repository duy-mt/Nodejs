import db from '../models/index';
import bcrypt from 'bcryptjs';
let handleUserLogin = (email, password) => {
    return new Promise(async(resolve, reject) => {

        try {

            let userData = {};
    
            let isExist = await checkUserEmail(email);
            if (isExist){
                //user already exist
                //compare password
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: {
                        email: email
                    },
                    raw: true
                });
                if (user) {
                    let check = bcrypt.compare(password, user.password);
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage  = "OK";
                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password!';
                    }
                }        
                else {
                    
                    userData.errCode = 2;
                    userData.errMessage = "User is not found!";
                }        
            }
            else {
                //return error
                userData.errCode = 1;
                userData.errMessage = "Your's email isn't exist in your system. Pls try other email!"
                resolve(userData);
            }
            resolve(userData);
        }
        catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    email: userEmail
                }
            })
            if (user){
                resolve(true);
            }
            else{
                resolve(false);
            }
        }
        catch (e) {
            reject(e);
        }
    })

}

let compareUserPassword = (email, password) => {
    return new Promise (async (resolve, reject) => {
        try{
            let hash = db.User.findOne({
                where: {
                    email: email
                }
            }). then((user) => {
                bcrypt.compare(password, user.password)
                    .then((result) => {
                        if (result) {
                        console.log('Mật khẩu khớp.'); // Nếu khớp
                        } else {
                        console.log('Mật khẩu không khớp.'); // Nếu không khớp
                        }
                    })
            })
        }
        catch (e){
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin
}