import db from '../models/index';
import bcrypt from 'bcryptjs';
let createUser = (email, password) => {
    
    let userEmail = email;
    db.User.findOne({
        where: {
            email: email
        }
    })
        .then( async email => {
            const saltRounds = 10; // so luot bam
            if (!email) {
                bcrypt.genSalt(saltRounds, async (err, salt) => {
                    if (err) {
                        throw(err);
                    }
                    bcrypt.hash(password, salt, async (err, hash) => {
                        if (err) {
                            throw(err);
                        }

                        await db.User.create({
                            email: userEmail,
                            password: hash
                        }). then(() => {
                            console.log('done');
                        })
                    })
                })
            } 
        })


}

module.exports = {
    createUser: createUser
}