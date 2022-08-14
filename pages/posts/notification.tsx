import Head from 'next/head';
import Link from 'next/link';
import Alert from '../alert/alert';
import Layout from '../components/layout';

export default function Notification() {
  return (
    <>
      <Layout>
        <div className='border-2 border-sky-500'>
          <Alert type="success">Success</Alert>

          <Alert type="error">Error</Alert>
        </div>
      </Layout>
    </>
  );
}
