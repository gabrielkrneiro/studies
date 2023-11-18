import { HttpResponse, http } from "msw";
import { UsersAPI } from "../constants";

const dbUsers = [
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
  http.get(UsersAPI, () => {
    return HttpResponse.json(dbUsers, { status: 200 });
  }),
];
