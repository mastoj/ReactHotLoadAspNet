import React from 'react';
import marked from 'marked';

export default React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },
    render: function() {
        return (
          <div className="comment">
            <h2 className="comment-author">
              Author name : {this.props.author}
            </h2>
            <div className="comment-text">
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        </div>
      );
    }
});
