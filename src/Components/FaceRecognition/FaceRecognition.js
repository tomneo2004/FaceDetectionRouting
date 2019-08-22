import React from "react";
import "./FaceRecognition.css";


const FaceRecognition = ({imageURL, boundingBox, detectingFace})=>{

	return(

		<div className="center ma">
			<div className="absolute mt2">
				{
					detectingFace?
					<h1>Detecting face please wait...</h1>
					:
					<div></div>
				}
				{
					imageURL !== "" ?
					<img id="imageBox" alt="FaceRecognition" src={imageURL} width="500px" height="auto"/>
					:
					<div></div>
				}
				<div className="bounding-box" style={{left:boundingBox.leftCol, top:boundingBox.topRow, right:boundingBox.rightCol, bottom:boundingBox.bottomRow}}>
				</div>
				
			</div>
		</div>
	);
}

export default FaceRecognition;