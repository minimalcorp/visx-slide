import { PropsWithChildren, memo } from "react";

type Props = PropsWithChildren;

export const UL = memo<Props>(({ children }) => {
  return (
    <>
      <ul>{children}</ul>
      <style jsx>{`
        ul {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
});
UL.displayName = "UL";
