import { useRouter } from "next/router";
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CiMap } from "react-icons/ci";
import {
  FiChevronUp,
  FiChevronLeft,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { GiVerticalFlip, GiHorizontalFlip } from "react-icons/gi";
import { Progress } from "src/components/Progress";
import { AboutD3 } from "src/components/contents/AboutD3";
import { AboutD3_2 } from "src/components/contents/AboutD3_2";
import { P1 as VisxP1 } from "src/components/contents/AboutVisx/P1";
import { P2 as VisxP2 } from "src/components/contents/AboutVisx/P2";
import { Axis_1 } from "src/components/contents/Axis/Axis_1";
import { Axis_2 } from "src/components/contents/Axis/Axis_2";
import { ChartLibrary } from "src/components/contents/ChartLibrary";
import { ConsOfD3 } from "src/components/contents/ConsOfD3";
import { D3Topic } from "src/components/contents/D3Topic";
import { DataVisualization } from "src/components/contents/DataVisualization";
import { Epic } from "src/components/contents/Epic";
import { Grid_1 } from "src/components/contents/Grid";
import { Last } from "src/components/contents/Last";
import { Scale_1 } from "src/components/contents/Scale/Scale_1";
import { Scale_2 } from "src/components/contents/Scale/Scale_2";
import { Scale_3 } from "src/components/contents/Scale/Scale_3";
import { Shape_1 } from "src/components/contents/Shape/Shape_1";
import { Today } from "src/components/contents/Today";
import { Top } from "src/components/contents/Top";

const pages: FC[] = [
  Top,
  VisxP1,
  VisxP2,
  DataVisualization,
  ChartLibrary,
  Epic,
  AboutD3,
  AboutD3_2,
  ConsOfD3,
  Today,
  D3Topic,
  Scale_1,
  Scale_2,
  Scale_3,
  Axis_1,
  Axis_2,
  Grid_1,
  Shape_1,
  Last,
];
const lastPageIndex = pages.length - 1;

const threshold = 0;

const Home = memo(() => {
  const [slideDirection, setSlideDirection] = useState<
    "vertical" | "horizontal"
  >("vertical");
  const toggleSlideDirection = useCallback(() => {
    setSlideDirection((prev) =>
      prev === "vertical" ? "horizontal" : "vertical"
    );
  }, []);
  const [isMap, setIsMap] = useState(false);
  const toggleMapView = useCallback(() => setIsMap((f) => !f), []);

  const router = useRouter();
  const index = useMemo(() => {
    const i = router.query["i"];
    if (typeof i !== "string") {
      return 0;
    }
    const n = Number(i);
    if (isNaN(n)) {
      return 0;
    }
    return n;
  }, [router]);
  const setIndex = useCallback(
    (next: number) => {
      router.replace({ pathname: "/", query: { i: next } });
    },
    [router]
  );
  const containerRef = useRef<HTMLDivElement>();
  const pagesRef = useRef<HTMLElement[]>([]);
  const prevTSRef = useRef<number>();

  const move = useCallback(
    (delta: -1 | 1) => {
      const now = Date.now();
      if (prevTSRef.current != null && now < prevTSRef.current + threshold) {
        return;
      }
      const calculated = index + delta;
      const next =
        calculated < 0
          ? 0
          : lastPageIndex < calculated
          ? lastPageIndex
          : calculated;

      if (calculated !== next) {
        return;
      }

      prevTSRef.current = now;
      setIndex(next);
    },
    [index]
  );
  const nextPage = useCallback(() => move(1), [move]);
  const prevPage = useCallback(() => move(-1), [move]);

  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp": {
          prevPage();
          return;
        }

        case "ArrowRight":
        case "ArrowDown": {
          nextPage();
          return;
        }

        case "d":
          toggleSlideDirection();
          return;

        case "m":
          toggleMapView();
        default: {
          return;
        }
      }
    };
    const wheelHandler = (event: WheelEvent) => {
      if (isMap) {
        return;
      }
      move(0 < event.deltaY ? 1 : -1);
    };

    window.addEventListener("keydown", keyHandler);
    window.addEventListener("wheel", wheelHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [index, move, nextPage, prevPage]);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="container" ref={containerRef}>
        {pages.map((Page, index) => (
          <section key={index} ref={(ref) => (pagesRef.current[index] = ref)}>
            <div>
              <Page />
              <div
                className="map-overlay"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsMap(false);
                  setIndex(index);
                }}
              />
            </div>
          </section>
        ))}
      </div>
      {!isMap && slideDirection === "vertical" && (
        <>
          {index !== 0 && (
            <button className="move up" onClick={prevPage}>
              <FiChevronUp size={24} />
            </button>
          )}
          {index !== pages.length - 1 && (
            <button className="move down" onClick={nextPage}>
              <FiChevronDown size={24} />
            </button>
          )}
        </>
      )}
      {!isMap && slideDirection === "horizontal" && (
        <>
          {index !== 0 && (
            <button className="move left" onClick={prevPage}>
              <FiChevronLeft size={24} />
            </button>
          )}
          {index !== pages.length - 1 && (
            <button className="move right" onClick={nextPage}>
              <FiChevronRight size={24} />
            </button>
          )}
        </>
      )}
      <div className="pager">
        <span>
          {index + 1} / {pages.length}
        </span>
        <button onClick={toggleMapView}>
          <CiMap size={16} />
        </button>
        <button onClick={toggleSlideDirection}>
          {slideDirection === "vertical" ? (
            <GiVerticalFlip size={16} />
          ) : (
            <GiHorizontalFlip size={16} />
          )}
        </button>
      </div>
      <Progress total={pages.length} index={index} />
      <style jsx global>{`
        body {
          color: #333;
          margin: 0;
          background-color: #eee;
          overflow: hidden;
          min-width: 1280px;
          min-height: 720px;
        }

        .move {
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          transition-duration: 0.13s;
          transition-property: background-color;
        }

        .move:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        .move:active {
          background-color: rgba(0, 0, 0, 0.03);
        }

        .up {
          top: 0;
          left: 0;
          width: 100vw;
          height: 42px;
        }

        .left {
          top: 0;
          left: 0;
          width: 42px;
          height: 100vh;
        }

        .down {
          bottom: 0;
          right: 0;
          width: 100vw;
          height: 42px;
        }

        .right {
          bottom: 0;
          right: 0;
          width: 42px;
          height: 100vh;
        }

        .container {
          display: flex;
          flex-direction: ${slideDirection === "vertical" ? "column" : "row"};
          position: relative;
          width: ${pages.length * 100}vw;
          height: ${pages.length * 100}vh;
          overflow: hidden;
          transform: ${isMap
            ? `scale(${1 / pages.length})`
            : `translate${
                slideDirection === "vertical" ? "Y" : "X"
              }(calc(-100v${
                slideDirection === "vertical" ? "h" : "w"
              } * ${index}))`};
          transform-origin: ${slideDirection === "vertical"
            ? `50vw 0`
            : `0 50vh`};
          transition-duration: 0.3s;
          transition-property: transform, height, width;
        }

        .map-overlay {
          display: ${isMap ? "block" : "none"};
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 32px;
        }

        .map-overlay:hover {
          background-color: rgba(0, 0, 0, 0.13);
        }

        .pager {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 16px;
          top: 0;
          left: 0;
          padding: 8px 16px;
          background-color: #fff;
          border-bottom-right-radius: 8px;
        }

        section {
          position: relative;
          display: flex;
          flex-shrink: 0;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
        }

        section > div {
          width: 80%;
          height: 80%;
          min-width: 640px;
          min-height: 480px;
          max-width: 960px;
          background-color: #fff;
          border-radius: 8px;
          padding: 1.5rem 3rem;
          box-shadow: 8px 8px 16px #ddd;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }

        h1 {
          font-size: 4rem;
        }

        h2 {
          font-size: 3.2rem;
        }

        h3 {
          font-size: 2.8rem;
        }

        h4 {
          font-size: 2.4rem;
        }

        h5 {
          font-size: 2rem;
        }

        h6 {
          font-size: 1.6rem;
        }

        iframe {
          border: none;
        }

        button {
          background-color: transparent;
          border: none;
          color: #333;
          cursor: pointer;
          outline: none;
          appearance: none;
          padding: 0;
          font-size: 16px;
          line-height: 16px;
        }
      `}</style>
    </>
  );
});
Home.displayName = "Home";

export default Home;
