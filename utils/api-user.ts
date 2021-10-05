export function createUser(name: string, email: string, password: string, photo: string) {
  return fetch('/api/auth/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, email, password, photo
    })
  })
}

export function allUsers() {
  return fetch('/api/auth/user/list')
}
