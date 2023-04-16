import { memo } from "react";
import { Container } from "src/components/Container";

type Props = {};

export const Today = memo<Props>(() => {
  return (
    <Container>
      <h2>D3で最低限必要な知識</h2>
      <p>visxを使ってまとめました</p>
      <style jsx>{`
        p {
          font-size: 2rem;
        }
      `}</style>
    </Container>
  );
});
Today.displayName = "Today";
