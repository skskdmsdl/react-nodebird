const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id); // 세션에 다 들고 있기 무거우니까 id만 저장
    });
    // 2번째 요청부터는 deserializeUser
    // 정보 복원를 위해서 세션에 저장된 id로 db에서 복원함
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findOne({ where: { id }});
            done(null, user); // req.user에 정보 넣어줌
        } catch (error) {
            console.error(error);
            done(error);
        }
    });
    
    local();
};