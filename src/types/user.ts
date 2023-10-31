export interface Menu {
  label: string
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
  menu: Menu[]
}
