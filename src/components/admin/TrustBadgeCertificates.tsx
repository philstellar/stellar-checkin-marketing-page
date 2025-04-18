
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const certificates = [
  {
    id: 4,
    src: "/lovable-uploads/36636722-b73c-4517-b0b4-8f86fa601011.png",
    alt: "Trust Badge Certificate 4"
  },
  {
    id: 2,
    src: "/lovable-uploads/05f1c849-d684-4052-8971-994a0c72e9d6.png",
    alt: "Trust Badge Certificate 2"
  },
  {
    id: 3,
    src: "/lovable-uploads/df315b16-7211-46de-adf8-952b9517f932.png",
    alt: "Trust Badge Certificate 3"
  },
  {
    id: 1,
    src: "/lovable-uploads/a87e68a9-df58-447c-b9bf-d197457953f3.png",
    alt: "Trust Badge Certificate 1"
  }
];

const TrustBadgeCertificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.3,
                ease: "easeOut"
              }}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImage(cert.src)}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto rounded-[5px] shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute -right-2 -top-2 z-50 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrustBadgeCertificates;
