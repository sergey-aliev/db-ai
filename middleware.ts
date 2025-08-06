import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/chat(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Allow public routes
  if (req.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    // Protect chat routes
    if (isProtectedRoute(req)) {
      if (!userId) {
        // return (await auth()).redirectToSignIn({ returnBackUrl: req.url });
        const signInUrl = new URL("/sign-in", req.url);
        signInUrl.searchParams.set("redirect_url", req.url);
        return NextResponse.redirect(signInUrl)
      }
      return NextResponse.next();
    } 

    // Allow all other routes
    return NextResponse.next();
  });

export const config = {
  mather: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Match all paths exept static files
        "/", // Match root
        "/(api|trpc)(.*)" // Match API routes 
    ]
};