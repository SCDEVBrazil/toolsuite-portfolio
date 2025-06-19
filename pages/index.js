export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          ToolSuite Portfolio
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to our utility tools collection
        </p>
        <a 
          href="/password"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Password Generator
        </a>
      </div>
    </div>
  );
}