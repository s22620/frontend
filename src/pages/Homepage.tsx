import { Layout } from "../components/templates/Layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useTrips } from "../hooks/useTrips";
import { NewsletterForm } from "../components/molecules/NewsletterForm";

export const Homepage = () => {
  const { data: trips, isLoading } = useTrips();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center py-10 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Odkryj nasze wyjątkowe wycieczki
        </h1>
        <p className="w-1/2 mb-8 text-lg text-gray-600">
          Zanurz się w niezapomnianych przygodach! Nasze starannie
          wyselekcjonowane wycieczki to idealne połączenie komfortu i
          ekscytujących doświadczeń. Niezależnie od tego, czy szukasz relaksu na
          rajskiej plaży, czy chcesz zdobywać górskie szczyty – mamy coś dla
          każdego miłośnika podróży. Odkryj świat z nami!
        </p>
      </section>
      <section className="flex flex-col items-center justify-center py-10 carousel-container">
        <h2 className="mb-6 text-3xl font-semibold text-center">
          Nasze najlepsze podróże!
        </h2>
        <Carousel className="w-1/2">
          <CarouselContent>
            {trips?.map((trip) => (
              <CarouselItem key={trip.id} className="w-full">
                <div className="relative">
                  <img
                    src={trip.imageSrc}
                    alt={trip.title}
                    className="object-cover w-full rounded-lg shadow-lg h-96"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-black bg-opacity-50">
                    <h3 className="text-xl font-semibold">{trip.title}</h3>
                    <p className="text-sm">{trip.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <NewsletterForm />
    </Layout>
  );
};
