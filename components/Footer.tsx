"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from '@mui/icons-material/Settings';
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
			<a href="/config" className="drac-text-yellow">
				<SettingsIcon fontSize="small" />
			</a>
			{" | "}
			<a href="/api" className="drac-text-green">
				<ApiIcon fontSize="small" />
			</a>
			{" | "}
			<a href="/privacy" className="drac-text-red">
				<VisibilityIcon fontSize="small" />
			</a>
			{" | "}
			<a href="/license" className="drac-text-orange" target="_blank">
				<HistoryEduIcon fontSize="small" />
			</a>
			{" | "}
			<a href="https://gitlab.com/timescam/ddb" className="drac-text-cyan" target="_blank">
				<DataObjectIcon fontSize="small" />
			</a>
		</footer>
	);
};
export default Footer;
