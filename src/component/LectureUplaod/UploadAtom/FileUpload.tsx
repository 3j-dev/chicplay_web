import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

import uploadImgSrc from '@/assets/images/upload.png';
import { Colors } from '@/util/Constant';
import { Typography } from '@/styles/style';
import { uploadVideoFile } from '@/api/upload';

interface FileT {
  id: number;
  object: File;
}

interface NowSpaceT {
  spaceId: string;
}

const FileUpload: React.FC<NowSpaceT> = ({ spaceId }: NowSpaceT) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleSelectFiles = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      console.log(files, event);
      if (!files || !files[0]) return;
      setIsUploading(true);
      const { id } = await uploadVideoFile(spaceId, files[0]);
      setIsUploading(false);
    },
    [spaceId],
  );

  return (
    <UploadContainer>
      <FileUploadSection>
        <FileUploadImage src={uploadImgSrc} />
        <FileUploadInput
          type="file"
          multiple={false}
          onChange={handleSelectFiles}
          ref={inputRef}
          id="fileUpload"
          disabled={isUploading}
        />
        <h4>Drop your video here, or</h4>
        <label htmlFor="fileUpload">Browse...</label>
      </FileUploadSection>
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
  position: relative;
`;

const FileUploadSection = styled.div`
  width: 60%;
  height: 80%;
  border: 2px dashed ${Colors.Blue5};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px dashed ${Colors.Blue1};
  }
  label {
    ${Typography.Heading4};
    color: ${Colors.Blue1};
  }
`;

const FileUploadImage = styled.img`
  width: 150px;
  height: auto;
`;

const FileUploadInput = styled.input`
  opacity: 0;
`;

export default FileUpload;
