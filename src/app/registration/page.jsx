"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  let [formValue, setFormValue] = useState({
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValue.email) {
      toast("ইমেইল, ঠিকানা এবং পাসওয়ার্ড প্রয়োজনীয় ইনপুট");
    } else {
      setLoader(true);
      const config = { method: "POST", body: JSON.stringify(formValue) };
      const response = await fetch("/api/registration", config);
      const json = await response.json();
      if (json["status"] === true) {
        toast("আপনার ইমেইলে 4 ডিজিট ভেরিফিকেশন পিন পাঠানো হয়েছে");
        setLoader(false);
        router.push(`/otp?email=${formValue.email}`);
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-no-repeat bg-cover bg-center relative login-background">
          <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
          <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
              <div className="self-start hidden lg:flex flex-col  text-white">
                <img src="" className="mb-3" />
                <h1 className="mb-3 font-bold text-2xl">
                Welcome to our website.
                </h1>
                <p className="pr-3">
                In all living beings, humans are the most complete. However, they are born the most incomplete. A tiger brings its prey, a deer, from nature's treasury as 
                a dowry for its life's journey. When humans come to the realm of living beings, they are seen with empty hands. Humans have already exhausted nature's resources in the act of creation even before their arrival.
                 Abundant flesh, tough skin, and powerful limbs that once dominated the earth's surface have now become burdensome to the earth. It is evident that excess is inevitable.
                </p>
              </div>
            </div>
            <div className="flex justify-center self-center  z-10">
              <div className="p-12 bg-white mx-auto rounded-2xl w-100 z-50">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    নিবন্ধন করুন
                  </h3>
                  <p className="text-gray-500">
                    আপনার নিজের অ্যাকাউন্ট তৈরি করুন
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-700 tracking-wide font-semibold">
                      ইমেইল
                    </label>
                    <input
                      value={formValue.email}
                      onChange={(e) => {
                        handleChange("email", e.target.value);
                      }}
                      className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="email"
                      placeholder="ইমেইল দিন"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-700 tracking-wide font-semibold">
                      ঠিকানা
                    </label>
                    <textarea
                      value={formValue.address}
                      onChange={(e) => {
                        handleChange("address", e.target.value);
                      }}
                      className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      placeholder="ঠিকানা দিন"
                      required
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="mb-5 text-sm font-semibold text-gray-700 tracking-wide">
                      পাসওয়ার্ড
                    </label>
                    <input
                      value={formValue.password}
                      onChange={(e) => {
                        handleChange("password", e.target.value);
                      }}
                      type="password"
                      className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      placeholder="পাসওয়ার্ড দিন"
                      required
                    />
                  </div>

                  <div>
                    <button
                      disabled={loader}
                      type="submit"
                      className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      {loader ? (
                        <span className="loading loading-spinner"></span>
                      ) : (
                        ""
                      )}
                      &nbsp;&nbsp;নিবন্ধন করুন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default page;
