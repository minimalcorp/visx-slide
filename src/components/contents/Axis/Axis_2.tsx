import { memo } from "react";
import { BasicAxis } from "src/components/BasicAxis";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const Axis_2 = memo<Props>(() => {
  return (
    <Container>
      <h2>軸 - Axis</h2>
      <div>
        <BasicAxis small />
        <img src="/images/axis.png" width={480} />
      </div>
      <UL>
        <li>AxisBottomのtopは高さからoffsetを引いた値</li>
        <li>基本scaleの設定で領域が決まる</li>
        <li>
          → AxisLeftであれば上下、AxisBottomであれば左右はoffsetする必要はない
        </li>
        <li>
          →
          AxisLeftはleft、AxisBottomはtop（高さからoffsetを引いた値）を指定する
        </li>
      </UL>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: start;
          align-items: center;
          margin: 16px 32px;
        }

        img {
          border-radius: 8px;
        }
      `}</style>
    </Container>
  );
});
Axis_2.displayName = "Axis_2";
