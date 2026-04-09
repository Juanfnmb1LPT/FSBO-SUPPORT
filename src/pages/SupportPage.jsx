import { useState } from "react";
import { Link } from "react-router-dom";

function SupportPage() {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "there";
    const email = formData.get("email")?.toString().trim() || "your email";
    const phone = formData.get("phone")?.toString().trim() || "your phone number";

    setSubmitMessage(
      `Thank you ${name}. We will contact you at ${email} or ${phone} in less than 24 hours.`
    );
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
          <span aria-hidden="true">&larr;</span>
          Back to home
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <section className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-4">FSBO Support</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">Get Help Selling Your Home</h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Tell us a little about your situation. A specialist will follow up with practical next steps tailored to where you are in the process.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                Pricing and market positioning guidance
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                Help getting your home in front of more buyers
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                Offer review and negotiation support
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                No pressure. No commitment.
              </li>
            </ul>

            <p className="text-gray-400 mt-8 text-sm">Helpful guidance to get you selling your property.</p>
          </section>

          <section className="bg-gray-800/90 border border-gray-700 rounded-3xl p-8 sm:p-10 shadow-2xl">
            {submitMessage ? (
              <div className="text-center py-12">
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">You&apos;re all set!</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">{submitMessage}</p>
                <p className="text-sm text-gray-400">We look forward to helping you with your sale.</p>
                <button
                  type="button"
                  className="mt-8 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold"
                  onClick={() => setSubmitMessage("")}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <details open className="rounded-2xl border border-gray-700 bg-gray-900/70">
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-gray-100 flex items-center justify-between">
                    Contact Information
                    <span className="text-cyan-400">+</span>
                  </summary>
                  <div className="px-5 pb-5 space-y-4 border-t border-gray-700">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2 mt-4">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                </details>

                <details className="rounded-2xl border border-gray-700 bg-gray-900/70">
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-gray-100 flex items-center justify-between">
                    Property Details
                    <span className="text-cyan-400">+</span>
                  </summary>
                  <div className="px-5 pb-5 space-y-4 border-t border-gray-700">
                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-200 mb-2 mt-4">
                        Property Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="123 Main St"
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-200 mb-2">
                          City
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          placeholder="Dallas"
                          className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-gray-200 mb-2">
                          State
                        </label>
                        <input
                          id="state"
                          name="state"
                          type="text"
                          placeholder="TX"
                          className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-200 mb-2">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        defaultValue=""
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="" disabled>
                          Select type
                        </option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="townhome">Townhome</option>
                      </select>
                    </div>
                  </div>
                </details>

                <details className="rounded-2xl border border-gray-700 bg-gray-900/70">
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-gray-100 flex items-center justify-between">
                    Selling Timeline
                    <span className="text-cyan-400">+</span>
                  </summary>
                  <div className="px-5 pb-5 space-y-4 border-t border-gray-700">
                    <div>
                      <label htmlFor="sellingStatus" className="block text-sm font-semibold text-gray-200 mb-2 mt-4">
                        Are you currently selling your home yourself?
                      </label>
                      <select
                        id="sellingStatus"
                        name="sellingStatus"
                        defaultValue=""
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="yes">Yes</option>
                        <option value="planning">Planning to</option>
                        <option value="tried">Tried but not successful</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="price" className="block text-sm font-semibold text-gray-200 mb-2">
                        Estimated home value or asking price
                      </label>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder="$350,000"
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-200 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        defaultValue=""
                        className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="" disabled>
                          Select timeline
                        </option>
                        <option value="asap">ASAP</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>
                </details>

                <details className="rounded-2xl border border-gray-700 bg-gray-900/70">
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-gray-100 flex items-center justify-between">
                    Support Preferences
                    <span className="text-cyan-400">+</span>
                  </summary>
                  <fieldset className="px-5 pb-5 border-t border-gray-700">
                    <legend className="text-sm font-semibold text-gray-200 pt-4 mb-3">What help do you need?</legend>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="help"
                          value="pricing"
                          className="rounded border-gray-600 bg-gray-900 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 w-4 h-4"
                        />
                        <span className="text-gray-300">Pricing help</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="help"
                          value="marketing"
                          className="rounded border-gray-600 bg-gray-900 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 w-4 h-4"
                        />
                        <span className="text-gray-300">Marketing help</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="help"
                          value="negotiation"
                          className="rounded border-gray-600 bg-gray-900 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 w-4 h-4"
                        />
                        <span className="text-gray-300">Negotiation help</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="help"
                          value="full-service"
                          className="rounded border-gray-600 bg-gray-900 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0 w-4 h-4"
                        />
                        <span className="text-gray-300">Full-service agent</span>
                      </label>
                    </div>
                  </fieldset>
                </details>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl px-6 py-3 btn-primary"
                >
                  Get Support
                </button>

                <p className="text-xs text-gray-400 text-center">A specialist will reach out to help you with your sale.</p>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default SupportPage;
