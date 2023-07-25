import Layout from "@/components/layout/Layout"
import ProfilePage from "@/components/profile/ProfilePage"
import { getSession } from "next-auth/react";

function Profile() {
  return (
    <Layout title='Profile'>
      <ProfilePage />
    </Layout>
  )
}

export default Profile;

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