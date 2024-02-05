import { useCallback } from "react";
import Header from "../components/Header";

export default function JoinKwis() {
  const proxy = process.env.PROXY || "http://localhost:4000";
  const join = async () => {
    await fetch(proxy + "/api/")
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          console.log(res);
        }
      });
  };

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Join a Kwis
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow-xl sm:rounded-lg sm:px-12 border-2 border-slate-100">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Kwis code
              </label>
              <div className="mt-2">
                <input
                  id="kwiscode"
                  maxLength={6}
                  name="kwiscode"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 uppercase"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={join}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
