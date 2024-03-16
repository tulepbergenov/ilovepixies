import { ILayout } from "@/_shared/types";
import { ScrollTransitionProvider } from "./ScrollTransitionProvider";
import { ThemeProvider } from "./ThemeProvider";
import { WrapBalancerProvider } from "./WrapBalancerProvider";

export const Providers = ({ children }: ILayout) => {
  return (
    <WrapBalancerProvider>
      <ThemeProvider>
        <ScrollTransitionProvider>{children}</ScrollTransitionProvider>
      </ThemeProvider>
    </WrapBalancerProvider>
  );
};
