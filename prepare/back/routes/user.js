const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

// 사용자 불러오기
router.get('/', async (req, res, next) => {
    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                whrer: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error();
        next(error);
    }
});

// 미들웨어 확장 router.post('/login', passport.authenticate('local', (err, user, info) => {...});
router.post('/login', isNotLoggedIn, (req, res, next) => {
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
            const fullUserWithoutPassword = await User.findOne({
                whrer: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            return res.status(200).json(fullUserWithoutPassword); // 사용자정보 프론트로 넘겨줌
        })
    })(req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/
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

router.post('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

router.patch('nickname', isLoggedIn, async (req, res, next) => {
    try {
        await User.update({
            nickname: req.body.nickname,
        }, {
            where: { id: req.user.id },
        });
        res.status(200).json({ nickname: req.body.nickname });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;