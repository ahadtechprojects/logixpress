// Services.jsx
import React from "react";
import { Ship, Truck, Plane, Package } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Our Services</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">
            We provide comprehensive logistics solutions tailored to businesses seeking seamless connections between India, Korea, and global markets. Our services span across sea, land, and air freight with end-to-end support.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <Ship className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">Sea Freight</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Full-container and less-than-container load options for bulk shipments across international waters.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <Truck className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">Land Transport</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Efficient trucking and rail solutions across India, ensuring last-mile and cross-border connectivity.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <Plane className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">Air Freight</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Time-sensitive deliveries with direct air cargo routes linking Indian and Korean hubs.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <Package className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">Customs & Warehousing</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Support for customs clearance, bonded storage, and secure warehousing at strategic locations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
