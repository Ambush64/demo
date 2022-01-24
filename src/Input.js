import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Menu from "./Menu";

const Input = () => {
	return (
		<>
			<div>
				<Menu />
				<Routes>
					<Route path="/pages/:id" element={<App />} />
				</Routes>
			</div>
		</>
	);
};

export default Input;
