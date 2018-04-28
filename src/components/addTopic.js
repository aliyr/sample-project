import React from 'react';

const AddTopic = (props) => {
    return (
        <div>{props.match.params.addTopic}</div>
    )
};

export default AddTopic;