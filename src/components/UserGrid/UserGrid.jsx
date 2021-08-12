import React from 'react'
import UserCard from '../UserCard/UserCard'
import "./styles.scss"
const UserGrid = (props) => {
 
    return (
        <div className="user-grid">
            {
                props.users.map(user =>
                    <UserCard user={user} key={user.id}/>
                )
            }
        </div>
    )
}

export default UserGrid
