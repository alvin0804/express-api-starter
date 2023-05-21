
export enum UserRoleTypes {
  Entrepreneur = 'Entrepreneur',
  Partner = 'Partner'
}

export type UserRoleType = keyof typeof UserRoleTypes;
