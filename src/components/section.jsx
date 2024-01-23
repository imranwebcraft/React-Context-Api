import { useContext } from "react";
import { LevelContext } from "../context/LevelContext";

export default function Section({ children }) {
	const level = useContext(LevelContext);
	// level er value update hobe every render a. And seta store hobe initial value hisabe. Porer render a sei value e use hobe and seatr saathei 1 plus hobe
	return (
		<section className="section">
			<LevelContext.Provider value={level + 1}>
				{children}
			</LevelContext.Provider>
		</section>
	);
}
