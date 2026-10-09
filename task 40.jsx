export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* Header */}
      <header className="mb-4 rounded-lg bg-blue-600 p-5 text-2xl font-bold text-white">
        hello World
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* Sidebar */}
        <aside className="rounded-lg bg-white p-5 shadow">
          <h2 className="text-xl font-bold">Menu</h2>
          <p className="mt-3">Dashboard</p>
          <p>Courses</p>
          <p>Projects</p>
          <p>Contact</p>
        </aside>

        {/* Main Content */}
        <main className="rounded-lg bg-white p-5 shadow md:col-span-2">
          <h1 className="text-3xl font-bold">
            Explore Technology
          </h1>

          <p className="mt-3 text-gray-600">
            Learn about web development and modern technologies.
          </p>

          {/* Cards */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="rounded bg-blue-100 p-5">
              <h3 className="font-bold">HTML</h3>
              <p>Web structure</p>
            </div>

            <div className="rounded bg-green-100 p-5">
              <h3 className="font-bold">CSS</h3>
              <p>Web styling</p>
            </div>

            <div className="rounded bg-yellow-100 p-5">
              <h3 className="font-bold">React</h3>
              <p>UI development</p>
            </div>

          </div>
        </main>

      </div>

      {/* Footer */}
      <footer className="mt-4 rounded-lg bg-gray-800 p-5 text-center text-white">
        © 2026 World 
      </footer>

    </div>
  );
}
