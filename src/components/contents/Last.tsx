import { memo } from "react";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const Last = memo<Props>(() => {
  return (
    <Container>
      <h2>さいごに</h2>
      <UL>
        <li>scaleLinear以外にも、scaleTimeなど様々なScaleが用意されている</li>
        <li>
          Line以外にも、様々なShapeや、@visx/curveなどShape以外のパッケージもあるので必要に応じて使い分ける
        </li>
        <li>
          これで基礎を掴んだらドキュメントとExampleを読み込めば大体なんでも作れるはず
        </li>
      </UL>
      <div>
        <p>ぜひトライしてみてね！</p>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          justify-content: end;
        }

        div > p {
          font-size: 1.5rem;
        }
      `}</style>
    </Container>
  );
});
Last.displayName = "Last";
