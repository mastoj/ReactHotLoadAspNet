import './app.less';
import CommentBox from './modules/comment/CommentBox';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000} />,
    document.getElementById('content')
);
