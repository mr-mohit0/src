import { RxBookmarkFilled } from "react-icons/rx";
const card = () => {
  return (
    < >
      <nav class="flex justify-center space-x-4">
        <a
          href="/dashboard"
          class="font-me rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Home
        </a>
        <a
          href="/team"
          class="font-me rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Team
        </a>
        <a
          href="/projects"
          class="font-me rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Projects
        </a>
        <a
          href="/reports"
          class="font-me rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Reports
        </a>
      </nav>
      <div className="flex flex-col gap-2 p-8 w-2xl shadow-2xl mx-auto sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ... rounded-lg px-4 py-1 text-sm font-semibold">
            Message
          </button>
        </div>
        <button className="bg-sky-500 hover:bg-sky-700 ... w-2xs rounded-2xl">
          Save changes
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 size-6/16 mx-auto">
        <div>
          <span className="inline-flex  rounded-md bg-indigo-500 p-2 shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <a href="" download="">
                <RxBookmarkFilled size={"1.5rem"} />
              </a>
            </svg>
          </span>
        </div>
        <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
          Writes upside-down
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className=" justify-center mx-auto">
        <div className="flex items-center space-x-2 text-base  ">
          <h4 className="font-semibold text-slate-900">Contributors</h4>
          <span className="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">
            204
          </span>
        </div>
        <div className="mt-3 flex -space-x-2 overflow-hidden p-2">
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="mt-3 text-sm font-medium">
          <a href="#" class="text-blue-500">
            + 198 others
          </a>
        </div>
      </div>
      <button class="dark:md:hover:bg-fuchsia-600">Save changes</button>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default card;
