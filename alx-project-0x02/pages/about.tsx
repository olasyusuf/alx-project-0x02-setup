import React from "react";
import type { NextPage } from "next";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
        <Header />
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="text-gray-600">Experimenting with reusable Button component</p>

      <div className="flex space-x-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default About;