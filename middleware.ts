import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as htmlparser2 from "htmlparser2";

export async function middleware(request: NextRequest) {
	var q = request.nextUrl.searchParams.get("q");
	if (q === null) {
		return NextResponse.next();
	} else if (request.nextUrl.pathname.startsWith("/suggestions")) {
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
	} else if (q.startsWith("!")) {
		return NextResponse.redirect("https://duckduckgo.com/?q=" + q);
	} else {
		return NextResponse.redirect("https://bing.com/search?q=" + q);
	}
}
