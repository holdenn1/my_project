import React, {Component, Fragment} from "react";

class Messages extends Component{
    render() {
        const {message} = this.props.message;
        return(
            <Fragment>
                <div>
                    {message}
                </div>
            </Fragment>
        )
    }
}

export default Messages;
