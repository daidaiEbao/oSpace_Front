"use client"

import React from "react";
import { Layout } from "antd";


const { Header, Content, Footer }  = Layout;
const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    // color: '#fff',
    height: 64,
    backgroundColor: 'white',
  };

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: 'white',
};

const AboutLayout = ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) => {
    return (
        <Layout>
            <Header style={headerStyle}>
            This is Header. 
            </Header>
            <Content style={contentStyle}>
                {children}
            </Content>
            <Footer style={footerStyle}>
            own Space ©{new Date().getFullYear()} Created by Rains Yong
            </Footer>
        </Layout>
        
    );
}

export default AboutLayout;