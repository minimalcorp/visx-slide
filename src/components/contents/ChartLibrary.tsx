import { memo } from "react";
import { Container } from "../Container";
import { UL } from "../UL";

type Props = {};

export const ChartLibrary = memo<Props>(() => {
  return (
    <Container>
      <h2>（参考）チャートライブラリ</h2>
      <UL>
        <li>
          <a href="https://recharts.org/en-US/" target="_blank">
            Recharts
          </a>
          <a
            href="https://github.com/recharts/recharts/blob/master/package.json#L121-L123"
            target="_blank"
          >
            GitHub (package.json)
          </a>
        </li>
        <li>
          <a href="https://react-charts.tanstack.com/" target="_blank">
            React Charts
          </a>
          <a
            href="https://github.com/TanStack/react-charts/blob/beta/package.json#L134-L139"
            target="_blank"
          >
            GitHub (package.json)
          </a>
        </li>
        <li>
          <a href="https://react-chartjs-2.js.org/" target="_blank">
            react-chartjs-2
          </a>
          <a
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/package.json"
            target="_blank"
          >
            GitHub (package.json) 非D3依存
          </a>
        </li>
      </UL>
      <p>
        チャートはデータビジュアライゼーションの概念の一部というイメージで、これらはチャートに関わる機能しか提供していない
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
ChartLibrary.displayName = "ChartLibrary";
