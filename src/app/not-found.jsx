import Link from "next/link";
import { FaCoffee } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4">
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-red-500">404</h1>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-3 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="btn btn-primary mt-6 px-6">Back to Home</button>
      </Link>

      {/* Optional subtle animation */}
      <div className="mt-10 text-6xl animate-bounce"><FaCoffee color="red"  /></div>
    </div>
  );
};

export default NotFoundPage;
