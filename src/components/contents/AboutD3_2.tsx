import { memo } from "react";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const AboutD3_2 = memo<Props>(() => {
  return (
    <Container>
      <h2>D3とは？</h2>
      <UL>
        <li>データの可視化であれば大体なんでもできる</li>
        <li>JavaScriptのライブラリ</li>
        <li>TypeScriptの型定義もある</li>
      </UL>
    </Container>
  );
});
AboutD3_2.displayName = "AboutD3_2";
