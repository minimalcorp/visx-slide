import { memo } from "react";

type Props = {
  total: number;
  index: number;
};

export const Progress = memo<Props>(({ total, index }) => {
  const ratio = Math.round((index / (total - 1)) * 100);

  return (
    <>
      <div />
      <style jsx>{`
        div {
          position: fixed;
          width: 100%;
          height: 4px;
          background-color: #ddd;
          top: 0;
        }

        div::after {
          position: absolute;
          top: 0;
          left: 0;
          width: ${ratio}%;
          height: 4px;
          content: "";
          background-color: #333;
          transition-duration: 0.3s;
          transition-property: width;
        }
      `}</style>
    </>
  );
});
Progress.displayName = "Progress";
