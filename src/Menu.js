import React, { useState, useEffect } from "react";
import App from "./App";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	Navigate,
	NavLink,
	useParams,
} from "react-router-dom";

const Menu = () => {
	const [value, getValue] = useState();
	const [state, getState] = useState();
	const [search, setSearch] = useState("");
	const [result, getResult] = useState("");
	const sResult = `https://py.crewbella.com/user/api/profile/${value}`;

	useEffect(() => {
		const fetchapi = async () => {
			const response = await fetch(sResult);
			const resJson = await response.json();
			console.log(resJson.basic);
			getResult(resJson.basic);
		};
		fetchapi();
	}, [value]);

	const fetchdata = (ele) => {
		const store = ele.target.value;
		console.log(store);
		getValue(store);
	};

	return (
		<>
			<div className="search">
				<h1>Search For id</h1>

				<input
					type="text"
					placeholder="search name"
					onChange={fetchdata}
					value={value}
				/>
				<NavLink end to={`pages/${value}`}>
					Fetch Api
				</NavLink>
				{!value ? (
					<div>
						<p>No data found</p>
					</div>
				) : (
					<div className="result">
						<p>{result.fullname}</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Menu;
