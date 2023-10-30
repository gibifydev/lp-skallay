export interface Link {
  icon: string
  label: string
  value: string
}

export interface User {
  id: string
  name: string
  metadata: {
    title: string
    description: string
  }
  bio: string
  image: string
  username: string
  color: string
  links: Link[]
}
