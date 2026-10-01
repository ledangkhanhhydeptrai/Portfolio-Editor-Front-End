import { NextRequest, NextResponse } from "next/server";

// ============================================================
// ROUTES
// ============================================================

const protectedRoutes = ["/profile", "/account", "/dashboard"];

const authRoutes = ["/login", "/register"];

// ============================================================
// MIDDLEWARE
// ============================================================

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // HttpOnly cookie vẫn đọc được ở middleware
  const cookie = request.cookies.get("access_token");

  const accessToken = cookie ? cookie.value : undefined;

  // ==========================================================
  // CHECK ROUTE
  // ==========================================================

  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  const isAuthRoute = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  // ==========================================================
  // CHƯA LOGIN + VÀO PROTECTED ROUTE
  // ==========================================================

  if (isProtectedRoute && !accessToken) {
    const loginUrl = request.nextUrl.clone();

    loginUrl.pathname = "/login";

    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // ==========================================================
  // ĐÃ LOGIN + VÀO LOGIN / REGISTER
  // ==========================================================

  if (isAuthRoute && accessToken) {
    const homeUrl = request.nextUrl.clone();

    homeUrl.pathname = "/";
    homeUrl.search = "";

    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

// ============================================================
// MATCHER
// ============================================================

export const config = {
  matcher: [
    "/profile/:path*",
    "/account/:path*",
    "/dashboard/:path*",

    "/login",
    "/register"
  ]
};
