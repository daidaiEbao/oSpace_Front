"use client"

import React from "react";
import { Layout, Divider} from "antd";


const { Header, Content, Footer }  = Layout;
const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    height: '100%',
    backgroundColor: 'white',
    textAlign: 'center',
  };

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: 'white',
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
            <h1 style={{fontSize: 32}}>Blog</h1>
            <Divider style={{marginTop: 0, marginBottom: 0}}/>
            </Header>
            
            <Content style={contentStyle}>
                {children}
            </Content>
            
            <Footer style={footerStyle}>
            <Divider style={{marginTop: 0}} />
            <p>
            own Space
            </p>
             <p>
             ©{new Date().getFullYear()} 
             </p>
            <p>
            Created by Rains Yong
            </p>
            </Footer>
        </Layout>
        
    );
}

export default AboutLayout;