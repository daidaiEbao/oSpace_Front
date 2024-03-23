"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const Blog: React.FC = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setData([{
            title: 'Racing car sprays burning fuel into crowd.',
            time: '2024/3/23 18:41:46',
            id: '10001',
        }, {
            title: 'Japanese princess to wed commoner.',
            time: '2024/3/23 18:41:46',
            id: '10002',
        }, {
            title: 'Australian walks 100km after outback crash.',
            time: '2024/3/23 18:41:46',
            id: '10003',
        }, {
            title: 'Man charged over missing wedding girl.',
            time: '2024/3/23 18:41:46',
            id: '10004',
        }, {
            title: 'Los Angeles battles huge wildfires.',
            time: '2024/3/23 18:41:46',
            id: '10005',
        },
        ]);
    }, []);
    const onClick = () => {
        
        setPage(prePage => {
            prePage++;
            console.log(prePage);
            setData([...data, {title: 'xxxxxxxxxxxx', time: '2024/3/23 18:41:46', id: '10006'}]);
            return prePage;
        });
        
        
        
    };

    return (
        <div style={{alignItems: 'center', textAlign: 'center'}}>
            {data.map((val, idx) => (
                <div key={idx} style={{marginTop: 80, marginBottom: 80}}>
                    
                    <h3 style={{fontSize: 24, fontStyle: 'italic'}}>
                    <Link href={`/blog/${val.id}`} style={{color: 'black'}}>
                        {val.title}
                     </Link> 
                    </h3>
                    
                    <p>
                        {val.time}
                    </p>
                </div>
            ))}
            <p>......</p>
            <Button type='link' style={{fontSize: 24, height: '100%', textDecorationLine: 'underline'}} onClick={onClick}>
            <p>
            Click to load more
            </p>
            </Button>
        </div>
    );
}

export default Blog; 