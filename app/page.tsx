"use client";
import { Box, Heading, Input, Card, Button, List } from "dracula-ui";

export default function Home() {
	function getQuery(event: any) {
		var key = event.key;
		if (key == "ArrowUp") {
			// emulate shift keypress
			var searchField = document.getElementById("searchField");
			searchField?.focus();
			// searchField?.setSelectionRange(0, query.length);
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
		<Box className="items-center flex flex-col" p="lg" m="lg">
			<Box>
				<Heading size="2xl" color="purpleCyan">
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
		// </main>
	);
}
