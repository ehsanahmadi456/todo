import Layout from "@/components/register/Layout"
import SignUpPage from "@/components/register/signup/SignUpPage"
import { getSession } from 'next-auth/react';

function Signup() {
  return (
    <Layout title="SignUp">
      <SignUpPage />
    </Layout>
  )
}

export default Signup;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return { props: {} };
}