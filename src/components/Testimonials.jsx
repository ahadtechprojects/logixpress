import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
  { name: "Rahul Sharma", text: "Fast delivery and smooth customs clearance. Very professional service." },
  { name: "Minji Kim", text: "The updates were accurate and my package arrived safely in India." },
  { name: "Wei Zhang", text: "Reliable company, I trust them with all my exports." },
  { name: "Hiroshi Tanaka", text: "Customer support was excellent, they answered all my questions quickly." },
  { name: "Ayesha Khan", text: "Affordable shipping rates compared to others. Highly recommended!" },
  { name: "Priya Nair", text: "Delivery from Seoul to Kochi was faster than expected." },
  { name: "Jinwoo Park", text: "Very transparent tracking system. I could follow every step." },
  { name: "Chen Li", text: "Goods arrived without damage and packaging was secure." },
  { name: "Yuki Sato", text: "I loved how professional the staff was during the whole process." },
  { name: "Imran Ahmed", text: "Best shipping service I’ve used between Korea and India." },
  { name: "Anjali Mehta", text: "They handled fragile items with extra care. Impressed!" },
  { name: "Donghyun Choi", text: "Shipment updates were timely, and the staff was very polite." },
  { name: "Mei Lin", text: "Smooth international shipping experience with no delays." },
  { name: "Takeshi Nakamura", text: "Clear communication from start to finish. Will use again." },
  { name: "Saima Baloch", text: "Efficient logistics partner. They made the process stress-free." },
];


  return (
    <motion.section
      className="py-20 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-blue-700 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white border rounded-xl shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">"{r.text}"</p>
            <h4 className="mt-4 font-semibold text-blue-700">- {r.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
