import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default IndexPage;