import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInloading } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
   
    // const [id, setId] = useState('');
    // // 컴포넌트에 props로 넘겨주는 함수는 useCallback을 꼭 써라! 👉 그래야 최적화 됨
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);


    // const style = useMemo(() => ({ marginTop: 10 }), []);
    
    const onSubmitFrom = useCallback(() => {
        console.log(email, password);
        dispatch(loginRequestAction({ email, password }));
    }, [email, password]);

    return (
        // onFinish는 자동으로 e.preventDefault()가 적용이 되어 있음(ant-design)
        <FormWrapper onFinish={onSubmitFrom}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInloading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
            <div>

            </div>
        </FormWrapper>
    );
}

// LoginForm.propTypes = {
//     setIsLoggedIn: PropTypes.func.isRequired,
// }

export default LoginForm;