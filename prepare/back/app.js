const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

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
app.use('/', express.static(path.join(__dirname, 'uploads'))); // 운영체제에 따라 경로구분자에 문제가 생길 수 있어 join 사용
// 프론트에서 보낸 데이터를 req.body에 넣어주는 역할을 해줌(위치 중요-> 라우터 위)
app.use(express.json()); // axios로 데이터 보낼 때 
app.use(express.urlencoded({ extended: true })); // 일반 form으로 데이터 보낼 때
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