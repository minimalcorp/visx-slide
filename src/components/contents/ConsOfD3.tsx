import { memo } from "react";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const ConsOfD3 = memo<Props>(() => {
  return (
    <Container>
      <h2>D3の短所</h2>
      <UL>
        <li>学習コストが高い = 普段登場しない単語と概念がふんだんに出てくる</li>
        <li>Reactと組み合わせて使うのが面倒</li>
        <li>ドキュメントがめちゃくちゃ膨大で分かりづらい</li>
      </UL>
    </Container>
  );
});
ConsOfD3.displayName = "ConsOfD3";
