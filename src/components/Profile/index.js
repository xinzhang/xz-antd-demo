import React, { useState, useEffect } from 'react';
import { Avatar, Badge } from 'antd';

export default function Profile({ showHide }) {
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchData = () => {
            fetch('https://api.randomuser.me')
                .then(res => res.json())
                .then(result => {
                    setUser(result.results[0]);
                });
        };
        fetchData();
    }, [showHide]);

    return (
        <>
            {showHide && user && (
                <Badge count={1}>
                    <Avatar shape="square" src={user.picture.thumbnail} />
                </Badge>
            )}
        </>
    );
}
