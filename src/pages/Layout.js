import React, { useState } from 'react';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    SmallDashOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider style={{
                height: '100vh',
            }} trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <SmallDashOutlined />,
                            label: <Link to="/">Dash Board</Link>,
                        },
                        {
                            key: '2',
                            icon: <SmallDashOutlined />,
                            label: <Link to="/verhicleBrand">Verhicle Brand</Link>,
                        },
                        {
                            key: '3',
                            icon: <SmallDashOutlined />,
                            label: <Link to="/verhicleModel">Verhicle Model</Link>,
                        },
                        {
                            key: '4',
                            icon: <SmallDashOutlined />,
                            label: <Link to="/center">Center</Link>,
                        },
                        {
                            key: '5',
                            icon: <SmallDashOutlined />,
                            label: <Link to="/account">Account</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
};
export default Sidebar;