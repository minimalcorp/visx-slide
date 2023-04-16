import { memo } from "react";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const DataVisualization = memo<Props>(() => {
  return (
    <Container>
      <h2>
        データビジュアライゼーション
        <br />
        ライブラリ
        <br />
        (React向け)
      </h2>
      <UL>
        <li>
          <a href="https://nivo.rocks/" target="_blank">
            nivo
          </a>
          <a href="https://github.com/plouc/nivo" target="_blank">
            GitHub (package.json)
          </a>
        </li>
      </UL>
      <p>
        visxと同じようなコンセプトの（D3.jsに近いレイヤーのAPIを提供している）ライブラリはnivoしかない
        <br />
        コンポーネントが大量に提供されているがカスタマイズ性がvisxに比べて若干低い
        <br />
        nivoに関しては今回触れない
      </p>
      <style jsx>{`
        li > a:nth-child(1) {
          display: inline-block;
          width: 16rem;
        }

        p {
          font-size: 1.5rem;
        }
      `}</style>
    </Container>
  );
});
DataVisualization.displayName = "DataVisualization";
