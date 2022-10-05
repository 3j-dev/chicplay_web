import {
  WithVividAtomContainer,
  WithVividAtomImage,
  WithVividAtomSlogan,
  WithVividAtomTitle,
  WithVividContainer,
  WithVividTitle,
} from './style';
import { WithVividSlogan } from './data';

import WithVividAtomImageSrc1 from '@/assets/images/main_05.png';
import WithVividAtomImageSrc2 from '@/assets/images/main_06.png';
import WithVividAtomImageSrc3 from '@/assets/images/main_07.png';

interface VividAtomProps {
  idx: number;
  slogan: string;
}

const WithVividImageArr = [WithVividAtomImageSrc1, WithVividAtomImageSrc2, WithVividAtomImageSrc3];

const WithVividAtom: React.FC<VividAtomProps> = ({ slogan, idx }: VividAtomProps) => {
  return (
    <WithVividAtomContainer>
      <WithVividAtomTitle idx={idx}>{`효과${idx + 1}`}</WithVividAtomTitle>
      <WithVividAtomSlogan>{slogan}</WithVividAtomSlogan>
      <WithVividAtomImage src={WithVividImageArr[idx]} />
    </WithVividAtomContainer>
  );
};

const WithVivid: React.FC = () => {
  return (
    <WithVividContainer>
      <WithVividTitle>VIVID와 함께라면</WithVividTitle>
      <>
        {WithVividSlogan.map((cur, idx) => (
          <WithVividAtom slogan={cur} idx={idx} key={idx} />
        ))}
      </>
    </WithVividContainer>
  );
};

export default WithVivid;
