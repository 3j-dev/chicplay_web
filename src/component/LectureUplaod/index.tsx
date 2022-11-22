import { useState } from 'react';
import styled from 'styled-components';

import { VideoSpace, VideoUpload } from './LectureUploadAtom';

const LectureUpload: React.FC = () => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<number>(-1);
  return (
    <LectureUplaodContainer>
      {selectedSpaceId > 0 ? (
        <VideoUpload setSelectedSpaceId={setSelectedSpaceId} selectedSpaceId={selectedSpaceId} />
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
