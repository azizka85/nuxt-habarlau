import User from "./User"

export interface PageIndexData {
  users: User[]
}

export interface PageIndexMethods {
  refresh: () => void
}

export interface PageIndexComputed {
  usersCount: number
}

