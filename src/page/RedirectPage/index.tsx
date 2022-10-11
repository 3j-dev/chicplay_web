import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectPage: React.FC = () => {
  const location = useLocation();
  const { url } = location.state as { url: string };
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return <div></div>;
};

export default RedirectPage;
