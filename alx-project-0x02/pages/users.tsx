import React from "react";
import type { NextPage, GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        {users.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        ) : (
          <p>No users available.</p>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const users: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: { users },
  };
};

export default Users;