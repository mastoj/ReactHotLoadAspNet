import React from 'react';
import Comment from './Comment';

export default React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );});
        return (
            <div className="commentList">
                This rocks, don't you think?! {commentNodes}
            </div>
        );
}});