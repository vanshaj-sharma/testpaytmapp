import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Input from "../components/Input";

import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";

export const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <Input placeholder="John" label={"First Name"} />
          <Input placeholder="Doe" label={"Last Name"} />
          <Input placeholder="harkirat@gmail.com" label={"Email"} />
          <Input placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
