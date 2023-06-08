"use client";
import { Box, Heading, Input, Card, List } from "dracula-ui";
import Footer from "./components/Footer";

export default function Home() {
	function getQuery(event: any) {
		var key = event.key;
		// TODO: add support for arrow keys up and down to select suggestions
		if (key == "ArrowUp") {
		} else if (key == "ArrowDown") {
		} else if (key == "Escape") {
		} else if (key != "ArrowLeft" && key != "ArrowRight") {
			var query = event.target.value;
			if (key == "Enter") {
				// redirect to ?q=query
				window.location.href = "?q=" + query;
			} else {
				// set a timeout, if no new keypresses after 170ms, get suggestions
				setTimeout(() => {
					if (query == event.target.value) {
						getSuggestions(query);
					}
				}, 170);
			}
		}
	}

	async function getSuggestions(query: string) {
		const suggestionsElement = document.getElementById("suggestions");
		const suggestionsCard = document.getElementById("suggestionsCard");
		if (query.startsWith("!") || query == "") {
			suggestionsCard?.classList.add("hidden");
			return;
		} else {
			// get suggestions from /suggestions?q=query
			var suggestions = await fetch(
				new URL("/suggestions?q=" + query, window.location.href)
			);
			var suggestionsResult = await suggestions.json();
		}
		if (suggestionsElement && suggestionsResult.suggestions.length > 0) {
			suggestionsElement.innerHTML = "";
			suggestionsResult.suggestions.forEach((suggestion: any) => {
				var li = document.createElement("li");
				li.className = "drac-text drac-text-white";
				li.innerHTML = `<a href="?q=${suggestion}">${suggestion}</a>`;

				suggestionsElement?.appendChild(li);
			});
			suggestionsCard?.classList.remove("hidden");
		}
	}

	return (
		// <main className="flex min-h-screen flex-col items-center p-24">
		<Box className="flex flex-col justify-between h-screen">
			<Box className="items-center flex flex-col" p="lg">
				<Box>
					<Heading size="2xl" color="purpleCyan" pt="lg">
						ddBang
					</Heading>
				</Box>
				<Box style={{ width: "30vw", minWidth: "350px" }}>
					<Box p="xs">
						<Input
							placeholder="Enter to search"
							id="searchField"
							color="white"
							onKeyUp={(e) => getQuery(e)}
							borderSize="sm"
							autoFocus
							autoComplete="off"
						/>
					</Box>
					<Box p="xs">
						<Card
							p="sm"
							variant="subtle"
							color="black"
							id="suggestionsCard"
							className="hidden drac-scrollbar-grey"
							style={{ overflowY: "scroll", maxHeight: "20vh" }}
						>
							<List id="suggestions"></List>
						</Card>
					</Box>
				</Box>
			</Box>
			<Footer />
		</Box>
		// </main>
	);
}
