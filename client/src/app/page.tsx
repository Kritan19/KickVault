// This is a Server Component, so we can make it async and fetch data directly.
async function getBackendMessage() {
  try {
    // Fetch data from your backend API
    const response = await fetch('http://localhost:5000', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error('Failed to fetch data from server');
    }
    
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error(error);
    // Return an error message if the fetch fails
    return "Oops! Could not connect to the server. Is it running?";
  }
}

export default async function Home() {
  // Call the function to get the message
  const message = await getBackendMessage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to KickVault</h1>
        <p className="text-xl text-gray-400 mb-8">
          The modern E-Commerce experience for shoes lovers.
        </p>
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 mt-8">
          <p className="text-lg">Message from our server:</p>
          <p className="text-2xl font-mono text-cyan-400 mt-2">{message}</p>
        </div>
      </div>
    </main>
  );
}