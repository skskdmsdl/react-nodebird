const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => { // POST /user/
    await User.create({ // 순서 맞춰주기 위해 async await 사용
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password,
    });
    res.send('ok');
});

module.exports = router;