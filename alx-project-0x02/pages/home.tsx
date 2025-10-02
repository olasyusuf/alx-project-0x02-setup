import type { NextPage } from "next";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to the Home Page 🏠</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Fast Performance"
          content="Our app is optimized for speed, ensuring a seamless user experience."
        />
        <Card
          title="Scalable Design"
          content="Easily scale your project with reusable components and modern frameworks."
        />
        <Card
          title="API Integration"
          content="Connect to powerful APIs to enhance your application’s functionality."
        />
      </div>
    </div>
  );
};

export default Home;