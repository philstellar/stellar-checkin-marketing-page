
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
      <Check className="h-6 w-6 text-apple" />
    ) : (
      <X className="h-6 w-6 text-red-300" />
    );
  };

  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">In der Versicherung enthalten</TableHead>
            <TableHead className="text-center">
              <img src="/lovable-uploads/f49ae289-5dbb-4a52-bdaa-86cd9ce6f6c1.png" alt="Stellar" className="h-12 w-auto mx-auto" />
            </TableHead>
            <TableHead className="text-center">
              <div className="h-12 w-12 mx-auto">
                <svg viewBox="0 0 24 24" className="h-full w-full text-[#FF5A5F]">
                  <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm0-19.5c-4.9 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 17.5c-4.7 0-8.5-3.8-8.5-8.5S7.3 4.5 12 4.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/>
                </svg>
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="h-12 w-12 mx-auto bg-[#003580] flex items-center justify-center">
                <span className="text-white font-bold">B.</span>
              </div>
            </TableHead>
            <TableHead className="text-center">Klassische Hausrats&#8203;versicherung</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell className="text-center"><StatusIcon status={feature.stellar} /></TableCell>
              <TableCell className="text-center"><StatusIcon status={feature.airbnb} /></TableCell>
              <TableCell className="text-center"><StatusIcon status={feature.booking} /></TableCell>
              <TableCell className="text-center"><StatusIcon status={feature.classic} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InsuranceComparisonTable;
