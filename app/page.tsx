'use client';
import { Box, Heading, Input, Button } from "dracula-ui";

export default function Home() {
	function clickPress(event: any) {
		if (event.key == "Enter") {
			var query = event.target.value;
			console.log(query);
			// redirect to ?q=query
			window.location.href = "?q=" + query;
		}
	}
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<Box>
				<Heading size="2xl" color="purpleCyan">
					ddBang
				</Heading>
			</Box>
			<Box>
				<Input
					placeholder="Enter to search"
					color="white"
					m="sm"
					onKeyDown={(e) => clickPress(e)}
				/>
			</Box>
		</main>
	);
}
