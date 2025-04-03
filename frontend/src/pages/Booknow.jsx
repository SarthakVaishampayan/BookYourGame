import { useState } from "react";
import { Search, MapPin, Clock, Gamepad, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";

// Mock data
const parlours = [
  {
    id: 1,
    name: "GameZone",
    address: "123 Gamer St, Console City",
    consoles: [
      {
        id: 1,
        name: "PlayStation 5",
        availableTimes: ["10:00 AM", "2:00 PM", "6:00 PM"],
        games: ["Spider-Man: Miles Morales", "Demon's Souls", "Ratchet & Clank: Rift Apart"],
      },
      {
        id: 2,
        name: "Xbox Series X",
        availableTimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
        games: ["Halo Infinite", "Forza Horizon 5", "Gears 5"],
      },
    ],
  },
  {
    id: 2,
    name: "Pixel Paradise",
    address: "456 Joystick Ave, Gamerville",
    consoles: [
      {
        id: 3,
        name: "Nintendo Switch",
        availableTimes: ["9:00 AM", "1:00 PM", "5:00 PM"],
        games: ["The Legend of Zelda: Breath of the Wild", "Super Mario Odyssey", "Animal Crossing: New Horizons"],
      },
    ],
  },
  {
    id: 3,
    name: "Gamer's Haven",
    address: "789 Arcade Ln, Playtown",
    consoles: [
      {
        id: 4,
        name: "PlayStation 4",
        availableTimes: ["10:30 AM", "3:30 PM", "8:00 PM"],
        games: ["God of War", "The Last of Us Part II", "Uncharted 4"],
      },
    ],
  },
  {
    id: 4,
    name: "Retro Reload",
    address: "321 Classic Ave, Oldtown",
    consoles: [
      {
        id: 5,
        name: "SNES Classic",
        availableTimes: ["12:00 PM", "4:00 PM", "9:00 PM"],
        games: ["Super Mario World", "The Legend of Zelda: A Link to the Past", "Donkey Kong Country"],
      },
    ],
  },
];

export default function BookNow() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedParlour, setExpandedParlour] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredParlours = parlours.filter((parlour) =>
    parlour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    parlour.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExpand = (parlourId) => {
    setExpandedParlour(expandedParlour === parlourId ? null : parlourId);
  };

  const openBookingModal = (parlour, console, time) => {
    setSelectedBooking({ parlour, console, time });
    setIsBookingModalOpen(true);
  };

return (
    <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center text-white p-8">
            <div className="w-3/4">
                <h1 className="text-4xl font-bold mb-8 text-center">Book Your Gaming Session</h1>

                <div className="mb-8 relative">
                    <input
                        type="text"
                        placeholder="Search for parlours..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 bg-black bg-opacity-50 backdrop-blur-sm text-white p-2 rounded"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {filteredParlours.map((parlour) => (
                    <div key={parlour.id} className="mb-6  bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold">{parlour.name}</h2>
                            <button onClick={() => handleExpand(parlour.id)} className="text-white hover:text-purple-300">
                                {expandedParlour === parlour.id ? <ChevronUp /> : <ChevronDown />}
                            </button>
                        </div>
                        <p className="flex items-center text-gray-400 mb-4">
                            <MapPin className="mr-2" size={16} />
                            {parlour.address}
                        </p>
                        {expandedParlour === parlour.id && (
                            <div className="mt-4 space-y-4">
                                {parlour.consoles.map((console) => (
                                    <div key={console.id} className=" bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-3xl">
                                        <h3 className="text-xl font-semibold mb-2 flex items-center">
                                            <Gamepad className="mr-2" size={20} />
                                            {console.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-2">Available times:</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {console.availableTimes.map((time) => (
                                                <button key={time} onClick={() => openBookingModal(parlour.name, console.name, time)} className="text-purple-400 border border-purple-400 px-3 py-1 rounded hover:bg-purple-400 hover:text-white">
                                                    <Clock className="mr-1" size={14} />
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-400 mb-2">Available games:</p>
                                        <ul className="list-disc list-inside text-sm">
                                            {console.games.map((game) => (
                                                <li key={game}>{game}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </>
);
}
