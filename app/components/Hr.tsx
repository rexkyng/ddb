import { Box } from "dracula-ui";
import React from "react";

const { colors } = require("dracula-ui");

const Hr = (props: any) => {
	// check if props.color is in the set of colors, if not, use default "animated"
	const color = colors[props.color] ? props.color : "animated";
	return <Box color={color} my="xs" style={{ height: "2px", width: "100%" }}></Box>;
};
export default Hr;
