import { ulid } from "ulid";
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from "./gen/graphql-resolver-types";

type User = {
  id: string;
  name: string;
};

let users: User[] = [
  {
    id: "0aaueoau",
    name: "hello"
  }
];

const Query: QueryResolvers = {
  async user(_parent, _args, _context, _info) {
    return users[0];
  },
  async users() {
    return users;
  }
};

const Mutation: MutationResolvers = {
  async addUser(_parent, args, _context, _info) {
    const newUser = {
      id: ulid(),
      name: args.name
    };
    users.push(newUser);
    return newUser;
  },
  async deleteUser(_parent, args, _context, _info) {
    const user = users.find(u => u.id !== args.id) as User;
    users = users.filter(u => u.id !== args.id);
    return user;
  }
};

export const resolvers: Resolvers = {
  Query,
  Mutation
};
