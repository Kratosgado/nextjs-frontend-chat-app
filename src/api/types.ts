import { type } from "os";

export type User = {
  /// Id of user
   id: string;
   email: string;
   name: string;
   password: string;
   salt: string;
  /// Date of account creation
   createdAt: Date;
   updatedAt: Date;
   conversations: Conversation[];
}

export type GetManyUsersInput ={
   skip?: number;
   take?: number;
   cursor?: string;
   search?: string;
   userIds?: string[];
}

export type SignUpInput ={
   email: string;

   name?: string;

   password: string;
}

export type UpdateUserInput = {
   /// id of the user
   id: string;

   email?: string;
   name?: string;
   password?: string;
}

export type Conversation = {
   id: string;
   convoName: string;
   createdAt: Date;
   updatedAt: Date;
   users?: User[];
   messages?: Message[];
}

export type CreateChatInput = {
   convoName?: string;
   users: string[];
}

export type RemoveUserInput = {
   conversationId: string;
   userIds?: string[];
}

export type Message ={
   id: string;
   content: string;
   conversation?: Conversation[]
   conversationId: string;
   user?: User[]
   senderId: string;
   createdAt: Date;
   updatedAt: Date;
}

export type SendMessageInput ={
   content: string;
   conversationId: string;
}