import React from 'react';
import PropTypes from 'prop-types'
function Comments({comments}) {
    return (
        <div>
           <div>
            <h4 style={commentUser}>{comments.user.name}</h4>
           </div>
           <div>
            <p>{comments.content}</p>
           </div>
        </div>
    );
}

const commentUser = {
    textTransform : 'capitalize',
 
}
Comments.propTypes ={
    comments : PropTypes.object.isRequired
}
export default Comments;