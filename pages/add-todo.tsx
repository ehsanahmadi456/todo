import AddTodoPage from "@/components/addTodo/AddTodoPage"
import Layout from "@/components/layout/Layout"
import { getSession } from "next-auth/react";

function Add() {
  return (
    <Layout title='Add Todo'>
      <AddTodoPage />
    </Layout>
  )
}

export default Add

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