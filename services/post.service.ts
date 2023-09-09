import { Posts } from "@/data/posts";
import { wait } from "@/utils/helpers";

export const getPosts = async () => wait(1000).then(() => [...Posts])