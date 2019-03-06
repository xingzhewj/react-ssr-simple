/**
 * @file 布局组件
 * @Author wangjie19
 * @Date 2019-03-02 16:55:12
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-04 18:33:22
 */

import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routeConfig from '../../router';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body">
                <Header></Header>
                <div>
                    <Router>
                        <div>
                            {
                                routeConfig.map((route, i) => {
                                    return <Route key={i} {...route}></Route>
                                })
                            }
                        </div>
                    </Router>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Layout;
