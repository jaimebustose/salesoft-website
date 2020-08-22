import React, { useState, useRef, useEffect } from 'react';
import { handleDynamicHeight, applyScrollListener, removeScrollListener } from './funtionalities';
import styled from 'styled-components';

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` },
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export default function HorizontalScroll({ children }) {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    if (objectRef.current) {
      handleDynamicHeight(objectRef, setDynamicHeight);
      window.addEventListener('resize', resizeHandler);
    }
    if (containerRef.current) {
      applyScrollListener(containerRef, setTranslateX);
    }
    return () => {
      window.removeEventListener('resize', resizeHandler, true);
      removeScrollListener(containerRef, setTranslateX);    
    };
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
}
