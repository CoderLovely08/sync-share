import React from "react";
import Bullet from "../components/Bullet";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center items-center max-md:py-2 py-6">
      <div className="max-w-3xl text-center border shadow-md p-8 rounded-md bg-white">
        <h1 className="text-4xl font-bold mb-4">Share your files gracefully</h1>
        <p className="text-lg mb-2">
          This is a free and open-source tool to share your files securely over
          the internet.
        </p>
        {/* Features of the App */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <small className="flex justify-center m-4">
            <ul className="text-left">
              <li>
                <Bullet /> End-to-end encryption for maximum security.
              </li>
              <li>
                <Bullet /> User-friendly interface for easy navigation.
              </li>
              <li>
                <Bullet /> Supports a wide range of file formats.
              </li>
              <li>
                <Bullet /> Accessible from any device with an internet
                connection.
              </li>
              <li>
                <Bullet /> Share files in one to many manner.
              </li>
            </ul>
          </small>
        </div>
        <div className="flex justify-center">
          <Button label={"Get Started"} variant={"contained"} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
