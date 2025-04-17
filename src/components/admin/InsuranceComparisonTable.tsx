
import React from 'react';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InsuranceComparisonTable = () => {
  const features = [
    {
      name: "Keine Gästehaftung für versehentliche Schäden",
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: "Buchungen über alle Kanäle (inkl. Direktbuchungen)",
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: "Schutz bei Schäden durch Haustiere",
      stellar: true,
      airbnb: true,
      booking: false,
      classic: false,
    },
    {
      name: "Schutz bei Mietausfall",
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: "Schäden während gewerblicher Vermietung",
      stellar: true,
      airbnb: true,
      booking: false,
      classic: false,
    },
  ];

  const StatusIcon = ({ status }: { status: boolean }) => {
    return status ? (
      <div className="flex justify-center">
        <Check className="h-6 w-6 text-apple" />
      </div>
    ) : (
      <div className="flex justify-center">
        <X className="h-6 w-6 text-red-300" />
      </div>
    );
  };

  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">In der Versicherung enthalten</TableHead>
            <TableHead className="text-center">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2024/11/stellar_tourism_innovations_gmbh_logo.jpeg" 
                alt="Stellar" 
                className="h-12 w-auto mx-auto object-contain"
              />
            </TableHead>
            <TableHead className="text-center">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Airbnb-1.png" 
                alt="Airbnb" 
                className="h-12 w-auto mx-auto object-contain" 
              />
            </TableHead>
            <TableHead className="text-center">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Booking.com_-1.png" 
                alt="Booking.com" 
                className="h-12 w-auto mx-auto object-contain" 
              />
            </TableHead>
            <TableHead className="text-center">Klassische Hausrats&#8203;versicherung</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell><StatusIcon status={feature.stellar} /></TableCell>
              <TableCell><StatusIcon status={feature.airbnb} /></TableCell>
              <TableCell><StatusIcon status={feature.booking} /></TableCell>
              <TableCell><StatusIcon status={feature.classic} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InsuranceComparisonTable;
