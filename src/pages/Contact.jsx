import React from "react";
import { Mail, Phone, Globe, MapPin, Search } from "lucide-react";
import { FaBuilding } from "react-icons/fa";

// Contact.jsx
// Formal, modern contact list for Indian shipping companies (sea + land)
// TailwindCSS is used for styling. Replace placeholder data with real contact details.

export default function Contact() {
  const companies = [
    {
      id: 1,
      name: "Shipping Corporation of India",
      type: "Sea / International Lines",
      phone: "+91 24 8533 5859",
      email: "inquiries@sci.co.in",
      address: "Mumbai Port Area, Mumbai, Maharashtra",
      note: "National carrier — established international liner services."
    },
    {
      id: 2,
      name: "Great Eastern Shipping Co. Ltd.",
      type: "Sea / Tankers & Dry Cargo",
      phone: "+91 22 7509 9243",
      email: "contact@greatship.com",
      website: "https://www.greatship.com",
      address: "Andheri East, Mumbai, Maharashtra",
      note: "Private shipping major with global operations."
    },
    {
      id: 3,
      name: "TCI Seaways",
      type: "Coastal & Container Shipping / Multimodal",
      phone: "+91 138 9886 360",
      email: "sea@tciseaways.com",
      website: "https://www.tciseaways.com",
      address: "Gurugram / JNPT network",
      note: "Good for container services and coastal-to-international transshipment."
    },
    {
      id: 4,
      name: "Delhivery",
      type: "Land / E‑commerce Logistics (Intl. partners)",
      phone: "+91 80 0902 8081",
      email: "support@delhivery.com",
      website: "https://www.delhivery.com",
      address: "Multiple hubs across India",
      note: "Domestic leader; offers international shipping through partners."
    },
    {
      id: 5,
      name: "IndianXpress",
      type: "Land & Air / International (DHL network)",
      phone: "+91 22 0001 5996",
      email: "customerservice@indianxpress.com",
      website: "https://www.bluedart.com",
      address: "Mumbai, Chennai, Delhi hubs",
      note: "Strong express network; good for parcels to Korea via air partners."
    },
    {
      id: 6,
      name: "Essar Shipping",
      type: "Sea / Offshore & Bulk",
      phone: "+91 28 4047 8884",
      email: "info@essarshipping.com",
      website: "https://www.essar.com",
      address: "Mumbai",
      note: "Project & bulk shipments — contact for heavier cargo."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-10">
      <header className="max-w-6xl mx-auto mb-8 mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-slate-100">
              IndianXpress — Shipping & Logistics Contacts
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Formal directory for sea + land shippers that commonly handle international freight (example: India → South Korea). Replace placeholders with official company details before publishing.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <div className="relative">
              <input
                aria-label="Search companies"
                placeholder="Search company, city or service"
                className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                // Note: search behavior can be wired to local state / filtering.
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: contact cards */}
        <section className="lg:col-span-2 space-y-4">
          {companies.map((c) => (
            <article
              key={c.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-5 shadow-sm"
              aria-labelledby={`company-${c.id}-name`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                    <FaBuilding className="w-7 h-7 text-indigo-700 dark:text-indigo-300" />
                  </div>
                </div>

                <div>
                  <h2 id={`company-${c.id}-name`} className="text-lg font-medium text-slate-900 dark:text-slate-100">
                    {c.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{c.type}</p>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{c.note}</p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <a href={`tel:${c.phone}`} className="underline-offset-2 hover:underline">
                        {c.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <a href={`mailto:${c.email}`} className="underline-offset-2 hover:underline">
                        {c.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="truncate max-w-xs block">{c.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex items-center gap-3">
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-transparent bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Call
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700/90"
                >
                  Email
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Right column: quick info, export, notes */}
        <aside className="space-y-4">
          <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Directory Summary</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Services • Includes sea (liners, bulk) and land (express, e‑commerce) providers.</p>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-xs text-slate-400">Countries served</dt>
                <dd className="font-medium text-slate-700 dark:text-slate-200">South Korea & global</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Modes</dt>
                <dd className="font-medium text-slate-700 dark:text-slate-200">Sea · Road · Air (partners)</dd>
              </div>
            </dl>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-3 py-2 rounded-md bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-700 text-sm">Export CSV</button>
              <button className="px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">Request Quote</button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Notes & Best Practices</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
              <li>Confirm HS codes & customs duties for Korea before booking.</li>
              <li>Ask for door‑to‑door vs. port‑to‑port quotes to compare rates fairly.</li>
              <li>Request transit times and container cut‑off schedules in writing.</li>
            </ul>
          </div>

          <div className="hidden lg:block bg-gradient-to-b from-indigo-50/40 dark:from-indigo-900/20 border border-slate-100 dark:border-slate-700 rounded-2xl p-4">
            <h5 className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">Compliance</h5>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">Ensure all export documentation (commercial invoice, packing list, bill of lading / airway bill) is complete for Korea Customs clearance.</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
