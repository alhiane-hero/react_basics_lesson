import React, {Component} from 'react';
import axios from 'axios';

class Blog extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        console.log(this.props.match); // route params;
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            });
        });
    }

    render() {
        const users = this.state.users;
        return (
            <div className='Users'>
                {
                    users.map(user => {
                        return (
                            <div className='user' key={user.id}>
                                <p>Username: {user.username}</p>
                                <p>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Blog;