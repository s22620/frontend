import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-10 text-zinc-950 bg-zinc-200">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-bold">O nas</h3>
          <p className="text-zinc-800">
            Jesteśmy zespołem pasjonatów podróży, który z pełnym zaangażowaniem
            tworzy niezapomniane wycieczki dla każdego. Dołącz do nas i odkryj
            świat!
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Nawigacja</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-zinc-800 hover:text-zinc-950">
                Strona główna
              </Link>
            </li>
            <li>
              <Link to="/trips" className="text-zinc-800 hover:text-zinc-950">
                Wycieczki
              </Link>
            </li>
            <li>
              <Link
                to="/reservations"
                className="text-zinc-800 hover:text-zinc-950"
              >
                Rezerwacje
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-zinc-800 hover:text-zinc-950">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Kontakt</h3>
          <p className="text-zinc-800">E-mail: kontakt@wycieczki.pl</p>
          <p className="text-zinc-800">Telefon: +48 123 456 789</p>
          <div className="flex mt-4 space-x-4">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 hover:text-zinc-950"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.62h3.127v-2.671c0-3.1 1.894-4.787 4.658-4.787 1.325 0 2.463.099 2.794.143v3.24h-1.916c-1.504 0-1.796.714-1.796 1.763v2.311h3.591l-.467 3.62h-3.124V24h6.13C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
              </svg>
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 hover:text-zinc-950"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.394-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.918 2.201-4.918 4.917 0 .39.045.765.127 1.124C7.728 8.087 4.1 6.128 1.671 3.149c-.427.729-.666 1.577-.666 2.476 0 1.71.87 3.214 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.622-.03-.923-.086.631 1.956 2.445 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.211 7.557 2.211 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.423-.013-.633.961-.694 1.797-1.562 2.457-2.549z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-zinc-800">
        <p>&copy; 2024 Wycieczki. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};
