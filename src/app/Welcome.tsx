"use client"

import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;
/**
 * 
 * @param props 
 * @param props.data
 * @returns 
 */
const Welcome: React.FC = (props : any) => {
    return (
        <div>
            {props.data?.id}, {props.data?.content}
            <Card
                // style={{ width: 300 }}
            >
                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    );
}

export default Welcome; 