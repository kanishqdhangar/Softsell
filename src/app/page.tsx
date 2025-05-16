export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 md:px-20">
      {/* Hero Section */}
      <section className="max-w-4xl text-center space-y-6 py-20">
        <h1 className="text-5xl font-extrabold leading-tight">
          Unlock the Value of Your Unused Software Licenses
        </h1>
        <p className="text-xl max-w-xl mx-auto opacity-90">
          Sell your software licenses quickly and securely with SoftSell. Get instant valuation and fast payouts.
        </p>
        <button className="mt-6 bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get a Quote
        </button>
      </section>

      {/* How It Works Section */}
      <section className="bg-white text-gray-800 py-20 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="text-center px-4">
              <div className="text-5xl mb-4">📤</div>
              <h3 className="text-xl font-semibold mb-2">Upload License</h3>
              <p className="text-gray-600">Submit your unused software license in just a few clicks.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center px-4">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Get Valuation</h3>
              <p className="text-gray-600">
                We instantly evaluate your license&apos;s resale value.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center px-4">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
              <p className="text-gray-600">
                Receive payment directly to your preferred method.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
