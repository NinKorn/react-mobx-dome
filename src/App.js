import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import routes from './router/router';
import './App.css';
import 'antd/dist/antd.css';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// function App() 
class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            头导航
          </Header>
          <Content>

            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      // <div className="App" >
      //   <Router>
      //     <div>
      //       <Switch>
      //         {
      //           routes.map((item, i) => {
      //             if (item.exact) {
      //               return <Route exact path={item.path} component={item.component} key={i} />
      //             } else {
      //               return <Route path={item.path} component={item.component} key={i} />
      //             }
      //           })
      //         }
      //       </Switch>
      //     </div>
      //   </Router>
      // </div>
    )
  }
}

export default App;
