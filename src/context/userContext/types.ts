export type User = {
  name: string;
  email: string;
};

export type UserContextValue = {
  user: User;
  updateUser: (user: User) => void;
};
