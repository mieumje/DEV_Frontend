import { useState } from "react";

interface content {
  tab: string;
  content: string;
}

interface Tabs extends Array<content> {}

const useTabs = (initialTab: number, allTabs: Tabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default useTabs;
