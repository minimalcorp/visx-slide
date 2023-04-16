import { memo } from "react";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const D3Topic = memo<Props>(() => {
  return (
    <Container>
      <h2>D3で最低限必要な知識</h2>
      <UL>
        <li>Scale</li>
      </UL>
      <span>+</span>
      <UL>
        <li>Axis</li>
        <li>Grid</li>
        <li>Shape</li>
      </UL>
      <p>
        注意:
        これから登場する実装例はvisxで作っているのでところどころvisxの話が混ざります
      </p>
      <style jsx>{`
        span {
          padding-left: 60px;
          font-weight: bold;
        }

        p {
          padding-left: 20px;
        }
      `}</style>
    </Container>
  );
});
D3Topic.displayName = "D3Topic";
