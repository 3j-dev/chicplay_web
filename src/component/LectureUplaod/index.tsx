import { useState } from 'react';
import styled from 'styled-components';

import { VideoSpace, VideoUpload } from './LectureUploadAtom';

const LectureUpload: React.FC = () => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>('');
  return (
    <LectureUplaodContainer>
      {selectedSpaceId.length > 0 ? (
        <VideoUpload setSelectedSpaceId={setSelectedSpaceId} />
      ) : (
        <VideoSpace setSelectedSpaceId={setSelectedSpaceId} />
      )}
    </LectureUplaodContainer>
  );
};

const LectureUplaodContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LectureUpload;
