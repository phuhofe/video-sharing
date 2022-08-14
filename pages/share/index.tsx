import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Alert from '../alert/alert';
import Layout from '../components/layout';
import styles from './share.module.scss';

export default function Share() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [data, setData] = useState(null);
  const [isSharing, setIsSharing] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/1/posts?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      });
  }, []);

  function onShare(title: string) {
    setIsSharing(true);

    setTimeout(() => {
      setIsSharing(false);
    }, 2000);
  }

  if (!data)
    return (
      <Layout>
        <p>No profile data</p>
      </Layout>
    );

  return (
    <>
      <Layout>
        <div className={styles['share-card-title']}>Share a Youtube movie</div>
        <div className="border-2 rounded-md border-purple-500 p-20 pr-18">
          {isSharing && (
            <div className="mb-4">
              <Alert type="success">Shared Successfully;</Alert>
            </div>
          )}

          <div className="flex items-center mb-8">
            <span className="w-1/4">Youtube URL:</span>
            <input
              type="text"
              value={data.title}
              className="border-2 rounded-md border-purple-500 px-2 py-1 text-white w-3/4"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="rounded-md bg-purple-500 px-2 py-1 text-white w-3/4"
              onClick={() => onShare(data.title)}
            >
              {isSharing ? 'Sharing' : 'Share'}
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}
