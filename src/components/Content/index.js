import React from 'react';
import { Button, DatePicker, version } from 'antd';
import 'antd/dist/antd.css';

const Content = () => {
    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div>
                <h3 style={{ textAlign: 'left' }}>Version: {version}</h3>
                <div>
                    <DatePicker />
                    <Button type="primary" style={{ marginLeft: 8 }}>
                        Primary Button
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Content;
