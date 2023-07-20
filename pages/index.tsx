import Layout from "@/components/layout/Layout";
import TodosPage from "@/components/todos/TodosPage";

export default function Home() {
  return (
    <Layout title='Home'>
      <TodosPage />
    </Layout>
  )
}
