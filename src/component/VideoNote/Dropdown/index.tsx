import { NOTE_PLUS_TYPE } from '@/util/Constant';
import { DropdownContainer } from './style';

interface Props {
  dropdownActivated: boolean;
  setDropdownActivated: React.Dispatch<React.SetStateAction<boolean>>;
  setNotePlusType: React.Dispatch<React.SetStateAction<number>>;
}

const DropdownButton: React.FC = () => {
  return <div></div>;
};

const Dropdown: React.FC<Props> = ({
  dropdownActivated,
  setDropdownActivated,
  setNotePlusType,
}: Props) => {
  const buttonText: string[] = ['MY 필기 기록', '스마트 검색', '새로운 노트', '노트 전체 지우기'];
  const buttonTextClickHandler: (void | null)[] = [
    setNotePlusType(NOTE_PLUS_TYPE.RECORD),
    setNotePlusType(NOTE_PLUS_TYPE.SEARCH),
    null,
    null,
  ];

  return <DropdownContainer activated={dropdownActivated}>dropdown</DropdownContainer>;
};

export default Dropdown;
