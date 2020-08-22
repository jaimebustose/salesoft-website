export const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh;
};

export const handleDynamicHeight = (ref, setDynamicHeight) => {
  if (ref.current) {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  }
};

export const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener('scroll', () => {
    if (ref.current) {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    }
  });
};

export const removeScrollListener = (ref, setTranslateX) => {
  window.removeEventListener('scroll', () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};
