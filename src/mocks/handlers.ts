import { HttpResponse, http, delay } from "msw";
import { UsersAPI } from "../constants";
import { User } from "../interfaces/UserInterfaces";

const dbUsers: User[] = [
  {
    id: 1,
    name: "Johnny Walker",
  },
  {
    id: 2,
    name: "Maccalan",
  },
];

export const handlers = [
  http.get(UsersAPI, async ({}) => {
    await delay(300);
    return HttpResponse.json(dbUsers, { status: 200 });
  }),
];
