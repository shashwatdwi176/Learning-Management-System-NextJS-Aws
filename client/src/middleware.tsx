import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isStudentRoute = createRouteMatcher(["/user/(.*)"]);
const isTeacherRoute = createRouteMatcher(["/teacher/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims } = await auth();

  console.log("Session Claims:", sessionClaims); // Log full session claims
  console.log("Public Metadata:", sessionClaims?.publicMetadata);

  // Ensure userType is fetched correctly
  const userRole =
    (sessionClaims?.publicMetadata as { userType?: "student" | "teacher" })
      ?.userType || "student";

  console.log("User Role:", userRole);

  // if (isStudentRoute(req) && userRole !== "student") {
  //   return NextResponse.redirect(new URL("/teacher/courses", req.url));
  // }

  // if (isTeacherRoute(req) && userRole !== "teacher") {
  //   return NextResponse.redirect(new URL("/user/courses", req.url));
  // }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
