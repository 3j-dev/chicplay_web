import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

import uploadImgSrc from '@/assets/images/upload.png';
import { Colors } from '@/styles/color';
import { Typography } from '@/styles/style';
import { uploadVideoFile } from '@/api/upload';
import { pushNotification } from '@/util/notification';
import LoaderSpiner from '@/component/Common/LoaderSpinner';

interface NowSpaceT {
  spaceId: number;
}

const FileUpload: React.FC<NowSpaceT> = ({ spaceId }: NowSpaceT) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dragRef = useRef<HTMLLabelElement>(null);

  const onInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files !== null) handleSelectFiles(e.target.files);
  };

  const onDropFiles = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files !== null) handleSelectFiles(e.dataTransfer.files);
  };

  const handleSelectFiles = useCallback(
    async (files: FileList) => {
      if (files === null) {
        pushNotification('잘못된 파일 형식입니다', 'error');
        return;
      }
      if (files?.length > 1) {
        pushNotification('한 번에 한개의 파일만 가능합니다.', 'warning');
        return;
      }
      if (!files || !files[0]) return;
      setIsUploading(true);
      setIsLoading(true);
      const { data } = await uploadVideoFile(spaceId, files[0]);
      if (data.id) pushNotification('업로드 성공!', 'success');
      else pushNotification('업로드 실패', 'error');
      setIsUploading(false);
      setIsLoading(false);
    },
    [spaceId],
  );

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <UploadContainer>
      {isLoading && <LoaderSpiner />}
      <FileUploadSection onDrop={onDropFiles} onDragOver={dragOver}>
        <FileUploadImage src={uploadImgSrc} />
        <FileUploadInput
          type="file"
          multiple={false}
          onChange={onInputFile}
          ref={inputRef}
          id="fileUpload"
          accept="video/*"
          disabled={isUploading}
        />
        <h4>Drop your video here, or</h4>
        <label htmlFor="fileUpload" ref={dragRef}>
          Browse...
        </label>
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
