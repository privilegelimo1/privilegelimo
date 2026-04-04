import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /admin/* routes (not the login page itself or auth API)
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin" || pathname === "/admin/";
  const isAuthApi = pathname === "/api/admin/auth";

  if (isAdminRoute && !isLoginPage && !isAuthApi) {
    const session = req.cookies.get("admin_session");
    if (session?.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
