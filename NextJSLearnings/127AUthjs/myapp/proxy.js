// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   return NextResponse.json({message: "Hello from the about page "})
//   return NextResponse.redirect(new URL('/home', request.url)) //this is the page that will be automatically redirected when the requestion is sent in the below path 
// }
 
// export const config = {
//   matcher: '/about/:path*',
// }
//read more from the https://nextjs.org/docs/app/api-reference/file-conventions/proxy#why-the-change

//Next use with conditional 

import { NextResponse } from 'next/server'
 
export function proxy(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
  // here the rewrite does not change the url but rewrite the content from the new url 
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard/user', request.url))
  }
}