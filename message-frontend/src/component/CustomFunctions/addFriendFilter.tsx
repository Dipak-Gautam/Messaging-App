type User = {
  _id: string;
  name: string;
  email: string;
};

function filterArrayById(users: User[], idsToRemove: string[]): User[] {
  return users.filter((user) => !idsToRemove.includes(user._id));
}

export default filterArrayById;
