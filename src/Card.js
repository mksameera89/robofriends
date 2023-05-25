import React from "react";

const Card = ({id, name, email}) => {
    return (
        
        <div className="bg-light-green dib br3 pa3 ma2 tc  grow bw2 shadow-5 ">
            <img alt = "robot" src={`https://robohash.org/${id}`} width={200}/>
            <div>
                <h6>{name}</h6>
                <h6>{email}</h6>
            </div>
        </div>
        
        
    )
}

export default Card;