/**
 * Created by wzb on 2017/10/29.
 * 主内容区
 */

import React, {Component} from 'react';
import {Layout, Breadcrumb} from 'antd';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home';
import DataSet from '../pages/data_center/DataSet';
import DataPreview from '../pages/data_center/DataPreview';
import NotFound from '../NotFound';
const {Content} = Layout;

export default class NavMenu extends Component {

    render() {
        return (
            <Layout style={{padding: 5}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content>
                    <Switch>
                        <Route path='/app/home' component={Home}/>
                        <Route path='/app/dataCenter/dataPreview' component={DataSet}/>
                        <Route path='/app/dataCenter/dataSet' component={DataPreview}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Content>
            </Layout>
        )
    }
}