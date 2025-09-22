export interface UserInfo {
  permissions: string[]
  roles: string[]
  user: {
    firstNameCn: string
    lastNameCn: string
    positionName: string
  }
}
