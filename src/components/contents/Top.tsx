import { memo } from "react";
import { Container } from "../Container";

export const Top = memo(() => {
  return (
    <Container>
      <h1>visxの基礎</h1>
    </Container>
  );
});
Top.displayName = "Top";
