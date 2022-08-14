import Link from 'next/link';
import Layout from '../components/layout';
import YoutubeCard from '../components/youtube-card';

export default function Playlist({ posts }) {
  return (
    <>
      <Layout>
        {posts?.map((value, index) => {
          return (
            <Link
              href={{
                pathname: '/video',
                query: { id: value.id },
              }}
            >
              <div className="mb-4">
                <YoutubeCard
                  key={index}
                  title={value?.title}
                  description={value?.body}
                  user="hello user"
                  share={false}
                ></YoutubeCard>
              </div>
            </Link>
          );
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/1/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
