import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect /strategy routes
  if (request.nextUrl.pathname.startsWith('/strategy')) {
    const session = request.cookies.get('strategy_session');
    
    if (!session) {
      // Redirect to login if no session cookie exists
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/strategy/:path*'],
};
