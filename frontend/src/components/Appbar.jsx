import axios from "axios";
import React, { useEffect, useState } from "react";

const Appbar = () => {
  const [name, setName] = useState("User");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/getmyinfo", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setName(res.data.firstName);
      });
  }, []);

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-12">VANZ UPI</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
          Hello There {name}!
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {name[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
