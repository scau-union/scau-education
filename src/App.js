import React, { Component } from 'react';
import './App.css';

import CommonHeader from './layout/Header';
import NavMenu from './layout/NavMenu';
import Main from './layout/Main';
import { Layout} from 'antd';
const {Sider} = Layout;

class App extends Component {
  render() {
    return (
        <Layout>
            <CommonHeader/>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <NavMenu/>
                </Sider>
                <Layout>
                    <Main/>
                </Layout>
            </Layout>
        </Layout>
    );
  }
}

export default App;
