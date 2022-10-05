import { ContentContainer, MainContainer } from './style';
import Feature from './Feature';
import Slogan from './Slogan';
import WhyVivid from './WhyVivid';
import ToVivid from './ToVivid';
import WithVivid from './WithVivid';
import VividSolution from './VividSolution';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <ContentContainer height={700}>
        <Slogan />
      </ContentContainer>
      <ContentContainer height={600}>
        <Feature />
      </ContentContainer>
      <ContentContainer height={700}>
        <WhyVivid />
      </ContentContainer>
      <ContentContainer height={700}>
        <ToVivid />
      </ContentContainer>
      <ContentContainer height={1800}>
        <WithVivid />
      </ContentContainer>
      <ContentContainer height={1000}>
        <VividSolution />
      </ContentContainer>
    </MainContainer>
  );
};

export default Main;
