import { PropsWithChildren, memo } from "react";

type Props = PropsWithChildren;

export const Container = memo<Props>(({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: start;
        }
      `}</style>
    </>
  );
});
Container.displayName = "Container";
