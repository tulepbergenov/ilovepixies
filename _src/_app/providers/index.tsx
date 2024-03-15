import { ILayout } from "@/_shared/types";
import { ThemeProvider } from "./ThemeProvider";
import { WrapBalancer } from "./WrapBalancer";

export const Providers = ({ children }: ILayout) => {
  return (
    <WrapBalancer>
      <ThemeProvider>{children}</ThemeProvider>
    </WrapBalancer>
  );
};
