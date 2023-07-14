import React from 'react';
import PropTypes from 'prop-types'
function Comments({comments}) {
    return (
        <div>
           <div>
            <span>{comments.user.name}</span>
           </div>
           <div>
            <p>{comments.content}</p>
           </div>
        </div>
    );
}


Comments.propTypes ={
    comments : PropTypes.object.isRequired
}
export default Comments;