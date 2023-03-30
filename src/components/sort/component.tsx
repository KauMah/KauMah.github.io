import { useEffect, useRef, useState } from 'react';
import {
  $highlight,
  $primaryHighlight,
  $primarySolid,
  $primaryTransparent,
  $secondary,
  $white,
} from '../../assets/colors';
import {
  createMergeSortAnimations,
  QuicksortAnimation,
  quickSortAnimations,
} from './sortingAlgos';

import { css } from '@emotion/react';
import { useContainerDimensions } from '../../hooks/useResize';

const styles = {
  section: {
    backgroundColor: $secondary,
    textAlign: 'center' as const,
  },
  title: {
    padding: 20,
  },
  container: {
    height: 500,
    backgroundColor: $white,
    margin: '10px 10%',
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'end',
    justifyContent: 'center',
  },
  bar: {
    backgroundColor: $primarySolid,
    width: '10px',
    margin: '0 1px 0 0',
  },
  count: {
    display: 'inline-block',
  },
  button: css({
    padding: '5px',
    margin: '5px 5px',
    borderRadius: '5px',
    backgroundColor: $primarySolid,
    color: $white,
    fontWeight: 'bold',
    border: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: $primaryTransparent,
      color: $primaryHighlight,
    },
  }),
  rangeContainer: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    fontWeight: 'bold' as const,
  },
  range: css({
    backgroundColor: 'transparent',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    margin: '10px 0',
    appearance: 'none',
    '&::-webkit-slider-runnable-track': {
      background: $primarySolid,
      borderRadius: 5,
      height: 10,
    },
    '&::-moz-range-track': {
      background: $primarySolid,
      borderRadius: 5,
      height: 10,
    },
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      backgroundColor: $primaryHighlight,
      height: 20,
      width: 20,
      marginTop: -5,
      borderRadius: 10,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: $highlight,
        height: 25,
        width: 25,
        marginTop: -7,
      },
    },
    '&::-moz-range-thumb': {
      WebkitAppearance: 'none',
      backgroundColor: $primaryHighlight,
      height: 20,
      width: 20,
      marginTop: -5,
      borderRadius: 10,
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: $highlight,
        height: 25,
        width: 25,
        marginTop: -7,
      },
    },
  }),
  sortOps: {
    display: 'flex' as const,
    flexDirection: 'row' as const,
    justifyContent: 'center',
  },
};

const Sort = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { width, height } = useContainerDimensions(containerRef);
  const [array, setArray] = useState<number[]>();
  const [arrSize, setArrSize] = useState<number>(50);
  const [maxCols, setMaxCols] = useState<number>(100);
  const animationTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const randomizeArray = () => {
    cancelAnimation();
    const arr = [];
    // if (arrSize > width / 2) {
    //   setArrSize(width / 4);
    // }
    for (let i = 0; i < arrSize; i++) {
      arr.push(Math.min(Math.random() * arrSize));
    }
    setArray(arr);
  };

  const cancelAnimation = () => {
    for (let i = 0; i < animationTimeouts.current.length; i++) {
      clearTimeout(animationTimeouts.current[i]);
    }
    animationTimeouts.current = [];
  };

  const mergeSort = () => {
    if (!array) return;
    const animations = createMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName(
        'sort-bar'
      ) as HTMLCollectionOf<HTMLElement>;
      const type = animations[i].type;
      if (type !== 'swap') {
        // Color change
        const [bar1, bar2] = animations[i].idxArr;
        const b1Style = bars[bar1].style;
        const b2Style = bars[bar2].style;
        const color = type === 'focus' ? $highlight : $primarySolid;
        animationTimeouts.current.push(
          setTimeout(() => {
            b1Style.backgroundColor = color;
            b2Style.backgroundColor = color;
          }, i * 1)
        );
      } else {
        animationTimeouts.current.push(
          setTimeout(() => {
            const [bar1, val] = animations[i].idxArr;
            const b1Style = bars[bar1].style;
            b1Style.height = `${(val / arrSize) * height}px`;
          }, i * 1)
        );
      }
    }
  };
  const quickSort = () => {
    if (!array) return;
    const animations: QuicksortAnimation[] = quickSortAnimations(
      array,
      0,
      arrSize - 1
    );
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName(
        'sort-bar'
      ) as HTMLCollectionOf<HTMLElement>;
      const type = animations[i].type;
      if (type != 'swap') {
        const [bar1, bar2] = animations[i].indices;
        const b1Style = bars[bar1].style;
        const b2Style = bars[bar2].style;
        const color = type === 'highlight' ? $highlight : $primarySolid;
        animationTimeouts.current.push(
          setTimeout(() => {
            b1Style.backgroundColor = color;
            b2Style.backgroundColor = color;
          }, i * 1)
        );
      } else {
        animationTimeouts.current.push(
          setTimeout(() => {
            const [bar1, bar2, v1, v2] = animations[i].indices;
            const b1Style = bars[bar1].style;
            b1Style.height = `${(v2 / arrSize) * height}px`;
            const b2Style = bars[bar2].style;
            b2Style.height = `${(v1 / arrSize) * height}px`;
          }, i * 1)
        );
      }
    }
  };

  const handleSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArrSize(parseInt(e.target.value));
    // _.throttle(() => randomizeArray(), 500, { trailing: true })();
    randomizeArray();
  };

  useEffect(() => {
    setMaxCols(width / 2);
    if (!array || array.length === 0) {
      randomizeArray();
    }
  }, [array]);
  useEffect(() => {
    setMaxCols(width / 2);
    randomizeArray();
  }, [arrSize]);
  return (
    <section id="sort" style={styles.section}>
      <h2 style={styles.title}>Sorting Visualizer</h2>
      <div className="container">
        <div style={styles.sortOps} className="row">
          <div className="col-8 col-sm-2" style={styles.rangeContainer}>
            <label htmlFor="numCols">Array Size</label>
            <input
              name="numCols"
              type="range"
              min={1}
              max={maxCols}
              value={arrSize}
              css={styles.range}
              onChange={handleSlide}></input>
          </div>
          <button
            className="col-8 col-sm-2"
            css={styles.button}
            onClick={() => randomizeArray()}>
            Randomize Array
          </button>
          <button
            className="col-8 col-sm-2"
            css={styles.button}
            onClick={() => mergeSort()}>
            MergeSort
          </button>
          <button
            className="col-8 col-sm-2"
            css={styles.button}
            onClick={() => quickSort()}>
            Quicksort
          </button>
          <button
            className="col-8 col-sm-2"
            css={styles.button}
            onClick={() => cancelAnimation()}>
            Stop Animation
          </button>
        </div>
      </div>
      <div ref={containerRef} style={styles.container}>
        {array &&
          array.length !== 0 &&
          array.map((num, index) => (
            <div
              className="sort-bar"
              key={`bar-${index}`}
              style={{
                ...styles.bar,
                width: `${Math.floor(width / arrSize - 1)}px`,
                height: `${(num / array.length) * height}px`,
              }}></div>
          ))}
      </div>
    </section>
  );
};

export default Sort;
