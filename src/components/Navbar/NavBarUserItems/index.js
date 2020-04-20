import React, {Component} from "react";
import styles from './NavBarUserItems.module.scss'
import {loadJson} from "../../../loadJson";


class Items  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            isFetching: true,
            error: null
        }
    }

    componentDidMount() {
        this.setState({
            isFetching:true
        })

        loadJson('./peopleItems.json')
            .then(data => {
                this.setState({
                    people:data,
                    isFetching:false,
                })
            })
            .catch(err => {
                this.setState({
                    error:err,
                    isFetching: false
                })
        })
    }

    renderUserItems = () => {

        const {people} = this.state;
        return people.map(user => (
            <div>
                <img className={styles.photo} src={user.src} alt=""/>
                <ul>
                    <li className={styles.name} key={user.id}>
                        {user.name}
                    </li>
                </ul>
            </div>
        ))
    };

    render() {
        return(
            <ul className={styles.list}>
                {this.renderUserItems()}
            </ul>
        )
    }
}

export default Items;
