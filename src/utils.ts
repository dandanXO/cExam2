import { pathSymbol, valueSymbol } from '@/symbol';

export type KVPair = { key: string, value: string };

export type TreeObject = {
  [key: symbol]: string;
  [key: string]: TreeObject;
}

export type ForceFoldingType = "fold" | "unfold" | null;

export function kvPairsToTreeObject(kvPairs: KVPair[]): TreeObject {
  // 一個大OBJ
  const result: TreeObject = Object.create(null);

  
  for (const kvPair of kvPairs) {
    // empty key 略
    if (kvPair.key === '') continue;

    let currentNode = result;
    let currentPath = '';

    // 有"."就可以地回
    for (const subKey of kvPair.key.split('.')) {
      currentPath += `.${subKey}`;
     
      // make new TreeObject if necessary
      if (currentNode[subKey] === undefined) {
        const newNode: TreeObject = Object.create(null);

        // set the node path
        newNode[pathSymbol] = currentPath.slice(1);

        currentNode[subKey] = newNode;
      }

      currentNode = currentNode[subKey];
      console.log(currentPath, currentNode,subKey, kvPair)
    }

    // set the node value
    currentNode[valueSymbol] = kvPair.value;
  }

  return result;
}
