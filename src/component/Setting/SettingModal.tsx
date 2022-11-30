import { useState } from 'react';
import styled from 'styled-components';

import { Colors } from '@/styles/color';
import { plusVideoSpace } from '@/api/setting';
import { pushNotification } from '@/util/notification';
import { getErrorToast } from '@/api/error/error.config';

const SettingModal: React.FC = () => {
  const [spaceName, setSpaceName] = useState<string>('');
  const [spaceDescription, setSpaceDescription] = useState<string>('');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (spaceName.length < 1 || spaceDescription.length < 1) return;
    const { data, code } = await plusVideoSpace(spaceName, spaceDescription);
    if (data.name === spaceName && data.description === spaceDescription) {
      pushNotification('Space 생성 성공!', 'success');
      setSpaceName('');
      setSpaceDescription('');
    } else getErrorToast(code);
  };

  return (
    <SettingModalContainer>
      <h1>Make New Space</h1>
      <SettingForm onSubmit={submitHandler}>
        <SettingInput
          width={30}
          placeholder="name"
          value={spaceName}
          onChange={(e) => setSpaceName(e.target.value)}
        />
        <SettingInput
          width={80}
          placeholder="description"
          value={spaceDescription}
          onChange={(e) => setSpaceDescription(e.target.value)}
        />
        <button style={{ display: 'none' }}></button>
      </SettingForm>
    </SettingModalContainer>
  );
};

const SettingModalContainer = styled.div`
  width: 80%;
  height: 80%;
`;

const SettingForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SettingInput = styled.input<{ width: number }>`
  width: ${({ width }) => `${width}%`};
  height: 30px;
  border: 0;
  border-bottom: 1px solid ${Colors.Blue5};
  &:focus {
    outline: none;
  }
`;

export default SettingModal;
