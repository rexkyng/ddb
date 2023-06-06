import "./globals.css";
import "dracula-ui/styles/dracula-ui.css";
// Supports weights 100-800
import "@fontsource-variable/jetbrains-mono";

export const metadata = {
	title: "DuckDuckBing",
	description: "DuckDuckBing lets you use DuckDuckGo for bang queries and Bing for everything else, so you get the best of both worlds.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="drac-bg-black">{children}</body>
		</html>
	);
}
