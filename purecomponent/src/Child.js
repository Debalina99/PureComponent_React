import React from 'react';

function Child(props) {
    console.log("Child componenet rendered!")
    return (
        <div>
            <h4>{props.fruit}</h4>
        </div>
    )
}
export default React.memo(Child);