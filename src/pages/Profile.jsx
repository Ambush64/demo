import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
	const { id } = useParams();
	const [data, getData] = useState([]);
	const url = `https://py.crewbella.com/user/api/profile/${id}`;
	const getInfo = async () => {
		const response = await fetch(url);

		getData([await response.json()]);
		// const users = await response.json();
		// 		console.log(users);
		// 		console.log(users.basic.fullname);
	};
	useEffect(() => {
		getInfo();
	}, []);

	return (
		<>
			{data.map((ele) => {
				return (
					<>
						<h1>{ele.basic.fullname}</h1>

						<div className="col-md-4 col-12">
							<div className="img-flex">
								<img
									src={ele.basic.image}
									id="profile"
									alt="profile"
								/>
							</div>

							<h1 id="fullname">
								Fullname: {ele.basic.fullname}
							</h1>
							<div className="row">
								<div className="col-12 d-flex mx-auto  justify-content-around">
									<p className="username ">
										@{ele.basic.username}
									</p>
									<p className="city ">
										city:{ele.locations[0].city}
									</p>
								</div>
								<div className="col-12 d-flex mx-auto  justify-content-around">
									<p id="followings" className="">
										{ele.basic.followings}
										<span> followers</span>
									</p>

									<p className="quick_bookings ">
										{ele.basic.quick_bookings}
										<span> quickbooks</span>
									</p>
								</div>
							</div>
							{/* <!-- add quickbook --> */}
							<button className="quickbook" id="quickbook">
								See Quickbook
							</button>

							<h4 id="title">
								{ele.professions.map((ind, ele) => {
									return (
										<>
											<span> #{ind.title}</span>
										</>
									);
								})}
							</h4>
							<div className="button">
								<button id="know-more">Know More</button>
							</div>
							<div className="row contact">
								<div className="d-flex col-6 text-center justify-content-center">
									<button className="follow">
										<i className="fas fa-user-plus"></i>
									</button>
								</div>
								<div className="col-6 d-flex text-center justify-content-center">
									<button className="follow">
										<i className="fab fa-telegram-plane"></i>
									</button>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
};

export default Profile;
