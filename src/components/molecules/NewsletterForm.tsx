import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

// Schema walidacji dla newslettera
const newsletterSchema = z.object({
  email: z
    .string()
    .email({ message: "Podaj prawidłowy adres e-mail." })
    .nonempty({ message: "Adres e-mail jest wymagany." }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export const NewsletterForm = () => {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: NewsletterFormValues) => {
    console.log("Newsletter subscribed:", data);
    // Dodaj logikę do obsługi subskrypcji (np. API call)
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 text-center bg-gray-100">
      <h2 className="mb-4 text-3xl font-semibold">Zapisz się do newslettera</h2>
      <p className="mb-8 text-lg text-gray-600">
        Bądź na bieżąco z naszymi najnowszymi ofertami i ekskluzywnymi
        promocjami.
      </p>
      <div className="w-full max-w-md">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <Input
            type="email"
            placeholder="Twój adres e-mail"
            {...form.register("email")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
          <Button type="submit" className="w-full py-2 hover:bg-blue-700">
            Zapisz się
          </Button>
        </form>
      </div>
    </section>
  );
};
