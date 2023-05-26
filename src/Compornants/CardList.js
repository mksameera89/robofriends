import React from "react";
import Card from "./Card";


const CardList = ({robots}) => {

    const cardComponants = robots.map((robo, i) => {
        return <Card key={i}  id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        
    })

    return (
        <div>
            {cardComponants}
        </div>
    )
}



export default CardList;