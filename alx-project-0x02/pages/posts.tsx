import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await response.json();

      // Map API response to PostProps structure
      const formattedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </main>
    </div>
  );
};

export default Posts;