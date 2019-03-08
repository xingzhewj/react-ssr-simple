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
import axios from 'axios';
import {addTodo, fetchData, FETCH_DATA} from '../../actions/home';
import {walker} from '../../actions/walker';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFetchData();
        this.props.toggletodo(30);
        this.props.walker({data: 99999});
    }

    getData() {
        axios.get('/list', {}).then(data => {
            console.log(data);
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Test/>
                <p>{this.props.todos.age}</p>
                <p>长度:{this.props.fetchData.list.length}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todo,
        test: state.walker,
        fetchData: state.fetchData
    }
};

const mapDispatchToProps = dispatch => ({
    toggletodo: id => dispatch(addTodo(id)),
    walker: data => dispatch(walker(data)),
    getFetchData: () => {
        dispatch(
            axios.get('/api/list', {})
                .then(res => {
                    return {
                        type: FETCH_DATA,
                        payload: res.data
                    };
                })
        );
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
