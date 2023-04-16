import { memo } from "react";
import { BasicAxis } from "src/components/BasicAxis";
import { Container } from "src/components/Container";
import { UL } from "src/components/UL";

type Props = {};

export const Shape_1 = memo<Props>(() => {
  return (
    <Container>
      <h2>線グラフ（一例） - Shape</h2>
      <div>
        <BasicAxis withGrid withLine />
      </div>
      <p>↑ 年間気温推移(2022)</p>
      <UL>
        <li>
          (visx)svg内の要素はabsoluteなので、JSXで下に定義したものが上のレイヤーにくる
        </li>
        <li>
          (visx)z-indexなどでの指定が効かないのでレイヤーの上下関係は↑で行う
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
Shape_1.displayName = "Shape_1";
