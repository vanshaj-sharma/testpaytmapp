import React, { useState } from "react";
import Button from "./Button";

const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Vanshaj",
      lastName: "Sharma",
      _id: 1,
    },
  ]);

  return (
    <>
      <div className="font-bold mt-4 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Users: "
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div className="pt-2">
        {users && users.map((user) => <DisplayUser user={user} />)}
      </div>
    </>
  );
};

const DisplayUser = ({ user }) => {
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
        <Button label={"Send Money"} />
      </div>
    </div>
  );
};

export default Users;
