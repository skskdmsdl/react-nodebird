import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

const AppLayout = ({ children }) => {
    return (
        <div>   
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {children}
        </div>
    )
};

//props로 넘기는 애들은 propTypes로 검사를 해줘야 함 (typescript에서는 필요 X)
AppLayout.propTypes = {
    // 여기서 노드는 nodejs가 아니라 화면에 그릴 수 있는 모든것을 말함(return 안에 들어갈 수 있는 것)
    children: propTypes.node.isRequired,
};

export default AppLayout;