import { useEffect, useRef, useState } from 'react';
import {
  $highlight,
  $primarySolid,
  $secondary,
  $white,
} from '../../assets/colors';

import { useContainerDimensions } from '../../hooks/useResize';
import { createMergeSortAnimations } from './sortingAlgos';

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
};

const Sort = () => {
  const [array, setArray] = useState<number[]>();
  const [arrSize, setArrSize] = useState<number>(100);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { width, height } = useContainerDimensions(containerRef);
  const randomizeArray = () => {
    const arr = [];
    for (let i = 0; i < arrSize; i++) {
      arr.push(Math.min(Math.random() * arrSize));
    }
    setArray(arr);
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
        setTimeout(() => {
          b1Style.backgroundColor = color;
          b2Style.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [bar1, val] = animations[i].idxArr;
          const b1Style = bars[bar1].style;
          b1Style.height = `${(val / arrSize) * height}px`;
        }, i * 10);
      }
    }
  };
  useEffect(() => {
    if (!array || array.length === 0) {
      randomizeArray();
    }
  }, [array]);
  // useLayoutEffect(() => {
  //   console.log(width);
  // });
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
      <button onClick={() => randomizeArray()}>Randomize Array</button>
      <button onClick={() => mergeSort()}>MergeSort</button>
    </section>
  );
};

export default Sort;
