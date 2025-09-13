// About.jsx
import React from "react";
import { Briefcase, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-10">
      <div className="max-w-5xl mx-auto space-y-8 mt-10">
        <header>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">About Us</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">
            We are a trusted Indian shipping and logistics network connecting businesses with the world. With decades of expertise in sea, land, and air freight, we specialize in reliable connections to South Korea and beyond. Our mission is to simplify global trade with professionalism, transparency, and efficiency.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <Briefcase className="w-8 h-8 text-indigo-600 mb-4" />
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">Our Experience</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Decades of expertise in international trade, port operations, and global shipping partnerships.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <Users className="w-8 h-8 text-indigo-600 mb-4" />
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">Our People</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              A dedicated team of logistics professionals committed to delivering quality service and customer satisfaction.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <Globe className="w-8 h-8 text-indigo-600 mb-4" />
            <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">Our Reach</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Operating across Indian ports, inland hubs, and global shipping routes with a focus on East Asia.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
