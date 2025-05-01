import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Introduction() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-6 max-w-md text-center shadow-2xl rounded-2xl">
          <CardContent>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Full-Stack Web Developer
            </h2>
            <p className="text-gray-600 text-base">
              I craft seamless digital experiences with modern web technologies.
              <br />
              Passionate about building efficient, scalable, and beautiful
              solutions.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
