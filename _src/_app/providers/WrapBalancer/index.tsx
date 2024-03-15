import { ILayout } from "@/_shared/types";
import { Provider } from "react-wrap-balancer";

export const WrapBalancer = ({ children }: ILayout) => {
  return <Provider>{children}</Provider>;
};
