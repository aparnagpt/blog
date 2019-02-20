import React, {Component} from 'react';
import axios from "axios";

class CreatePost extends Component {
    state = {
        post: {
            title: null,
            text: null
        },
        valid: false
    };

    valueChangeHandler = (event) => {
        const post = this.state.post;
        post[event.target.name] = event.target.value;
        const valid = post.title && post.title.length > 0 && post.text && post.text.length > 0;
        this.setState({post: post, valid: valid});
    };

    savePostHandler = () => {
        axios.post("/api/blogs", this.state.post).then(() => {
            this.props.history.push("/");
        })
    };

    cancelPostHandler = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <div className={"create"}>
                <div>Title</div>
                <input name="title" type="text" onChange={this.valueChangeHandler}/>
                <div className={"label"}>Text</div>
                <textarea name="text" onChange={this.valueChangeHandler}/>
                <div className={"actions"}>
                    <button className={"delete"} onClick={this.cancelPostHandler}>Cancel</button>
                    <button disabled={!this.state.valid} className={"create"} onClick={this.savePostHandler}>Save Post</button>
                </div>
            </div>
        )
    }
}

export default CreatePost;