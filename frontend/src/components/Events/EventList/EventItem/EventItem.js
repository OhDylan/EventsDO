import React from "react";

import "./EventItem.css";

const eventItem = props =>(
    <li key={props._id} className="events_list-item">
        <div>
            <h2>{props.title}</h2>
            <h3>$ {props.price} - {new Date(props.date).toLocaleDateString()}</h3>
        </div>
        <div>
            {props.userId === props.creatorId ? (
            <p>You are the owner of this event</p>
            ): (
                <button className="btn" onClick={props.onDetail.bind(this, props.eventId)}>
                    View Details
                </button>
            )}
            
        </div>
    </li>
);

export default eventItem;