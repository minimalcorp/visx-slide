import { memo } from "react";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const P2 = memo<Props>(() => {
  return (
    <Container>
      <h2>visxとは？</h2>
      <UL>
        <li>データビジュアライゼーションライブラリ</li>
        <li>D3.jsのReact向けラッパーライブラリ</li>
        <li>airbnb製</li>
      </UL>
    </Container>
  );
});
P2.displayName = "AboutVisx_P2";
