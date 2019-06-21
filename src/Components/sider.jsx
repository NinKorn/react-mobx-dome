import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import '../styles/sider.less';
const { SubMenu } = Menu;

class Sider extends Component {
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <div className="sider">
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub2']}
                    mode="inline"
                >
                    <Menu.Item key="/"> 
                        <Link to="/">
                            <Icon type="home" /> 
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>看板</span>
                            </span>
                        }
                    >
                        <Menu.Item key="/GoodsList">
                            <Link to="/GoodsList">
                                <Icon type="appstore" />
                                <span>商品列表</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
export default Sider