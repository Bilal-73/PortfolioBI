import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-wide flex min-h-screen flex-col items-start justify-center">
      <span className="sticker -rotate-3 bg-pop-pink">404</span>
      <h1 className="mt-6 text-5xl font-extrabold sm:text-7xl">
        This page <span className="hl">doesn't</span> exist.
      </h1>
      <p className="mt-4 font-hand text-2xl">probably my fault, not yours</p>
      <Link to="/" className="btn-pop btn-pop-orange mt-8">
        Back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
