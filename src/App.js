
import React, { Component } from 'react';
// 路由
import { BrowserRouter } from 'react-router-dom';

// 布局组件
import AppHeader from './Components/Header'; //头部
import AppSider from './Components/sider'; //导航组件
import ContentMain from './Components/ContentMain'; //导航组件
import { Layout } from 'antd';

//样式引用
import './App.css';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

class App extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Header style={{ background: '#000', padding: 0 }}>
            <AppHeader/>
          </Header>
          <Layout style={{ flexDirection: 'row' }}>
            <AppSider/>
            <Layout >
              
              <Content>
                <ContentMain />
              </Content>

              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        </BrowserRouter>
      </Layout>
    )
  }
}

export default App;
