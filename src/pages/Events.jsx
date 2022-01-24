import React, { useState, useEffect } from "react";

const Events = () => {
	const [data, getData] = useState([]);
	const url = "https://py.crewbella.com/user/api/profile/chiragbalani";
	const getInfo = async () => {
		const response = await fetch(url);
		const users = await response.json();
		const log = users.events;
		getData(log);
		console.log(log);
	};
	useEffect(() => {
		getInfo();
	}, []);
	return (
		<>
			<div className="col-md-4 col-12">
				<h1>Events</h1>
				<div className="row">
					{data.map((ele, ind) => {
						return (
							<>
								<div className="col-4" key={ind}>
									<img src={ele.thumbnail} alt=".." />
									<br />
									<h3>{ele.theme}</h3>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Events;
