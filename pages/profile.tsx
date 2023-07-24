import Layout from "@/components/layout/Layout"
import ProfilePage from "@/components/profile/ProfilePage"
import User from "@/models/User";
import { getSession } from "next-auth/react";

function Profile({ user }) {
  return (
    <Layout title='Profile'>
      <ProfilePage user={user} />
    </Layout>
  )
}

export default Profile

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

  const user = await User.findOne({ email: session.user.email })

  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  }

}