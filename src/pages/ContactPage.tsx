import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Layout } from "../components/templates/Layout";

// Schema walidacji formularza przy użyciu zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Imię musi mieć przynajmniej 2 znaki." }),
  email: z
    .string()
    .email({ message: "Wpisz poprawny adres e-mail." })
    .nonempty({ message: "E-mail jest wymagany." }),
  message: z
    .string()
    .min(10, { message: "Wiadomość musi mieć przynajmniej 10 znaków." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactPage = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form data:", data);
    // Możesz dodać tutaj logikę wysyłania wiadomości
  };

  return (
    <Layout>
      <section className="py-10">
        <h1 className="mb-6 text-4xl font-bold text-center">
          Skontaktuj się z nami
        </h1>
        <p className="mb-8 text-lg text-center text-gray-600">
          Masz pytania? Wypełnij formularz, a skontaktujemy się z Tobą tak
          szybko, jak to możliwe.
        </p>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imię</FormLabel>
                    <FormControl>
                      <Input placeholder="Twoje imię" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Twój e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wiadomość</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Twoja wiadomość" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full mt-4">
                Wyślij wiadomość
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </Layout>
  );
};
