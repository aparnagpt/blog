import React, {Component} from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import BlogHome from "./container/BlogHome";
import CreatePost from "./components/Post/CreatePost";
import Post from "./components/Post/Post";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>My Blog</h1>
                <Switch>
                    <Route path="/create" component={CreatePost}/>
                    <Route path="/post/:id" component={Post}/>
                    <Route path="/" exact component={BlogHome}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
