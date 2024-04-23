import React from "react";

const SendMoney = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          {/* Heading component */}
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-bold text-3xl text-center font-bold">
              Send Money
            </h2>
          </div>

          {/* Name component */}
          <div className="pt-2 pb-1">
            <div className="flex items-center space-x-4">
              <div className="rounded-full h-12 w-12 bg-green-500 flex items-center justify-center ">
                <span className="text-2xl text-white">U</span>
              </div>
              <h2>User Name</h2>
            </div>
          </div>

          {/* input component */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="amount"
              >
                Amount (in Rs.)
              </label>
              <input
                type="number"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                id="amount"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* button component */}
          <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
