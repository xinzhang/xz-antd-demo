import React from 'react';
import { Button, DatePicker, version } from 'antd';
import 'antd/dist/antd.css';
import UsersList from 'components/UsersList';

const Content = () => {
    return (
        <div>
            <h3 style={{ textAlign: 'left' }}>Ant table show case</h3>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <h3 style={{ textAlign: 'left' }}>Version: {version}</h3>
                <div>
                    <UsersList />
                </div>
            </div>
        </div>
    );
};

export default Content;
