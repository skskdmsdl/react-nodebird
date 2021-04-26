const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');

const app = express();
// 서버 실행시 db 시퀄라이즈 연결
db.sequelize.sync()
    .then(() => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

// 프론트에서 보낸 데이터를 req.body에 넣어주는 역할을 해줌(위치 중요-> 라우터 위)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form은 urlencoded라고 생각하면 됨

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/', (req, res) => {
    res.send('hello api');
});

app.get('/posts', (req, res) => {
    res.json([
        { id: 1, content: 'hello1' },
        { id: 2, content: 'hello2' },
        { id: 3, content: 'hello3' },
    ])
});

app.use('/post', postRouter); // post가 prefix로 붙음
app.use('/user', userRouter); 

app.listen(3000, () => {
    console.log('서버 실행 중!');
});