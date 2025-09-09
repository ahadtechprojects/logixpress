import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Truck, Bike, CheckCircle } from "lucide-react";

const fakeTrackingDB = {
  "ABC123": ["Package Received", "In Transit", "Out for Delivery", "Delivered"],
  "XYZ789": ["Package Received", "Customs Clearance", "In Transit"],
};

const statusIcons = {
  "Package Received": Package,
  "In Transit": Truck,
  "Out for Delivery": Bike,
  "Delivered": CheckCircle,
};

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState([]);

  const handleTrack = () => {
    if (fakeTrackingDB[trackingId]) {
      setStatus(fakeTrackingDB[trackingId]);
    } else {
      setStatus(["Tracking ID not found"]);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-12"
      style={{
        backgroundImage:
          "url('/cargo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Track Your Shipment
        </h2>

        {/* Input */}
        <div className="flex gap-3 mb-10">
          <input
            type="text"
            placeholder="Enter Tracking ID (try ABCD123 or XYZ789)"
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

        {/* Timeline */}
        {status.length > 0 && (
          <motion.div
            className="relative flex flex-col gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {status.map((s, i) => {
              const Icon = statusIcons[s] || Package;
              const isDelivered = s === "Delivered";
              const isCurrent = i === status.length - 1 && !isDelivered;
              const isCompleted = i < status.length - 1;

              return (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.3 }}
                >
                  {/* Pin */}
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
                    {/* Line */}
                    {i < status.length - 1 && (
                      <div
                        className={`h-10 w-1 ${
                          isDelivered || isCompleted
                            ? "bg-blue-600"
                            : "bg-gray-300"
                        }`}
                      ></div>
                    )}
                  </div>

                  {/* Label */}
                  <p
                    className={`font-medium text-lg ${
                      isDelivered
                        ? "text-green-600"
                        : isCurrent
                        ? "text-white"
                        : isCompleted
                        ? "text-white"
                        : "text-white"
                    }`}
                  >
                    {s}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
