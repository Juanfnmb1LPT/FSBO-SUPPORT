import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const valueCards = [
  {
    title: "Price Your Home Right",
    description: "Avoid overpricing or leaving money on the table.",
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Market Your Property",
    description: "Get your home in front of more buyers.",
    iconPath:
      "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
  {
    title: "Handle Offers With Confidence",
    description: "Understand negotiations so you don\u2019t lose money.",
    iconPath:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
];

const steps = [
  {
    title: "Tell us about your home",
    description: "Share basic information about your property and where you are in the process.",
  },
  {
    title: "Get tools and guidance to help you sell",
    description: "Access resources to help you price, market, and sell your home.",
  },
  {
    title: "Get help if you need it along the way",
    description: "Connect with someone who can help you move forward.",
  },
];

const painPoints = [
  "Pricing mistakes can cost you money",
  "Limited exposure means fewer buyers",
  "Negotiations and contracts can be complex",
];

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section");
    if (!sectionId) return;

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.search]);

  return (
    <>
      <Navbar />

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://photos.zillowstatic.com/fp/71754e85241612d6d84d764150f30ff1-cc_ft_1536.jpg"
            alt="Beautiful home exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Selling Your Home?
              <br />
              <span className="text-cyan-400">Get the help you need to sell it right.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 leading-relaxed">
              Learn how to price, market, and sell your home with an expert.
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Whether you&apos;re just getting started or already trying to sell, we&apos;re here to help.
            </p>
            <Link
              to="/support"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-10 py-4 text-lg font-semibold shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 btn-primary"
            >
              Start your journey
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {valueCards.map((card) => (
              <div
                key={card.title}
                className="p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={card.iconPath}></path>
                  </svg>
                </div>
                <h3 className="text-2xl text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl text-white mb-6">How It Works</h2>
            <p className="text-xl text-gray-400">Simple steps to get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative">
                <div className="text-center">
                  <div className="inline-flex w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-3xl items-center justify-center text-3xl font-semibold mb-6 shadow-lg shadow-cyan-500/20">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl text-white mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {idx < steps.length - 1 ? (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-white mb-6">Selling on your own can be challenging</h2>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 sm:p-16 shadow-xl border border-gray-700">
            <div className="space-y-8">
              {painPoints.map((point) => (
                <div key={point} className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed pt-2">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-gray-700">
              <p className="text-2xl text-center text-gray-300 leading-relaxed mb-4">We are here if you need support along the way.</p>
              <p className="text-lg text-center text-gray-400 leading-relaxed">Many homeowners start selling their property on their own, but end up needing help to close the deal.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="help"
        className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden border-y border-gray-700"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl text-white mb-8 leading-tight">Need help selling your property?</h2>
          <p className="text-2xl text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
            Get support or connect with someone who can help you move forward.
          </p>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            No pressure. Just helpful guidance. Sell smarter and keep more of your equity.
          </p>
          <Link
            to="/support"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-12 py-5 text-lg font-semibold shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 btn-primary"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
