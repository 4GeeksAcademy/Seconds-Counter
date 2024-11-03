import React from "react";

//include images into your bundle
import ContadorSegundos from "./secondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<ContadorSegundos/>
		</div>
	);
};

export default Home;