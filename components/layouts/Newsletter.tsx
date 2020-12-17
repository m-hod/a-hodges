import React from "react";
import Button from "../Elements/button";
import Input from "../Elements/input";

function Newsletter() {
  return (
    <div className="w-full 2xl:max-w-3/4 bg-gray-200 p-4 md:p-6 flex flex-col justify-center align-center text-center">
      <h2 className="mb-4">NEWSLETTER</h2>
      <p className="italic">Single line about advertising newsletter</p>
      <div className="mt-4 md:mt-8 flex justify-center">
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Input className="md:col-span-2 w-full" placeholder="Email Address" />
          <Button className="md:col-span-1 w-full">SIGN UP</Button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
