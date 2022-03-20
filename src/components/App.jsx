import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Go Shopping',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Something else',
      isComplete: false,
    },
  ]);
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h1 className="text-xl font-bold">Todo App</h1>

        <form action="">
          <input
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
            id="task"
            name="task"
            required="required"
            autofocus="autofocus"
          />
        </form>

        <div class="mt-4 space-y-4">
          {todos.map((todo, index) => (
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="comment"
                  name="comment"
                  type="checkbox"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <label
                for="comment"
                class="ml-3 text-sm font-medium text-gray-700"
              >
                {todo.title}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
