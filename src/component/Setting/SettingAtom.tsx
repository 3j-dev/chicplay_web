import styled from 'styled-components';
import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

import { SpaceVideoT, SpaceUserT } from '@/interfaces/setting';
import videoListImgSrc from '@/assets/icon/setting_video.png';
import userAddImgSrc from '@/assets/icon/setting_useradd.png';
import userListImgSrc from '@/assets/icon/setting_userlist.png';
import deleteImgSrc from '@/assets/icon/setting_delete.png';
import { Colors } from '@/util/Constant';
import { Typography } from '@/styles/style';
import { deleteUserInVideoSpace, deleteVideoSpace, plusUserInVideoSpace } from '@/api/setting';
import { pushNotification } from '@/util/notification';
import { minimizeString } from '@/util/minimizeString';

type SettingAtomType = 'VideoList' | 'UserList' | 'UserAdd';

interface UserListProps {
  videoSpaceId: number;
  userList: SpaceUserT[];
}
interface VideoListProps {
  videoList: SpaceVideoT[];
}

interface UserAddProps {
  videoSpaceId: number;
}

interface SpaceDetailUserProps extends SpaceUserT {
  videoSpaceId: number;
}

const VideoListAtom: React.FC<SpaceVideoT> = ({ id, title, description }: SpaceVideoT) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <ListAtomContainer>
      <ListAtomMain onClick={() => setIsClicked((state) => !state)}>
        <p>{minimizeString(title, 20)}</p>
        <GrFormClose color="#333" size={20} />
      </ListAtomMain>
      <ListAtomDetail show={isClicked}>
        <p>{minimizeString(description, 50)}</p>
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

const UserListAtom: React.FC<SpaceDetailUserProps> = ({
  videoSpaceId,
  email,
  name,
  picture,
}: SpaceDetailUserProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const userDeleteHandler = () => {
    deleteUserInVideoSpace(videoSpaceId, email).then(() =>
      pushNotification(`${name}님이 삭제되었습니다`, 'success'),
    );
  };

  return (
    <ListAtomContainer>
      <ListAtomMain onClick={() => setIsClicked((state) => !state)}>
        <ListAtomUser>
          <ListAtomImg src={picture} />
          <p>{name}</p>
        </ListAtomUser>
        <GrFormClose color="#333" size={20} onClick={userDeleteHandler} />
      </ListAtomMain>
      <ListAtomDetail show={isClicked}>
        <p>{email}</p>
      </ListAtomDetail>
    </ListAtomContainer>
  );
};

const SettingUserList: React.FC<UserListProps> = ({ videoSpaceId, userList }: UserListProps) => {
  return (
    <SettingAtomContainer>
      <IconContainer type="UserList">
        <SettingIcon src={userListImgSrc} />
      </IconContainer>
      <h1>Space User List</h1>
      <AtomDataContainer>
        {userList.map((user, idx) => {
          return (
            <UserListAtom
              videoSpaceId={videoSpaceId}
              email={user.email}
              name={user.name}
              picture={user.picture}
              key={idx}
            />
          );
        })}
      </AtomDataContainer>
    </SettingAtomContainer>
  );
};

const SettingUserAdd: React.FC<UserAddProps> = ({ videoSpaceId }: UserAddProps) => {
  const [userEmail, setUserEmail] = useState<string>('');

  const emailValidateRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailValidateRegex.test(userEmail)) {
      pushNotification('이메일 형식에 맞게 제출해주세요.', 'error');
      return;
    }
    const { data } = await plusUserInVideoSpace(videoSpaceId, userEmail);
    if (data.id === videoSpaceId && data.userEmail === userEmail) {
      setUserEmail('');
      pushNotification('사용자 추가 성공!', 'success');
    } else pushNotification('사용자 추가 실패', 'error');
  };
  const deleteHandler = async () => {
    try {
      deleteVideoSpace(videoSpaceId).then(() => pushNotification('스페이스 삭제 완료!', 'success'));
    } catch {
      pushNotification('스페이스 삭제 실패 관리자에게 문의하세요', 'error');
    }
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
          <SendButton>User Add</SendButton>
        </form>
      </AtomDataContainer>
      <TrashIcon src={deleteImgSrc} onClick={() => deleteHandler()} />
    </SettingAtomContainer>
  );
};

const SendButton = styled.button`
  margin-left: 25%;
  margin-top: 10%;
  width: 50%;
  height: 40%;
  background: ${Colors.Blue1};
  color: ${Colors.White};
  border-radius: 24px;
  font-size: 16px;
  border: 0;
`;

const TrashIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: -5%;
  margin-bottom: -5%;
`;

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
  position: relative;
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
  justify-content: space-between;
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

const ListAtomUser = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
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
