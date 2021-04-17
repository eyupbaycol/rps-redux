import React from 'react';
import './MatchListsItem.css';
function MatchListsItem(props) {
    return (
        <div className="matchContainer">
            <h3>{props.computer}</h3>
            <h2>{props.message}</h2>
            <h3>{props.person}</h3>
        </div>
    )
}

export default MatchListsItem
