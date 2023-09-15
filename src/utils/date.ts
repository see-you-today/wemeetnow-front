import dayjs from "dayjs";

export const useLastChatTime = (sendDateTime: string | null): string => {
  if (!sendDateTime) {
    return "";
  }
  const today = new Date();
  const resultDate = new Date(sendDateTime);

  const hoursDifference = (+today - +resultDate) / (60 * 60 * 1000);

  if (hoursDifference <= 24) {
    // 하루 이전 글인 경우 여기에 코드 작성
    return dayjs(sendDateTime).locale("ko").format("A h:mm");
  } else {
    // 하루 이후 글인 경우 여기에 코드 작성
    return dayjs(sendDateTime).locale("ko").format("M월 D일");
  }

  // return dayjs(sendDateTime).locale("ko").format("A h:mm");
};

export const useChatSendTime = (sendDateTime: string) => {
  const date = new Date(sendDateTime);
  return dayjs(date, "YYYY-MM-DD HH:mm:ss").locale("ko").format("A h:mm");
};
