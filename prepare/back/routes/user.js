const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

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