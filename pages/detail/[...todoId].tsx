import DetailPage from '@/components/detail/DetailPage'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout'
import User from '@/models/User'
import connectDB from '@/utils/connectDB'
import { getSession } from 'next-auth/react'

function Detail({ todos }) {

  const router = useRouter()
  const id = router.query.todoId
  const todo = todos.length && todos.find(item => item._id === id[0])

  return (
    <Layout title='Detail'>
      <DetailPage todo={todo} />
    </Layout>
  )
}

export default Detail

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }
  await connectDB();
  const users: any = await User.find()
  const user = users.find(item => item.email === session.user.email)
  const todo = user.todos

  return {
    props: {
      todos: JSON.parse(JSON.stringify(todo))
    }
  }
}