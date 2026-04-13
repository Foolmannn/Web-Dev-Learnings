import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  return NextResponse.json({message: "Hello from the about page "})
  return NextResponse.redirect(new URL('/home', request.url)) //this is the page that will be automatically redirected when the requestion is sent in the below path 
}
 
export const config = {
  matcher: '/about/:path*',
}