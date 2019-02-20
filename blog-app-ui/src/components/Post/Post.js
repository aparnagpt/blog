import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post: {}
    };

    componentWillMount() {
        axios.get("/api/blogs/" + this.props.match.params.id).then(response => {
            this.setState({post: response.data})
        })
    };

    homeClickHandler = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <div className={"post"}>
                <div className={"title"}>{this.state.post.title}</div>
                <div>{this.state.post.date}</div>
                <hr/>
                <p className={"text"}>{this.state.post.text}</p>
                <div className={"actions"}>
                    <button onClick={this.homeClickHandler}>Home</button>
                </div>
            </div>
        )
    }
}

export default Post;
