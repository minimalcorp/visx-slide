import { memo } from "react";
import { BasicAxis } from "src/components/BasicAxis";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const Axis_1 = memo<Props>(() => {
  return (
    <Container>
      <h2>軸 - Axis</h2>
      <div>
        <BasicAxis />
      </div>
      <p>↑ 年間気温推移を表現するための軸</p>
      <UL>
        <li>AxisはX軸・Y軸とラベルなどをまとめたもの</li>
        <li>先ほどのscaleやwidth, height, offsetを使ってAxisを表現する</li>
        <li>tickFormat()関数を使ってラベルに表示する内容を決める</li>
      </UL>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          margin: 16px 32px;
        }
      `}</style>
    </Container>
  );
});
Axis_1.displayName = "Axis_1";
