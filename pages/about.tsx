import AboutPage from '@/components/about/AboutPage'
import Layout from '@/components/layout/Layout'
import { getSession } from 'next-auth/react';

function About() {
    return (
        <Layout title='About'>
            <AboutPage />
        </Layout>
    )
}

export default About

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  return { props: {} }
}