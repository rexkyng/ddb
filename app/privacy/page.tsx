import { Heading, Paragraph, Box } from "dracula-ui";
import HR from "../components/HR";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Box
				mb="sm"
				className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"
			>
				<Box mb="sm">
					<Heading size="2xl">ddBang</Heading>
				</Box>
				<HR />
				<Box mb="sm">
					<Heading size="lg">Privacy Policy</Heading>
				</Box>
				<Box mb="sm">
					<Paragraph>
						It's quite simple. ddBang doesn't track any queries
						submitted whatsoever, It simply redirects you to
						DuckDuckGo or the search engine of your choice (defaults
						to Bing) depending on whether your search contains a
						!bang or not.
					</Paragraph>
					<Paragraph>
						The source code for this is available{" "}
						<a href="https://github.com/timescam/duckduckbing/blob/master/app.js#L22">
							here on GitHub
						</a>{" "}
						so you're free to take a look or even host your own
						version if you'd like.
					</Paragraph>
				</Box>
			</Box>
		</main>
	);
}
