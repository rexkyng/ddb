import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as htmlparser2 from "htmlparser2";

export async function middleware(request: NextRequest) {
	const BASE_URL = "http://localhost:3000";
	var q = request.nextUrl.searchParams.get("q");
	const pathname = request.nextUrl.pathname;
	if (q === null) {
		switch (pathname) {
			case "/api":
				return NextResponse.redirect(BASE_URL + "/api/v1/help");
			case "/license":
				return NextResponse.redirect(
					"https://gitlab.com/timescam/ddb/-/raw/main/LICENSE"
				);
			case "/":
				return NextResponse.next();
			case "/config":
			case "/howto":
				return NextResponse.json({
					"message": "to be implemented",
				});
		}
	} else {
		console.log(pathname);
		switch (pathname) {
			case "/suggestions":
				var suggestionsXML = await fetch(
					"http://clients1.google.com/complete/search?hl=en&output=toolbar&q=" +
						q
				);
				var suggestionsText = await suggestionsXML.text();
				// // return xml
				// return new NextResponse(suggestionsText, {
				// 	headers: {
				// 		"content-type": "text/xml",
				// 	},
				// });
				// return json
				var suggestionsArray: Array<String> = [];
				var parser = new htmlparser2.Parser({
					onopentag: function (name, attribs) {
						if (name === "suggestion") {
							suggestionsArray.push(attribs.data);
						}
					},
				});
				parser.write(suggestionsText);
				parser.end();
				var suggestions = {
					query: q,
					suggestions: suggestionsArray,
				};
				return NextResponse.json(suggestions);
			case "/":
				if (q.startsWith("!")) {
					return NextResponse.redirect(
						"https://duckduckgo.com/?q=" + q
					);
				} else {
					return NextResponse.redirect(
						"https://bing.com/search?q=" + q
					);
				}
		}
	}
}
