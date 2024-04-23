import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");

  //fetch info on current user
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

  //fill
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setUsers(res.data.user.filter((u) => u.firstName != name));
        //removed current user information
        // setUsers(users.filter((u) => u.firstName != name));
      });
  }, [filter, name]);

  return (
    <>
      <div className="font-bold mt-4 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Users: "
          className="w-full px-2 py-1 border rounded border-slate-200"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <div className="pt-2">
        {users &&
          users.map((user) => <DisplayUser key={user._id} user={user} />)}
      </div>
    </>
  );
};

const DisplayUser = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between pt-1">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg flex justify-center  bg-slate-200 mt-1 mr-1">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          {user.firstName} {user.lastName}
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          label={"Send Money"}
          onClick={(e) => {
            navigate(`/send?id${user._id}&name=${user.firstName}`);
          }}
        />
      </div>
    </div>
  );
};

export default Users;
