// Big thanks to Clement Mihailescu for the tutorial and idea for creating animations to show the merges
// tutorial link:
// https://www.youtube.com/watch?v=pFXYym4Wbkc&ab_channel=Cl%C3%A9mentMihailescu

export interface mergeAnimation {
  type: 'focus' | 'back' | 'swap';
  idxArr: number[];
}

export const createMergeSortAnimations = (arr: number[]): mergeAnimation[] => {
  const animations: mergeAnimation[] = [];
  if (arr.length < 2) return animations; // trivial cases
  const aux = arr.slice();
  mergeSortHelper(arr, 0, arr.length - 1, aux, animations);
  return animations;
};

const mergeSortHelper = (
  arr: number[],
  start: number,
  end: number,
  aux: number[],
  animations: mergeAnimation[]
) => {
  if (start === end) return;
  const middle = Math.floor((start + end) / 2);
  mergeSortHelper(aux, start, middle, arr, animations);
  mergeSortHelper(aux, middle + 1, end, arr, animations);
  merge(arr, start, middle, end, aux, animations);
};

const merge = (
  arr: number[],
  start: number,
  middle: number,
  end: number,
  aux: number[],
  animations: mergeAnimation[]
) => {
  let k = start;
  let i = start;
  let j = middle + 1;
  while (i <= middle && j <= end) {
    animations.push({ type: 'focus', idxArr: [i, j] });
    animations.push({ type: 'back', idxArr: [i, j] });
    if (aux[i] <= aux[j]) {
      animations.push({ type: 'swap', idxArr: [k, aux[i]] });
      arr[k++] = aux[i++];
    } else {
      animations.push({ type: 'swap', idxArr: [k, aux[j]] });
      arr[k++] = aux[j++];
    }
  }
  while (i <= middle) {
    animations.push({ type: 'focus', idxArr: [i, i] });
    animations.push({ type: 'back', idxArr: [i, i] });
    animations.push({ type: 'swap', idxArr: [k, aux[i]] });
    arr[k++] = aux[i++];
  }
  while (j <= end) {
    animations.push({ type: 'focus', idxArr: [j, j] });
    animations.push({ type: 'back', idxArr: [j, j] });
    animations.push({ type: 'swap', idxArr: [k, aux[j]] });
    arr[k++] = aux[j++];
  }
};
