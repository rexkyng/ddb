import "./globals.css";
import "dracula-ui/styles/dracula-ui.css";
// Supports weights 100-800
import "@fontsource-variable/jetbrains-mono";

export const metadata = {
	title: "ddBang",
	description: "ddBang lets you use DuckDuckGo for bang queries.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link type="application/opensearchdescription+xml" rel="search" href="/opensearch.xml" title="ddBang"/>
			</head>
			<body className="drac-bg-black">{children}</body>
		</html>
	);
}
