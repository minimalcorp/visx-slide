import { memo } from "react";
import { Container } from "src/components/Container";

type Props = {};

export const P1 = memo<Props>(() => {
  return (
    <Container>
      <h2>visxとは？</h2>
      <iframe src="https://airbnb.io/visx/" width="100%" height="100%" />
    </Container>
  );
});
P1.displayName = "AboutVisx_P1";
