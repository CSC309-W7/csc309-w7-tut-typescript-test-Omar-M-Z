import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: 24 },
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
    return <User[]>apiResponse;
}

export function formatAges(users: User[]): Number[] {
  return users.map((u) => u.age);
}
