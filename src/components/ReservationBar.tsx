import { CalendarDays, Clock3, Users } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

function localDateString(date: Date) {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

export default function ReservationBar() {
  const { isEnglish } = useLanguage();
  const today = localDateString(new Date());
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleCheckIn = (value: string) => {
    setCheckIn(value);
    if (checkOut && checkOut <= value) setCheckOut('');
  };

  return (
    <section id="book" className="relative z-20 bg-stone-100 px-4 pb-10 md:px-8 md:pb-14">
      <div className="mx-auto max-w-6xl -translate-y-5 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_18px_55px_rgba(28,25,23,0.16)] md:-translate-y-8">
        <div className="border-b border-stone-100 px-6 py-5 text-center md:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            {isEnglish ? 'Plan Your Stay' : 'Konaklamanızı Planlayın'}
          </span>
          <h2 className="mt-1 font-serif text-2xl text-stone-800 md:text-3xl">
            {isEnglish ? 'Pre-Reservation' : 'Ön Rezervasyon'}
          </h2>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-[1fr_1fr_0.75fr_1fr] md:items-end md:p-7">
          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-700">
              <CalendarDays size={18} className="text-blue-600" />
              {isEnglish ? 'Check-in Date' : 'Giriş Tarihi'}
            </span>
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(event) => handleCheckIn(event.target.value)}
              className="h-12 w-full rounded-lg border border-stone-300 bg-white px-3 text-stone-800 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-700">
              <CalendarDays size={18} className="text-blue-600" />
              {isEnglish ? 'Check-out Date' : 'Çıkış Tarihi'}
            </span>
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
              className="h-12 w-full rounded-lg border border-stone-300 bg-white px-3 text-stone-800 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-700">
              <Users size={18} className="text-blue-600" />
              {isEnglish ? 'Guests' : 'Kişi Sayısı'}
            </span>
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="h-12 w-full rounded-lg border border-stone-300 bg-white px-3 text-stone-800 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              {Array.from({ length: 3 }, (_, index) => index + 1).map((count) => (
                <option key={count} value={count}>
                  {count} {isEnglish ? (count === 1 ? 'Guest' : 'Guests') : 'Kişi'}
                </option>
              ))}
            </select>
          </label>

          <div>
            <button
              type="button"
              disabled
              aria-describedby="reservation-status"
              className="flex h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-stone-300 px-5 font-semibold text-stone-600"
            >
              <Clock3 size={18} />
              {isEnglish ? 'Available Soon' : 'Yakında Aktif'}
            </button>
            <p id="reservation-status" className="mt-2 text-center text-xs text-stone-500">
              {isEnglish ? 'It will be activated when the reservation line is added.' : 'Rezervasyon hattı eklendiğinde aktifleştirilecektir.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
