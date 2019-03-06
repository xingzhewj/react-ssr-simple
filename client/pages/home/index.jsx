/**
 * @file 首页
 * @Author wangjie19
 * @Date 2019-03-04 17:36:53
 * @Last Modified by: wangjie19
 * @Last Modified time: 2019-03-06 17:22:03
 */

import React, {Component} from 'react';
import Test from 'Components/test';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/home';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.toggletodo(30);
            this.forceUpdate()
        }, 3000);
    }

    render() {
        return (
            <div>
                <Test/>
                <p>{this.props.todos.age}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todo
});

const mapDispatchToProps = dispatch => ({
    toggletodo: id => dispatch(addTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
