import { useState } from "react";
import type { NextPage } from "next";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Welcome to the Home Page 
      </h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        + Add New Post
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Add one above!</p>
        ) : (
          posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))
        )}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;