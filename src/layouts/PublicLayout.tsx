import { Link, Outlet } from '@tanstack/react-router';

export const PublicLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/">
          <h1 className="text-xl font-semibold uppercase">Lorem Ipsum</h1>
        </Link>
        <nav className="text-lg">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex grow flex-col">
        <Outlet />
      </main>
    </div>
  );
};
