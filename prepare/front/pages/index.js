import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        // AppLayout 안쪽 부분이 children
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>
    );
}

export default Home;