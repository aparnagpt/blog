import React, {Component} from 'react';
import axios from 'axios';
import Link from "react-router-dom/es/Link";
import PostOverview from "../components/Post/PostOverview";

class BlogHome extends Component {
    state = {
        posts: []
    };

    componentWillMount() {
        axios.get("/api/blogs").then(response => {
            this.setState({posts: response.data})
        })
    };

    showPostDetailHandler = id => {
        this.props.history.push("/post/" + id);
    };

    deletePostHandler = id => {
        axios.delete("/api/blogs/" + id).then(() => {
            const posts = this.state.posts.filter(post => post.id !== id);
            this.setState({posts: posts});
        })
    };

    render() {
        const posts = this.state.posts.map(blog =>
            <PostOverview key={blog.id}
                          id={blog.id}
                          title={blog.title}
                          date={blog.date}
                          viewPost={this.showPostDetailHandler}
                          deletePost={this.deletePostHandler}
            />);

        return (
            <div>
                <Link to="/create">
                    <button className={"create"}>Add New Post</button>
                </Link>
                {posts}
            </div>
        )
    }
}

export default BlogHome;