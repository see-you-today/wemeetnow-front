type ChatType = "CHAT" | "JOIN" | "INVITE" | "LEAVE";

export type ChatRoomListType = {
  chatRoomId: number;
  chatRoomName: string;
  totalNum: number;
  chatRoomImgUrl: string;
  lastMessageDateTime: string | null;
  lastMessageContent: string | null;
};

export interface ChatProps {
  content: string;
  chatType: ChatType;
  senderName: string;
  invitedUserName: string | null;
  sendDateTime: string;
  notReadCount: number;
  isSender: boolean;
  senderImgUrl: string;
}

export interface OtherChatProps {
  content: string;
  senderName: string;
  sendDateTime: string;
  notReadCount: number;
  senderImgUrl: string;
}

export interface MyChatProps {
  content: string;
  sendDateTime: string;
  notReadCount: number;
}

export interface LeaveChatProps {
  senderName: string;
}

export interface JoinChatProps {
  invitedUserName: string;
}

export interface InviteChatProps extends JoinChatProps, LeaveChatProps {}
