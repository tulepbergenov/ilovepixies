import { ILayout } from "@/_shared/types";
import { WrapBalancer } from "./WrapBalancer";

export const Providers = ({ children }: ILayout) => {
  return <WrapBalancer>{children}</WrapBalancer>;
};
