import React,{Fragment} from 'react';
import {HeaderWrapper} from '../style/headers.js'
import Demo from './Demo.js';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HeartTwoTone,

} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Sider } = Layout;


class Headers extends React.Component{
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render(){
    return(
      <Fragment>
        <HeaderWrapper>
          <Layout className={'out'}>
            <Sider trigger={null} defaultCollapsed collapsed={this.state.collapsed}style={{BackgroundColor:'rgba(255,255,255,0.2)'}}>
              <div className="logo" />
              <Menu theme="light" mode="inline" defaultSelectedKeys={['0']} style={{BackgroundColor:'rgba(255,255,255,0.1)'}}>
                <SubMenu style={{backgroundColor:'transparent'}} key="1" icon={<HeartTwoTone twoToneColor="#ff0058" />} title="主题切换">
                  <Menu.Item key="5" style={{BackgroundColor:'rgba(255,255,255,0.1)'}}>
                    <ul className={'clearfix'}>
                      <li>
                        <Link to="/Middle">
                          <i className="btn btn7"><span className="btn-inner">主题样式(1)</span></i>
                        </Link>
                      </li>
                    </ul>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <ul className={'clearfix'}>
                      <li>
                        <Link to="/Last">
                        <i className="btn btn13"><span className="btn-inner">主题样式(2)</span>
                          <div className="bgsqr1">
                          </div>
                          <div className="bgsqr2">
                          </div>
                        </i>
                        </Link>
                      </li>
                    </ul>
                  </Menu.Item>
                    <Menu.Item key="7">
                    <ul className={'clearfix'}>
                      <li>
                        <Link to="/Home">
                            <i className="btn btn11"><span className="btn-inner">主题样式(3)</span>
                              <div className="bgsqr1"></div>
                              <div className="bgsqr2"></div>
                              <div className="bgsqr3"></div>
                              <div className="bgsqr4"></div>
                            </i>
                        </Link>
                      </li>
                    </ul>
                    </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Header className="site-layout-background" >
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {onClick: this.toggle, className: 'trigger',})}
            </Header>
          </Layout>
          <Demo/>
        </HeaderWrapper>
      </Fragment>
    )
  }
}

export default Headers;