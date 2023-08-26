export interface ChatMessageProps {
  content: string;
  chatType: "CHAT" | "JOIN" | "INVITE" | "LEAVE";
  senderName: string;
  invitedUserName?: string;
  sendDateTime: string;
  notReadCount: number;
  isSender: boolean;
  senderImgUrl: string;
}
