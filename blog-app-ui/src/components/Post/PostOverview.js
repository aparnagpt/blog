import React from 'react';

const postOverview = (props) => {
    return (
        <div className={"overview"} id={props.id}>
            <div className={"title"}>{props.title}</div>
            <div className={"props"}>
                <div>{props.date}</div>
                <div className={"actions"}>
                    <button onClick={() => props.viewPost(props.id)}>View</button>
                    <button className={"delete"} onClick={() => props.deletePost(props.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default postOverview;