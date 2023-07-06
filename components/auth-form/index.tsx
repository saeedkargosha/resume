'use client'

import { login } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

const initial = { email: '', password: '' }

export default function AuthLogin() {
  const [formState, setFormState] = useState({ ...initial })
  const [error, setError] = useState('')

  const router = useRouter()
  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault()
      try {
        await login(formState)
        router.replace('/admin')
      } catch (e) {
        setError(`Could not`)
      } finally {
        setFormState({ ...initial })
      }
    },
    [formState, router]
  )
  return (
    <div>
      <div className='w-full'>
        <div className='text-center'>
          <h2 className='text-3xl mb-2'>{'Welcome Back'}</h2>
          <p className='tex-lg text-black/25'>
            {'Enter your credentials to access your account'}
          </p>
        </div>
        <form onSubmit={handleSubmit} className='py-10 w-full'>
          <div className='w-full'>
            <label htmlFor='email' className='label-input'>
              {'Email'}
            </label>
            <input
              type='email'
              id='email'
              className='input'
              placeholder='saeedkargosha@gmail.com'
              required
              value={formState.email}
              onChange={e =>
                setFormState(s => ({ ...s, email: e.target.value }))
              }
            />
          </div>
          <div className='w-full'>
            <label htmlFor='email' className='label-input'>
              {'Password'}
            </label>
            <input
              type='password'
              id='password'
              className='input'
              placeholder='password'
              required
              value={formState.password}
              onChange={e =>
                setFormState(s => ({ ...s, password: e.target.value }))
              }
            />
          </div>
          <button className='btn btn-primary' type='submit'>
            {'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}
