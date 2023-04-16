import { memo } from "react";
import { BasicGrid } from "src/components/BasicGrid";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const Scale_3 = memo<Props>(() => {
  return (
    <Container>
      <h2>scaleLinear - Scale</h2>
      <div>
        <BasicGrid small noSL withMeta />
        <img src="/images/scaleLinear.png" width={320} />
      </div>
      <p>データ([x, y][]) = [[0, 0], [0, 1], [1, 0], [1, 1]]</p>
      <UL>
        <li>domain: データの範囲（今回はxもyもminが0でMAXが1なので[0, 1]）</li>
        <li>range: svg内の座標範囲</li>
        <li>
          xScaleやyScaleは、domainとrangeを元に、
          <strong>元データの数値を受け取って、svg上の座標を返す</strong>
          機能がある
        </li>
        <li>
          これらの座標を使って、LineやBar、Textなどの位置や大きさを決定する
        </li>
      </UL>
      <style jsx>{`
        div {
          display: flex;
          justify-content: start;
          align-items: center;
          margin: 16px 32px;
          width: 100%;
          gap: 64px;
        }

        img {
          border-radius: 8px;
        }
      `}</style>
    </Container>
  );
});
Scale_3.displayName = "Scale_3";
