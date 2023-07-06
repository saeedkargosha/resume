// TODO: fix types

const fetcher = async ({ url, method, body, json = true }: any) => {
  try {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    if (!res.ok) {
      throw new Error('API Error')
    }
    if (json) {
      const data = await res.json()
      return data
    }
  } catch (e) {
    console.log(e, 'e')
  }
}

export const register = async (user: any) => {
  return fetcher({
    url: '/api/register',
    method: 'POST',
    body: user,
    json: false,
  })
}

export const login = async (user: any) => {
  return fetcher({
    url: '/api/login',
    method: 'POST',
    body: user,
    json: false,
  })
}

export const createNewExperince = name => {
  return fetcher({
    url: '/api/experince',
    method: 'POST',
    body: { name },
  })
}
