import React from 'react'
import  { connect } from  'react-redux';
import './Card.css';
import rock from '../../assets/rock.png';
import paper from '../../assets/paper.png';
import scissors from '../../assets/scissors.png';
function Card({dispatch}) {
    // const matchForPc = (person) => {
    //     const items = ["r","p","s"];
    //     let computer = items[Math.floor(Math.random() * items.length)];
    //     if(person === computer){
    //         alert("Scoreless")
    //     }else if(person === "r") {
    //         if(computer === "s") {
    //             alert("Person Win")
    //         }else {
    //             alert("Computer Win")
    //         }
    //     }else if(person === "s") {
    //         if(computer === "p") {
    //             alert("Person Win")
    //         }else {
    //             alert("Computer Win")
    //         }
    //     }else if(person === "p") {
    //         if(computer === "r") {
    //             alert("Person Win")
    //         }else {
    //             alert("Computer Win")
    //         }
    //     }
    // }
    return (
        <div className="container">
            <div className="imageContainer" onClick={() => dispatch({ type: 'NEWMATCH', value:"r" })}>
                <img src={rock} />
            </div>
           <div className="imageContainer" onClick={() => dispatch({ type: 'NEWMATCH', value:"p" })}>
                <img src={paper} />
           </div>
           <div className="imageContainer" onClick={() => dispatch({ type: 'NEWMATCH', value:"s" })}>
                <img src={scissors} />
           </div>
        </div>
    )
}


export default connect()(Card)
