// src/pages/Tracking.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Package, Plane, Ship, Truck, Bike, CheckCircle } from "lucide-react";
import { shipmentsDB } from "../database";

// --- Icon Mapping ---
const statusIcons = {
  "Package Received in Seoul (Oksu-dong, Seongdong-gu)": Package,
  "Package Received in Seoul": Package,
  "Package Received in Seoul (Gangnam)": Package,
  "Arrived at Incheon International Airport": Plane,
  "Air Shipment in Flight to India": Plane,
  "In Flight to India": Plane,
  "Arrived at Mumbai Airport – Customs Clearance": Plane,
  "Arrived at Delhi Airport – Customs Clearance": Plane,
  "Arrived at Bengaluru Airport – Customs Clearance": Plane,
  "At Busan Port – Export Loading": Ship,
  "On Vessel – En route to India": Ship,
  "Arrived at Nhava Sheva Port (Mumbai) – Customs Clearance": Ship,
  "Arrived at Chennai Port – Customs Clearance": Ship,
  "Arrived at Kochi Port – Customs Clearance": Ship,
  "Inland Transit to Mira Bhayandar": Truck,
  "Inland Transit to Tamil Nadu": Truck,
  "Inland Transit to Kerala": Truck,
  "Out for Delivery → Mira Bhayandar, Maharashtra → Delivered": Bike,
  "Out for Delivery → Chennai → Delivered": Bike,
  "Out for Delivery → Kochi → Delivered": Bike,
  "Out for Delivery → New Delhi → Delivered": Bike,
  "Out for Delivery → Bengaluru → Delivered": Bike,
  Delivered: CheckCircle,
};

// --- Get India Current Time ---
const getIndiaNow = () => {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
};

// --- Progress Calculator ---
const calculateProgress = (shipment) => {
  if (!shipment) return { steps: [], percent: 0 };

  const start = new Date(shipment.startDate);
  const totalDuration = shipment.durationMinutes || (shipment.mode === "air" ? 1440 : 20 * 1440); // fallback

  const now = getIndiaNow();

  // ensure progress is between 0% and 100%
  const elapsedMinutes = Math.max(0, Math.min(totalDuration, Math.floor((now - start) / (1000 * 60))));

  const timeline = shipment.routeTimeline[shipment.mode];
  const totalSteps = timeline.length;

  // smooth percent
  const percent = (elapsedMinutes / totalDuration) * 100;

  // steps completed based on proportion of total duration
  const stepsCompleted = Math.min(
    totalSteps,
    Math.floor((elapsedMinutes / totalDuration) * totalSteps) + 1
  );

  return {
    steps: timeline.slice(0, stepsCompleted),
    percent: Math.round(percent),
    durationDays: Math.ceil(totalDuration / 1440),
  };
};

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [progress, setProgress] = useState({ steps: [], percent: 0, durationDays: 0 });

  const handleTrack = () => {
    const found = shipmentsDB[trackingId];
    if (!found) {
      setShipment(null);
      setProgress({ steps: ["Tracking ID not found"], percent: 0, durationDays: 0 });
      return;
    }

    setShipment(found);
    setProgress(calculateProgress(found));
  };

  // Auto-update progress smoothly
  useEffect(() => {
    if (!shipment) return;
    const interval = setInterval(() => {
      setProgress(calculateProgress(shipment));
    }, 10000);
    return () => clearInterval(interval);
  }, [shipment]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-12"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}/cargo.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Track Your Shipment
        </h2>

        <div className="flex gap-3 mb-10">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 shadow focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handleTrack}
            className="bg-blue-700 text-white px-6 rounded-lg hover:bg-blue-800 transition shadow"
          >
            Track
          </button>
        </div>

        {shipment && (
          <div className="mb-8 text-white">
            <h3 className="text-xl font-semibold mb-2">Shipment Details</h3>
            <p>
              <span className="font-bold">Mode:</span> {shipment.mode.toUpperCase()}
            </p>
            <p>
              <span className="font-bold">Start Date:</span>{" "}
              {new Date(shipment.startDate).toLocaleDateString("en-GB", { timeZone: "Asia/Kolkata" })}
            </p>
            <p>
              <span className="font-bold">Duration:</span> {progress.durationDays} {progress.durationDays === 1 ? "day" : "days"}
            </p>
            <p>
              <span className="font-bold">Package:</span> {shipment.packageDetails.join(", ")}
            </p>
          </div>
        )}

        {progress.steps.length > 0 && (
          <motion.div className="relative flex flex-col gap-8 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            {progress.steps.map((s, i) => {
              const Icon = statusIcons[s] || Package;
              const isDelivered = s.includes("Delivered") || s === "Delivered";
              const isCurrent = i === progress.steps.length - 1 && !isDelivered;
              const isCompleted = i < progress.steps.length - 1;

              return (
                <motion.div key={i} className="flex items-center gap-4" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.3 }}>
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                        isDelivered
                          ? "bg-green-600 border-green-600 text-white"
                          : isCurrent
                          ? "bg-blue-700 border-blue-700 text-white"
                          : isCompleted
                          ? "bg-blue-100 border-blue-600 text-blue-600"
                          : "bg-gray-200 border-gray-400 text-gray-600"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    {i < progress.steps.length - 1 && <div className={`h-10 w-1 ${isDelivered || isCompleted ? "bg-blue-600" : "bg-gray-300"}`}></div>}
                  </div>
                  <p className={`font-medium text-lg ${isDelivered ? "text-green-600" : "text-white"}`}>{s}</p>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {shipment && (
          <div className="w-full relative bg-gray-300/40 rounded-full h-4 overflow-hidden">
            <div className="bg-blue-600 h-4 rounded-full transition-all duration-500" style={{ width: `${progress.percent}%` }}></div>

            {/* Moving icon */}
            {progress.percent < 100 && (
              <>
                {shipment.mode === "air" && (
                  <Plane className="absolute top-1/2 -translate-y-1/2 text-white transition-all duration-10000 ease-linear" style={{ left: `calc(${progress.percent}% - 10px)` }} size={22} />
                )}
                {shipment.mode === "sea" && (
                  <Ship className="absolute top-1/2 -translate-y-1/2 text-white transition-all duration-10000 ease-linear" style={{ left: `calc(${progress.percent}% - 12px)` }} size={24} />
                )}
              </>
            )}

            <p className="text-center text-white mt-2 font-semibold">
              {progress.percent < 100 ? `${progress.percent.toFixed(1)}% In Progress` : "Delivered ✅"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
