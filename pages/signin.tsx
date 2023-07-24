import Layout from "@/components/register/Layout"
import SignInPage from "@/components/register/signin/SignInPage"
import { getSession } from 'next-auth/react'

function Signin() {
    return (
        <Layout title="SignUp">
            <SignInPage />
        </Layout>
    )
}

export default Signin

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

    return { props: {} }
}