import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
	const { id } = useParams();
	const [data, getData] = useState([]);
	const url = `https://py.crewbella.com/user/api/profile/${id}`;
	const getInfo = async () => {
		const response = await fetch(url);
		const users = await response.json();
		const log = users.client_postings;
		getData(log);
		// console.log(log);
	};
	useEffect(() => {
		getInfo();
	}, []);

	return (
		<>
			<div className="col-md-4 col-12">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarScroll"
							aria-controls="navbarScroll"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarScroll"
						>
							<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll  ">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="https://www.google.com"
									>
										Top
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="https://www.google.com"
									>
										Portfolio
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="https://www.google.com"
									>
										Client Posting
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="https://www.google.com"
									>
										Link
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="row">
					{data.map((ele, id) => {
						return (
							<>
								<div className="col-12">
									<div className="card">
										<div className="card-body">
											{ele.budget === null ? (
												<h5 className="card-title">
													Budget:null
												</h5>
											) : (
												<h5 className="card-title">
													Budget:{ele.budget}
												</h5>
											)}
											<p className="card-text">
												Description:{ele.description}
											</p>

											<p>Experience:{ele.experience}</p>
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Details;
