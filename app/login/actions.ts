'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
  const password = formData.get('password') as string
  const redirectTo = formData.get('redirectTo') as string || '/strategy'

  const founderPassword = process.env.FOUNDER_PASSWORD || 'founder123'
  const guestPassword = process.env.GUEST_PASSWORD || 'guest123'

  let role = ''
  if (password === founderPassword) {
    role = 'founder'
  } else if (password === guestPassword) {
    role = 'guest'
  }

  if (role) {
    // Set a cookie that expires in 30 days
    const cookieStore = await cookies()
    cookieStore.set('strategy_session', role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })
    
    redirect(redirectTo)
  } else {
    return { error: 'Invalid password' }
  }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('strategy_session')
  redirect('/')
}
