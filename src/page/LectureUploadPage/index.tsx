import Content from '@/component/Common/Content';
import LectureUpload from '@/component/LectureUplaod';
import { Layout } from './style';

const LectureUploadPage: React.FC = () => {
  return (
    <Layout>
      <Content fullscreen atomInRow={1} atomCount={1} childrens={[<LectureUpload key={0} />]} />
    </Layout>
  );
};

export default LectureUploadPage;
