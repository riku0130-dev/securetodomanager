import axios from 'axios';

const API_URL = '/api/todos';

const createTodo = async (todoData) => {
    const response = await axios.post(API_URL, todoData);
    return response.data;
};

export default {
    createTodo,
};
