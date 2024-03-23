"use client"

import React from 'react';
import { Avatar } from 'antd';
import Link from 'next/link'

/**
 * 
 * @param props 
 * @param props.data
 * @returns 
 */

const wrapperStyle: React.CSSProperties = {
    margin: '10% 20% 10% 20%',
    // backgroundColor: 'white',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
};

const itemStyle: React.CSSProperties = {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 20,
    // border: '1px solid #f5f5f5',
};

const avaurl = "https://avatars.githubusercontent.com/u/116529629?s=400&u=fbe877d48944004fd2a74f128037e8dee9901482&v=4";
const title = "Welcome to my own space!";
const contents = [
    "Hi, I'm @daidaiEbao.",
    "An M.S. student in Software Engineering.",
    "Now building my blog and learning backend tech.",
    new Date().toLocaleDateString(),
];
const tip = "Click to find blogs ->";

const Welcome: React.FC = (props: any) => {
    return (
        <div style={wrapperStyle}>
        <div style={itemStyle}>
            <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 88 }}
                src={avaurl}
            />

            <h1>
                {title}
            </h1>
            {contents.map((val, idx) => (
                <p key={idx}>
                    {val}
                </p>
            ))}
        </div>

        <div style={itemStyle}>
        <Link href={"/about"}>
            {tip}
        </Link>
        </div>

        </div>
        
    );
}

export default Welcome; 