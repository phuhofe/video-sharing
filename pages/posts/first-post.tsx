import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function FirstPost({ postDetail }) {
  return (
    <>
      <Layout>
        <h2> {postDetail.title} </h2>
        <p>{postDetail.body}</p>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const data = await res.json();

  // Pass data to the page via props
  return {
    props: {
      postDetail: data,
    },
  };
}
