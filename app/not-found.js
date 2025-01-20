import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center ">
      <h1 className="mb-5">Not Found Page</h1>
     
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <Link href="/">Home back</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
