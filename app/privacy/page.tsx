import { Heading, Paragraph, Box, Text } from "dracula-ui";
import Hr from "../../components/Hr";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<Box className="flex flex-col justify-between h-screen" pt="lg">
			<Box className="" p="lg">
				<Box>
					<Heading size="xl">
						ddBang <Text size="lg">(-1)</Text>
					</Heading>
				</Box>
				<Hr />
				<Box>
					<Heading size="lg">Privacy Policy</Heading>
				</Box>
				<Box pt="sm">
					<Paragraph>
						It's quite simple. ddBang doesn't track any queries
						submitted whatsoever, It simply redirects you to
						DuckDuckGo or the search engine of your choice (defaults
						to Bing & uses Google for suggestions) depending on
						whether your search contains a !bang or not.
					</Paragraph>
					<Paragraph pt="sm">
						The source code for this is available
						<Text color="cyan">
							{" "}
							<a href="https://github.com/timescam/duckduckbing/blob/master/app.js#L22">
								here on GitHub
							</a>
						</Text>
						. So you're free to take a look or even host your own
						version if you'd like.
					</Paragraph>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
}
