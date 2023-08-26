import dayjs from "dayjs";

export const useSendTime = (sendDateTime: string) => {
  const date = new Date(sendDateTime);
  return dayjs(date, "YYYY-MM-DD HH:mm:ss").locale("ko").format("A h:mm");
};
