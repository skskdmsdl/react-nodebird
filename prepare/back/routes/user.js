const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User } = require('../models');

const router = express.Router();

// 미들웨어 확장 router.post('/login', passport.authenticate('local', (err, user, info) => {...});
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.err(err);
            return next(error);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if(loginErr) {
                console.log(loginErr);
                return next(loginErr);
            }
            return res.json(user); // 사용자정보 프론트로 넘겨줌
        })
    })(req, res, next);
});

router.post('/', async (req, res, next) => { // POST /user/
    try{
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if(exUser) {
            return res.status(403).send('이미 사용 중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        await User.create({ // 순서 맞춰주기 위해 async await 사용
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(201).send('ok'); // 잘 생성됨
    } catch (error) {
        console.error(error);
        next(error); // status 500 (서버 에러)
    }
});

module.exports = router;