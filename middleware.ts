import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
const PUBLIC_FILE = /\.(.*)$/

const verifyJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  )

  return payload
}

export default async function middleware(req: any) {
  const { pathname } = req.nextUrl
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/login') ||
    pathname === '/' ||
    pathname.startsWith('/skill') ||
    pathname.startsWith('/education') ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/experience') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const jwt = req.cookies.get(process.env.COOKIE_NAME)

  if (!jwt) {
    req.nextUrl.pathname = '/login'
    return NextResponse.redirect(req.nextUrl)
  }

  try {
    await verifyJWT(jwt.value)
    return NextResponse.next()
  } catch (e) {
    console.error(e)
    req.nextUrl.pathname = '/login'
    return NextResponse.redirect(req.nextUrl)
  }
}
