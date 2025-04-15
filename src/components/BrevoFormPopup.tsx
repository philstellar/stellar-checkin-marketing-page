import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().email({ message: "Bitte gib eine korrekte E-Mail Adresse an." }),
  newsletterAccepted: z.boolean().default(false),
})

interface BrevoFormPopupProps {
  show: boolean;
  onClose: () => void;
}

const BrevoFormPopup: React.FC<BrevoFormPopupProps> = ({ show, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      newsletterAccepted: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate a delay for the submission process
    await new Promise((resolve) => setTimeout(resolve, 1500));
  
    try {
      const response = await fetch('/api/brevo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        toast({
          title: "Erfolgreich!",
          description: "Du hast dich erfolgreich für unseren Newsletter registriert.",
        })
        onClose();
      } else {
        toast({
          variant: "destructive",
          title: "Oh oh!",
          description: "Da ist etwas schief gelaufen. Bitte versuche es später noch einmal.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh oh!",
        description: "Da ist etwas schief gelaufen. Bitte versuche es später noch einmal.",
      })
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-royal">Bleib auf dem Laufenden!</h2>
        <p className="text-royal-700 mb-6">Abonniere unseren Newsletter und erhalte exklusive Angebote und die neuesten Updates.</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail Adresse</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newsletterAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Ich akzeptiere die Datenschutzbestimmungen</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Einen Moment..." : "Abonnieren"}
            </Button>
          </form>
        </Form>

        <button onClick={onClose} className="mt-4 text-gray-600 hover:text-gray-800">
          Schließen
        </button>
      </div>
    </div>
  );
};

export default BrevoFormPopup;
