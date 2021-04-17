import React from 'react'
import { useSelector } from 'react-redux';
import MatchListsItem from './matchListItem/MatchListsItem';
import './MatchList.css';
function MatchList() {
    const state = useSelector(state => state.macthHistory)
    console.log(state)
    return (
        <div className="matchListContainer">
            {state.map((item,index)=><MatchListsItem key={index} computer={item.computer} person={item.person} message={item.message} />)}
        </div>
    )
}
export default MatchList
