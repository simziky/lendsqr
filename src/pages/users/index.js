import React, { useEffect } from 'react';
import usertotal from "../../images/icons/usert.svg"
import useractive from "../../images/icons/useractive.svg"
import userloan from "../../images/icons/userloan.svg"
import usersaving from "../../images/icons/usersaving.svg"
import "./user.scss"
const User = () => {
    useEffect(() => {
        document.title = 'My Books';
    });

    const cardDetail = [
        {id:1, title:"Users", total:2453, image: usertotal},
        {id:2, title:"Active Users", total:2453, image: useractive},
        {id:3, title:"Users With Loans", total:12453, image: userloan},
        {id:4, title:"Users With Savings", total:102453, image: usersaving}

    ];

    const cardDetailContent = cardDetail.map((cardDetail) =>
            <div key={cardDetail.id}  className='card-detail'>
                <img src={cardDetail.image} alt="icon" />
                <h3 className='card-title'>{cardDetail.title}</h3>
                <h4>{cardDetail.total}</h4>
            </div>
    );

    return (
        <div className="user-home">
            <h4>{document.title}</h4>
            <div className='cards-main'>
                
                    {cardDetailContent}
                
            </div>
        </div>
    )
}
export default User