import styled from 'styled-components';
import { useState } from 'react';

import { SpaceVideoT, SpaceUserT } from '@/interfaces/setting';
import videoListImgSrc from '@/assets/icon/setting_video.png';
import userAddImgSrc from '@/assets/icon/setting_useradd.png';
import userListImgSrc from '@/assets/icon/setting_userlist.png';
import { Colors } from '@/util/Constant';
import { Typography } from '@/styles/style';
import { plusUserInVideoSpace } from '@/api/setting';
import { pushNotification } from '@/util/notification';

type SettingAtomType = 'VideoList' | 'UserList' | 'UserAdd';

interface UserListProps {
  userList: SpaceUserT[];
}
interface VideoListProps {
  videoList: SpaceVideoT[];
}

interface UserAddProps {
  videoSpaceId: number;
}

const VideoListAtom: React.FC<SpaceVideoT> = ({ id, title, description }: SpaceVideoT) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <ListAtomContainer>
      <ListAtomMain onClick={() => setIsClicked((state) => !state)}>
        <p>{title}</p>
      </ListAtomMain>
      <ListAtomDetail show={isClicked}>
        <p>{description}</p>
      </ListAtomDetail>
    </ListAtomContainer>
  );
};

const SettingVideoList: React.FC<VideoListProps> = ({ videoList }: VideoListProps) => {
  return (
    <SettingAtomContainer>
      <IconContainer type="VideoList">
        <SettingIcon src={videoListImgSrc} />
      </IconContainer>
      <h1>Space Video List</h1>
      <AtomDataContainer>
        {videoList.map((video, idx) => {
          return (
            <VideoListAtom
              id={video.id}
              title={video.title}
              description={video.description}
              key={idx}
            />
          );
        })}
      </AtomDataContainer>
    </SettingAtomContainer>
  );
};

const UserListAtom: React.FC<SpaceUserT> = ({ email, name, picture }: SpaceUserT) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <ListAtomContainer>
      <ListAtomMain onClick={() => setIsClicked((state) => !state)}>
        <ListAtomImg src={picture} />
        <p>{name}</p>
      </ListAtomMain>
      <ListAtomDetail show={isClicked}>
        <p>{email}</p>
      </ListAtomDetail>
    </ListAtomContainer>
  );
};

const SettingUserList: React.FC<UserListProps> = ({ userList }: UserListProps) => {
  return (
    <SettingAtomContainer>
      <IconContainer type="UserList">
        <SettingIcon src={userListImgSrc} />
      </IconContainer>
      <h1>Space User List</h1>
      <AtomDataContainer>
        {userList.map((user, idx) => {
          return (
            <UserListAtom email={user.email} name={user.name} picture={user.picture} key={idx} />
          );
        })}
      </AtomDataContainer>
    </SettingAtomContainer>
  );
};

const SettingUserAdd: React.FC<UserAddProps> = ({ videoSpaceId }: UserAddProps) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await plusUserInVideoSpace(videoSpaceId, userEmail);
    if (data.id === videoSpaceId && data.userEmail === userEmail) {
      setUserEmail('');
      pushNotification('사용자 추가 성공!', 'success');
    } else pushNotification('사용자 추가 실패', 'error');
  };
  return (
    <SettingAtomContainer>
      <IconContainer type="UserAdd">
        <SettingIcon src={userAddImgSrc} />
      </IconContainer>
      <h1>Space User Add</h1>
      <AtomDataContainer>
        <form onSubmit={(e) => submitHandler(e)}>
          <ListAtomInput
            type="email"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Type Email"
          />
        </form>
      </AtomDataContainer>
    </SettingAtomContainer>
  );
};

const getBackgroundColor = (type: SettingAtomType): string => {
  switch (type) {
    case 'VideoList':
      return Colors.Yellow;
    case 'UserList':
      return Colors.Blue4;
    case 'UserAdd':
      return Colors.Red1;
    default:
      return '';
  }
};

const SettingAtomContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const IconContainer = styled.div<{ type: SettingAtomType }>`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ type }) => getBackgroundColor(type)};
`;

const SettingIcon = styled.img`
  width: 30px;
`;

const AtomDataContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

const ListAtomContainer = styled.div`
  width: 99%;
  border: 1px solid ${Colors.Blue5};
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListAtomMain = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  p {
    margin-left: 5%;
    ${Typography.Paragraph1};
  }
`;

const ListAtomImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 5%;
`;

const ListAtomDetail = styled.div<{ show: boolean }>`
  display: ${({ show }) => !show && 'none'};
  width: 90%;
  height: 40px;
  border-top: ${({ show }) => show && `1px dashed ${Colors.Blue5}`};
  p {
    ${Typography.Paragraph2};
    margin-left: 1%;
  }
`;

const ListAtomInput = styled.input`
  width: 96%;
  height: 35px;
  border: 0;
  border-bottom: 1px solid ${Colors.Blue5};
  &:focus {
    outline: none;
  }
`;

export { SettingVideoList, SettingUserList, SettingUserAdd };
