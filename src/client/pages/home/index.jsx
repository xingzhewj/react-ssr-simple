import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    updateSex() {
        this.props.aa({
            type: 'UPDATE_SEX',
            payload: {
                sex: 'woman666'
            }
        });
    }

    render() {
        return (
            <div>
                <p>home</p>
                <p>{this.props.sex}</p>
                <button onClick={() => this.updateSex()}>切换性别</button>
            </div>
        );
    }
}

const mapStateToProps = ({home}, ownProps) => {
    return {
        sex: home.sex
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        aa: (action) => {
            dispatch(action)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
