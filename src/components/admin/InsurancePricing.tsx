
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brush, Banknote, Paintbrush, PawPrint } from 'lucide-react';

const InsurancePricing = () => {
  return (
    <div className="w-full">
      <div className="rounded-lg border bg-white w-full overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px] font-bold text-black text-left">
                Maximale Deckungssumme
              </TableHead>
              <TableHead className="text-center font-bold text-black">€ 5.000</TableHead>
              <TableHead className="text-center font-bold text-black">€ 10.000</TableHead>
              <TableHead className="text-center font-bold text-black">€ 50.000</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-left">
                Preis pro Nacht<br />
                (plus Versicherungssteuer)
              </TableCell>
              <TableCell className="text-center">€ 2,82</TableCell>
              <TableCell className="text-center">€ 3,62</TableCell>
              <TableCell className="text-center">€ 4,91</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">Deckung (SB €100)</TableCell>
              <TableCell colSpan={3} className="text-left">
                Schäden an Inventar und Gebäuden zum Wiederbeschaffungswert
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">Gäste-Regress</TableCell>
              <TableCell colSpan={3} className="text-left">
                Nur bei vorsätzlicher Beschädigung
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left align-top" rowSpan={4}>
                Zusätzliche Abdeckung<br />(bis zu)
              </TableCell>
              <TableCell className="text-left">
                <Paintbrush className="h-6 w-6 mb-2" />
              </TableCell>
              <TableCell colSpan={2} className="text-left">
                Zusätzliche Reinigungskosten bis zu € 1.000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">
                <Brush className="h-6 w-6 mb-2" />
              </TableCell>
              <TableCell colSpan={2} className="text-left">
                Kunstwerke und Wertsachen bis zu € 10.000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">
                <Banknote className="h-6 w-6 mb-2" />
              </TableCell>
              <TableCell colSpan={2} className="text-left">
                Mietausfall bis zu € 5.000 (oder 21 Tage)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">
                <PawPrint className="h-6 w-6 mb-2" />
              </TableCell>
              <TableCell colSpan={2} className="text-left">
                Durch Haustiere verursachte Schäden bis zu € 5.000
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InsurancePricing;
