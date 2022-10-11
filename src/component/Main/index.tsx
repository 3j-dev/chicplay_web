import { lazy } from 'react';

import { ContentContainer, MainContainer } from './style';

const LazySlogan = lazy(() => import('./Slogan'));
const LazyFeature = lazy(() => import('./Feature'));
const LazyWhyVivid = lazy(() => import('./WhyVivid'));
const LazyToVivid = lazy(() => import('./ToVivid'));
const LazyWithVivid = lazy(() => import('./WithVivid'));
const LazyVividSolution = lazy(() => import('./VividSolution'));

const Main: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer height={650}>
        <LazySlogan />
      </ContentContainer>
      <ContentContainer height={600}>
        <LazyFeature />
      </ContentContainer>
      <ContentContainer height={700}>
        <LazyWhyVivid />
      </ContentContainer>
      <ContentContainer height={700}>
        <LazyToVivid />
      </ContentContainer>
      <ContentContainer height={1800}>
        <LazyWithVivid />
      </ContentContainer>
      <ContentContainer height={1000}>
        <LazyVividSolution />
      </ContentContainer>
    </MainContainer>
  );
};

export default Main;
