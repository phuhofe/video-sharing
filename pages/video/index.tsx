import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import YoutubeCard from '../components/youtube-card';

export default function Video() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [data, setData] = useState(null);
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

  if (!data)
    return (
      <Layout>
        <p>No profile data</p>
      </Layout>
    );

  return (
    <>
      <Layout>
        <YoutubeCard
          share={true}
          title={data.title}
          description={data.body}
          user="hello user"
          id={data.id}
        ></YoutubeCard>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/1/posts?id=${id}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       youtubeData: data[0],
//     },
//   };
// }
