import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-narrow flex min-h-screen flex-col justify-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-5xl">This page doesn't exist.</h1>
      <Link to="/" className="link mt-8 self-start text-muted-foreground">
        Back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
