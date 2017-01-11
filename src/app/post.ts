import {User} from './user';

export class Post {
  author: User;
  title: string;
  message: string;
  dateCreated: Date;
}
