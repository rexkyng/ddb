import { Heading, Paragraph, Box, Text } from "dracula-ui";
import Hr from "@/components/Hr";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<Box className="flex flex-col justify-between h-screen" pt="lg">
			<Box className="" p="lg">
				<Box>
					<Heading size="xl">
						ddBang APIs <Text size="lg">(-1)</Text>
					</Heading>
				</Box>
				<Hr />
				<Box>
					<Heading size="lg" mb="md">BASE_URL</Heading>
					<code id="baseUrl">
						<a href="https://ddbang.vercel.app/api/v1">https://ddbang.vercel.app/api/v1</a>
					</code>
				</Box>
				<Box pt="sm">
					<Paragraph>TODO...</Paragraph>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
}
