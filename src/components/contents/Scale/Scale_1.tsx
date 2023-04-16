import { memo, useCallback, useState } from "react";
import { BasicGrid } from "src/components/BasicGrid";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const Scale_1 = memo<Props>(() => {
  const [isShowX, setIsShowX] = useState(false);
  const [isShowY, setIsShowY] = useState(false);
  const showX = useCallback(() => setIsShowX((f) => !f), []);
  const showY = useCallback(() => setIsShowY((f) => !f), []);

  return (
    <Container>
      <h2>座標系 - Scale</h2>
      <div>
        <BasicGrid />
      </div>
      <UL>
        <li>
          x座標は{isShowX ? "左" : "？"}端が0。{isShowX ? "右" : "？"}
          に向かって正{" "}
          <button onClick={showX}>{isShowX ? "Hide" : "Show"}</button>
        </li>
        <li>
          y座標は<strong>{isShowY ? "上" : "？"}端</strong>が0。
          <strong>{isShowY ? "下" : "？"}に向かって正</strong>{" "}
          <button onClick={showY}>{isShowY ? "Hide" : "Show"}</button>
        </li>
      </UL>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </Container>
  );
});
Scale_1.displayName = "Scale_1";
