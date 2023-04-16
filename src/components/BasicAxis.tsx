import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridColumns, GridRows } from "@visx/grid";
import { scaleLinear, scaleTime } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { memo } from "react";

type Props = { small?: boolean; withLine?: boolean; withGrid?: boolean };

const off = 32;

const avgTemp = [
  4.9, 5.2, 10.9, 15.3, 18.8, 23.0, 27.4, 27.5, 24.4, 17.2, 14.5, 7.5,
].map((tmp, i) => ({
  month: new Date(2022, i, 1),
  tmp,
}));

const minTmp = avgTemp.reduce<number>((a, b) => Math.min(a, b.tmp), -1);
const maxTmp = avgTemp.reduce<number>((a, b) => Math.max(a, b.tmp), -1);

export const BasicAxis = memo<Props>(({ small, withLine, withGrid }) => {
  const w = small ? 320 : 640;
  const h = small ? 240 : 480;

  const xScale = scaleTime<number>({
    domain: [new Date(2022, 0, 1), new Date(2022, 11, 1)],
    range: [off, w - off],
    nice: true,
  });

  const yScale = scaleLinear({
    domain: [minTmp, maxTmp],
    range: [h - off, off],
  });

  return (
    <svg width={w} height={h}>
      {withGrid && (
        <>
          <GridColumns
            height={h - off * 2}
            top={off}
            scale={xScale}
            numTicks={avgTemp.length}
          />
          <GridRows width={w - off * 2} left={off} scale={yScale} />
        </>
      )}

      <AxisBottom
        top={h - off}
        scale={xScale}
        tickFormat={(n: Date) => `${n.getMonth() + 1}月`}
      />
      <AxisLeft left={off} scale={yScale} tickFormat={(t) => `${t}℃`} />

      {withLine && (
        <LinePath
          data={avgTemp}
          x={({ month }) => xScale(month)}
          y={({ tmp }) => yScale(tmp)}
          stroke="#893"
          strokeWidth={2}
        />
      )}
    </svg>
  );
});
BasicAxis.displayName = "BasicAxis";
