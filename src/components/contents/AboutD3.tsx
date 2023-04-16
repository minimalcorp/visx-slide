import { memo } from "react";
import { Container } from "src/components/Container";

type Props = {};

export const AboutD3 = memo<Props>(() => {
  return (
    <Container>
      <h2>D3とは？</h2>
      <iframe src="https://d3js.org/" width="100%" height="100%" />
      <style jsx>{`
        p {
          font-size: 2rem;
        }
      `}</style>
    </Container>
  );
});
AboutD3.displayName = "AboutD3";
