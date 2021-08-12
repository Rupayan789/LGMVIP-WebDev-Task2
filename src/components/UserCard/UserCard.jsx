import React from 'react'
import "./styles.scss"
const UserCard = (props) => {
    
    return (
        <div className="user-card-container">
            <div className="user-card">
                <div className="user-card-image">
                    <img src={props.user.avatar} alt="img" />
                </div>
                <div className="user-card-body">
                    <div className="user-card-body-name">
                        {props.user.first_name} {props.user.last_name}
                    </div>
                    <div className="user-card-body-email">
                        {props.user.email}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default UserCard
