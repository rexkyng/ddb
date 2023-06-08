import { Heading, Paragraph, Box, Text } from "dracula-ui";
import HR from "../../../components/HR";
import Footer from "../../../components/Footer";

export default function Home() {
	return (
		<Box className="flex flex-col justify-between h-screen" pt="lg">
			<Box className="" p="lg">
				<Box>
					<Heading size="xl">
						ddBang APIs <Text size="lg">(-1)</Text>
					</Heading>
				</Box>
				<HR />
				<Box>
					<Heading size="lg">BASE_URL</Heading>
					<code>https://ddbang.vercel.app/api/v1</code>
				</Box>
				<Box pt="sm">
					<Paragraph>TODO...</Paragraph>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
}
