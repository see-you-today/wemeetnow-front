import { NavigationProps, RootStackParamList } from "../../../../App";

export type LinkProps = {
  navigation: NavigationProps;
  route: keyof RootStackParamList;
};
