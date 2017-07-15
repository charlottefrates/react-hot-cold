import React from 'react';

export default function Start(props) {
    return (

        <div className="mainGame">
            <h1> YAY Game </h1>
            <button onClick={props.onClick}> Go back </button>
        </div>

    );
}
