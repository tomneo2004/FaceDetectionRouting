import React from "react";
import "./ImageLinkForm.css";


const ImageLinkForm = ({onInputChange, onSubmit})=>{

	return(

		<div>
			<p className="tc f3">{"Detect face in your picture"}</p>
			<div className="center">
				<div className="form pa4 br3 shadow-2 center">
					<input onChange={onInputChange} className="w-70 f4 pa2 tc" type="text" />
					<button onClick={onSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;