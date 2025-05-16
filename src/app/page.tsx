import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 md:px-20">
      {/* Hero Content */}
      <section className="max-w-4xl text-center space-y-6">
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
    </main>
  )
}
