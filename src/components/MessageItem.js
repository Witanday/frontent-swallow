import React from 'react';
import {Link} from 'react-router-dom'
import Moment from "react-moment";
import DefaultProfileImg from "../images/images.png"

const MessageItem =({date,profileImageUrl,text,username,removeMessage, isCorrectUser})=> {
   console.log(profileImageUrl)
   return(<div>
       <li className="list-group-item">
       <img src={profileImageUrl||DefaultProfileImg} alt={username} height="100" width="100" className="timeline-image" />
       <div className="message-area">
            <Link to="/">@{username} &nbsp;</Link>
            <span className="text-muted">
            <Moment className="text-muted" format="YYYY-MM-DD HH:mm" interval={30000}>
                {date}
            </Moment>
            </span>
            <p>{text}</p>
            {isCorrectUser && ( <a className="btn btn-danger" onClick={removeMessage}>Delete</a>)}
           
       </div>
       </li>
       
   </div>)
}

export default MessageItem;