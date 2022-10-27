import styled from 'styled-components';

interface NowSpaceT {
  spaceId: number;
}

const YoutubeUpload: React.FC<NowSpaceT> = ({ spaceId }: NowSpaceT) => {
  return (
    <UploadContainer>
      <h3>not supported yet</h3>
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default YoutubeUpload;
