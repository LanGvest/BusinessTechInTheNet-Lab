import "../styles/global.css";
import {Route, Routes} from "react-router-dom";
import Index from "./index";
import Task1 from "./task1";
import Task2 from "./task2";
import Task3 from "./task3";
import Task4 from "./task4";
import Task5 from "./task5";

export default function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/task1" element={<Task1/>}/>
			<Route path="/task2" element={<Task2/>}/>
			<Route path="/task3" element={<Task3/>}/>
			<Route path="/task4" element={<Task4/>}/>
			<Route path="/task5" element={<Task5/>}/>
			<Route path="*" element={<Index/>}/>
		</Routes>
	);
}