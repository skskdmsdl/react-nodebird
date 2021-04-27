const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
// 서버 실행시 db 시퀄라이즈 연결
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);
passportConfig();

app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3000', // 정확한 주소 혹은 origin: true
    credentials: true,
}));
// 프론트에서 보낸 데이터를 req.body에 넣어주는 역할을 해줌(위치 중요-> 라우터 위)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form은 urlencoded라고 생각하면 됨
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/', (req, res) => {
    res.send('hello api');
});

app.use('/post', postRouter); // post가 prefix로 붙음
app.use('/posts', postsRouter);
app.use('/user', userRouter); 

// 에러처리 미들웨어 (기본으로 제공하나 따로 만들고 싶을때 추가하기)
// app.use((err, req, res, next) => {
    
// });

app.listen(3065, () => {
    console.log('서버 실행 중!');
});