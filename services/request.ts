import api from "./api";

const request = {
    signUp: (firstName: string, email: string, password: string) => api.post('auth/signup', {
        firstName, email, password
    }),
    getTodo: () => api.get('/todos/'),
    deleteTodo: (id: string) => api.delete(`/todos/delete/${id}`),
    updateTodo: (id: string, title: string, detail: string, status: string) => api.patch(`/todos/edit/${id}`, {
        title, detail, status
    }),
    addTodo: (title: string, detail: string, status: string) => api.post('/todos', {
        title, detail, status
    }),
    getProfile: () => api.get('/profile'),
    updateProfile: (firstName: string, lastName: string, phone: string, address: string, country: string, city: string) => api.post('/profile', {
        firstName, lastName, phone, address, country, city
    })
}

export default request