import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("id");
  const [amount, setAmount] = useState();
  const navigate = useNavigate();
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
                <span className="text-2xl text-white">{name[0]}</span>
              </div>
              <h2>{name}</h2>
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
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
          </div>

          {/* button component */}
          <button
            className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
            onClick={() => {
              axios.post(
                "http://localhost:3000/api/v1/account/transfer",
                {
                  to: id,
                  amount: amount,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );

              navigate("/success");
            }}
          >
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
