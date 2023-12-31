import Layout from "@/components/layout/Layout";
import TodosPage from "@/components/todos/TodosPage";
import { Todos } from "@/globalTypes";
import request from "@/services/request";
import { getSession } from 'next-auth/react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {


  const router = useRouter();
  const search = router.query.search

  const [todos, setTodos] = useState<Todos[]>();
  const [country, setCountry] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTodo = () => {
    request.getTodo()
      .then(res => {
        const listTodo = res.data.todos
        const lowerCaseTodo = typeof search === 'string' && search.toLowerCase()
        const filteredData = typeof search === 'string' ? listTodo.filter((todo: Todos) =>
          todo.title.toLowerCase().includes(lowerCaseTodo) || todo.detail.toLowerCase().includes(lowerCaseTodo)
        ) : listTodo
        setTodos(filteredData)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    getTodo()
    axios.get('https://ipapi.co/json/')
      .then((res) => setCountry(res.data.country_name))
      .catch(() => setCountry(''))
  }, [search])

  return (
    <Layout title='Home'>
      <TodosPage
        todos={todos}
        search={search}
        getTodo={getTodo}
        country={country}
        isLoading={isLoading}
      />
    </Layout>
  )
}

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