import {
  $highlight,
  $primarySolid,
  $secondary,
  $white,
} from '../../assets/colors';
import {
  QuicksortAnimation,
  createMergeSortAnimations,
  quickSortAnimations,
} from './sortingAlgos';
import { useEffect, useRef, useState } from 'react';

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
};

const Sort = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { width, height } = useContainerDimensions(containerRef);
  const [array, setArray] = useState<number[]>();
  const [arrSize, setArrSize] = useState<number>(50);
  const [maxCols, setMaxCols] = useState<number>(100);
  const animationTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const randomizeArray = () => {
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
  return (
    <section id="sort" style={styles.section}>
      <h2 style={styles.title}>Sorting Visualizer</h2>
      <div ref={containerRef} style={styles.container}>
        {array &&
          array.length !== 0 &&
          array.map((num, index) => (
            <div
              className="sort-bar"
              key={`bar-${index}`}
              style={{
                ...styles.bar,
                width: `${width / arrSize - 1}px`,
                height: `${(num / array.length) * height}px`,
              }}></div>
          ))}
      </div>
      <input
        type="range"
        min={1}
        max={maxCols}
        value={arrSize}
        onChange={handleSlide}></input>
      <button onClick={() => randomizeArray()}>Randomize Array</button>
      <button onClick={() => mergeSort()}>MergeSort</button>
      <button onClick={() => quickSort()}>Quicksort</button>
      <button onClick={() => cancelAnimation()}>Stop Animation</button>
    </section>
  );
};

export default Sort;
