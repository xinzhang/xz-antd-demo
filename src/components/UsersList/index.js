import React, { useState, useEffect } from 'react';
import { Table, Modal } from 'antd';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(data);
        };
        fetchData();
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: '',
            key: 'action',
            render: record => (
                <span>
                    <a onClick={() => showDetail(record.id)} key={record.id}>
                        show
                    </a>
                </span>
            ),
        },
    ];

    const showDetail = s => {
        console.log(s);
        setVisible(true);
    };

    return (
        <>
            <Table dataSource={users} columns={columns} />
            <Modal
                title="detail"
                visible={visible}
                onOk={() => {
                    setVisible(false);
                }}
                onCancel={() => {
                    setVisible(false);
                }}
            >
                <p>hello modal</p>
            </Modal>
        </>
    );
};

export default UsersList;
