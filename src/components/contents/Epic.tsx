import { memo } from "react";
import { Container } from "src/components/Container";
import { UL } from "../UL";

type Props = {};

export const Epic = memo<Props>(() => {
  return (
    <Container>
      <h2>重要なポイント</h2>
      <UL>
        <li>ほとんどD3.js依存（先の例ではChart.js以外全て）</li>
        <li>→ 結局D3.jsができることしかできない</li>
        <li>それぞれのライブラリのAPIによる制限が分かりづらい</li>
      </UL>
      <p>
        概ね各ライブラリで使われているネーミングがD3から来ているので、先にD3.jsについて知っておくと応用が効く
      </p>
      <style jsx>{`
        p {
          font-size: 1.5rem;
        }
      `}</style>
    </Container>
  );
});
Epic.displayName = "Epic";
