import { NOTE_PLUS_TYPE } from '@/util/Constant';
import { useCallback } from 'react';
import { DropdownContainer, DropdownButtonContainer } from './style';

interface Props {
  dropdownActivated: boolean;
  setDropdownActivated: React.Dispatch<React.SetStateAction<boolean>>;
  setNotePlusType: React.Dispatch<React.SetStateAction<number>>;
}

interface ButtonProps {
  text: string;
  notePlusType: number;
  setNotePlusType: React.Dispatch<React.SetStateAction<number>>;
  setDropdownActivated: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownButton: React.FC<ButtonProps> = ({
  text,
  notePlusType,
  setNotePlusType,
  setDropdownActivated,
}: ButtonProps) => {
  const dropdownClickHandler = useCallback(() => {
    setNotePlusType(notePlusType);
    setDropdownActivated(false);
  }, []);

  return <DropdownButtonContainer onClick={dropdownClickHandler}>{text}</DropdownButtonContainer>;
};

const Dropdown: React.FC<Props> = ({
  dropdownActivated,
  setDropdownActivated,
  setNotePlusType,
}: Props) => {
  const buttonText: string[] = ['MY 필기 기록', '스마트 검색', '새로운 노트', '노트 전체 지우기'];
  const notePlusType: number[] = [
    NOTE_PLUS_TYPE.RECORD,
    NOTE_PLUS_TYPE.SEARCH,
    NOTE_PLUS_TYPE.DEFAULT,
    NOTE_PLUS_TYPE.DEFAULT,
  ];

  return (
    <DropdownContainer activated={dropdownActivated}>
      {buttonText.map((cur, idx) => (
        <DropdownButton
          text={cur}
          key={idx}
          notePlusType={notePlusType[idx]}
          setNotePlusType={setNotePlusType}
          setDropdownActivated={setDropdownActivated}
        />
      ))}
    </DropdownContainer>
  );
};

export default Dropdown;
