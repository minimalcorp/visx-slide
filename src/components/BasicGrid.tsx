import { GridColumns, GridRows } from "@visx/grid";
import { scaleLinear } from "@visx/scale";
import { Circle, Line } from "@visx/shape";
import { Text } from "@visx/text";
import { MouseEventHandler, memo, useCallback, useState } from "react";

type Props = { small?: boolean; noSL?: boolean; withMeta?: boolean };

const cords = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

const offset = 48;
const offsetR = 90;

export const BasicGrid = memo<Props>(({ small, noSL, withMeta }) => {
  const w = small ? 320 : 640;
  const h = small ? 240 : 480;
  const [focused, setFocused] = useState<boolean>(true);
  const toggle = useCallback(() => {
    if (!withMeta) {
      return;
    }
    setFocused((prev) => !prev);
  }, []);

  const xScale = scaleLinear<number>({
    domain: [0, 1],
    range: [offset, w - offsetR],
  });

  const yScale = scaleLinear<number>({
    domain: [0, 1],
    range: [offset, h - offset],
  });

  return (
    <svg width={w} height={h} onClick={toggle}>
      {withMeta && (
        <>
          <Line
            from={{ x: offset, y: 0 }}
            to={{ x: offset, y: offset }}
            stroke="#ccc"
          />
          <Line
            from={{ x: 0, y: offset }}
            to={{ x: offset, y: offset }}
            stroke="#ccc"
          />
          <Text
            x={offset}
            y={offset / 2 + 8}
            opacity={focused ? 0.16 : 1}
          >{`← offset: ${offset}px`}</Text>
          <Line
            from={{ x: w - offsetR, y: h - offset }}
            to={{ x: w - offsetR, y: h }}
            stroke="#ccc"
          />
          <Line
            from={{ x: w - offsetR, y: h - offset }}
            to={{ x: w, y: h - offset }}
            stroke="#ccc"
          />
          <Text
            x={w - offsetR}
            y={h}
            opacity={focused ? 0.16 : 1}
          >{`← offset`}</Text>
          <Text
            x={w - offsetR + 16}
            y={h - offset - 20}
            opacity={focused ? 0.16 : 1}
          >{`offsetR:`}</Text>
          <Text
            x={w - offsetR + 16}
            y={h - offset - 4}
            opacity={focused ? 0.16 : 1}
          >{`↓${offsetR}px`}</Text>
        </>
      )}
      <GridColumns
        top={offset}
        left={-offset}
        offset={offset}
        width={w - offset - offsetR}
        height={h - offset * 2}
        scale={xScale}
        numTicks={1}
      />
      <GridRows
        left={offset}
        width={w - offset - offsetR}
        height={h - offset * 2}
        scale={yScale}
        numTicks={1}
      />
      {noSL !== true && (
        <Text x={0} y={16}>
          [x, y]
        </Text>
      )}
      {cords.map(([x, y]) => (
        <Circle
          key={`c-${x}_${y}`}
          cx={xScale(x)}
          cy={yScale(y)}
          r={4}
          fill="#333"
        />
      ))}
      {cords.map(([x, y]) => (
        <Text key={`t-${x}_${y}`} x={xScale(x) + 8} y={yScale(y) + 18}>
          {focused ? `[${x}, ${y}]` : `[${xScale(x)}, ${yScale(y)}]`}
        </Text>
      ))}
      {withMeta && (
        <>
          <Line from={{ x: 0, y: 0 }} to={{ x: w, y: 0 }} stroke="#ccc" />
          <Text
            x={w / 1.6}
            y={16}
            opacity={focused ? 0.16 : 1}
          >{`↑ w: ${w}px`}</Text>
          <Line from={{ x: 0, y: 0 }} to={{ x: 0, y: h }} stroke="#ccc" />
          <Text
            y={h / 2 + 8}
            opacity={focused ? 0.16 : 1}
          >{`← h: ${h}px`}</Text>
        </>
      )}
    </svg>
  );
});
BasicGrid.displayName = "BasicGrid";
