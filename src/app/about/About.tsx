"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const About: React.FC = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setData([
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ]);
    }, []);
    const onClick = () => {
        
        setPage(prePage => {
            prePage++;
            console.log(prePage);
            setData([...data, 'xxxxxxxxxxxx']);
            return prePage;
        });
        
        
        
    };

    return (
        <div style={{alignItems: 'center', textAlign: 'center'}}>
            {data.map((val, idx) => (
                <div key={idx} style={{marginTop: 80, marginBottom: 80}}>
                    
                    <h3 style={{fontSize: 24, fontStyle: 'italic'}}>
                    <Link href='/' style={{color: 'black'}}>
                        {val}
                     </Link> 
                    </h3>
                    
                    <p>
                        {new Date().toLocaleString()}
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

export default About; 