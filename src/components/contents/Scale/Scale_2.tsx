import { memo } from "react";
import { BasicGrid } from "src/components/BasicGrid";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const Scale_2 = memo<Props>(() => {
  return (
    <Container>
      <h2>座標系 - Scale</h2>
      <div>
        <BasicGrid small />
      </div>
      <UL>
        <li>
          この図は<strong>[[0, 0], [0, 1], [1, 0], [1, 1]]</strong>
          という4つの座標データをsvg内に表示
        </li>
        <li>
          これらの値を、画面上どの座標点に表示するかを計算するのが
          <strong>Scale</strong>
        </li>
        <li>
          単純な数値データなので<strong>scaleLinear</strong>関数を使って作成
        </li>
      </UL>
      <style jsx>{`
        div {
          display: flex;
          justify-content: start;
          align-items: start;
          margin: 16px 32px;
          width: 100%;
        }
      `}</style>
    </Container>
  );
});
Scale_2.displayName = "Scale_2";
