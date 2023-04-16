import { memo } from "react";
import { Container } from "src/components/Container";
import { BasicAxis } from "src/components/BasicAxis";
import { UL } from "src/components/UL";

type Props = {};

export const Grid_1 = memo<Props>(() => {
  return (
    <Container>
      <h2>Grid</h2>
      <div>
        <BasicAxis withGrid />
      </div>
      <UL>
        <li>
          Axisだけではデータの値が分かりづらいのでGridを使って格子状の線を描画
        </li>
      </UL>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Container>
  );
});
Grid_1.displayName = "Grid_1";
