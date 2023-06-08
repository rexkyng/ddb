"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ApiIcon from "@mui/icons-material/Api";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DataObjectIcon from "@mui/icons-material/DataObject";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const Footer = (props: any) => {
	return (
		<footer className="drac-bg-black-secondary text-center p-1 drac-text-white">
			<a href="/" className="drac-text-purple">
				<HomeIcon fontSize="small" />
			</a>
			{" | "}
			<a href="/api" className="drac-text-green">
				<ApiIcon fontSize="small" />
			</a>
			{" | "}
			<a href="/privacy" className="drac-text-yellow">
				<VisibilityIcon fontSize="small" />
			</a>
			{" | "}
			<a href="/license" className="drac-text-red">
				<HistoryEduIcon fontSize="small" />
			</a>
			{" | "}
			<a href="" className="drac-text-cyan">
				<DataObjectIcon fontSize="small" />
			</a>
		</footer>
	);
};
export default Footer;
