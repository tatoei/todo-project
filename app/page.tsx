"use client"
import TodoList from "./components/todo-list";

export default function Home() {

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <div className="w-full">
        <TodoList />
      </div>
    </div>
  );
}
