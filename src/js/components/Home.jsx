import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");


	return (
		<div className="container-fluid d-flex justify-content-center align-items-center vh-100">
			<div className="bg-dark p-3 rounded-4">
				<div className="bg-danger rounded-circle mb-3"
				 onClick={() => setColor("red")}
				  style={{ width: "80px", height: "80px", opacity: color === "red" ? 1 : 0.25 }}>

				  </div>
				<div className="bg-warning rounded-circle mb-3"
				 onClick={() => setColor("yellow")} 
				 style={{ width: "80px", height: "80px", opacity: color === "yellow" ? 1 : 0.25 }}>

				 </div>
				<div className="bg-success rounded-circle"
				 onClick={() => setColor("green")}
				  style={{ width: "80px", height: "80px", opacity: color === "green" ? 1 : 0.25 }}>

				  </div>
			</div>
			<button className="btn btn-success m-2"
			onClick={()=>
				setColor(
					color === "red"
					? "yellow"
					: color === "yellow"
					? "green" 
					: "red"
				)
				
			}
			> Cambiar Color </button>
		</div>
	);
};

export default Home;