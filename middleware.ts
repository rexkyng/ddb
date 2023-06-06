import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	if (request.nextUrl.searchParams.get("q") === null) {
		return NextResponse.next();
	} else if (request.nextUrl.searchParams.get("q")?.startsWith("!")) {
		return NextResponse.redirect(
			"https://duckduckgo.com/?q=" + request.nextUrl.searchParams.get("q")
		);
	} else {
		return NextResponse.redirect(
			"https://google.com/search?q=" +
				request.nextUrl.searchParams.get("q")
		);
	}
}
