import React from "react";
import "../style.css"

export default function DestinationCard(props){
    return (
        <div className="wrapper d-flex mt-2">
            <div className="image-cont">
                <img src="https://source.unsplash.com/WLxQvbMyfas"/>
            </div>
            <div className="d-flex flex-column ml-3 details-cont">
                <div className="d-flex flex-row align-items-center location"> 
                    <img src={props.data.imageUrl} alt="pin for the place" className="mr-2"/>
                    <p className="mr-3">{props.data.location}</p>
                    <p className="googleMap"><u>View in google maps</u></p>
                </div>

                <p className="dest-name d-flex">{props.data.title}</p>

                <div className="stay-duration_cont d-flex">
                    <p className="start mr-2"><b>{props.data.startDate}</b></p>
                    <b className="mr-2 ">-</b>
                    <p className="end"><b>{props.data.endDate}</b></p>
                </div>

                <p className="description">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                                            specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
        </div>
    )
}