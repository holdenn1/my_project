import React, {Component, Fragment} from 'react';


class Users extends Component {

    render() {
        const {name} = this.props.user;
        return(<Fragment><div>{name}</div></Fragment>);
    }
}


export default Users;
