import { Smile, Truck, Award, RefreshCw, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Made with premium materials for maximum durability and comfort even in the harshest winter conditions.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Free shipping on all orders above $100. Quick delivery to keep you warm throughout the season.",
    },
    {
      icon: Smile,
      title: "Satisfaction Guarantee",
      description:
        "If you're not completely satisfied with our winter apparel, return within 30 days for a full refund.",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description:
        "Hassle-free return process with our pre-paid shipping labels and dedicated customer support.",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 bg-[#121928] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block relative mb-4">
            <motion.span
              className="absolute -top-4 -left-4 text-blue-400"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <Snowflake size={16} />
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Our Products
            </h2>
            <motion.span
              className="absolute -bottom-4 -right-4 text-blue-400"
              animate={{ rotate: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            >
              <Snowflake size={16} />
            </motion.span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're committed to providing the highest quality winter clothing
            with exceptional service and value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-[#192230] rounded-xl p-8 shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="mb-6 text-blue-400 inline-block"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.2,
                }}
              >
                <feature.icon className="h-12 w-12 text-white bg-blue-600 rounded-full p-3" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 font-medium">
            Experience the difference in our premium winter clothing collection
            today!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
