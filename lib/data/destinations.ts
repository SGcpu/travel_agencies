import type { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "amalfi-coast-italy",
    name: "Amalfi Coast",
    tagline: "Where cliffs kiss the Tyrrhenian Sea",
    description:
      "A mosaic of pastel villages cascading into cobalt waters, the Amalfi Coast is Italy's most theatrical coastline.",
    longDescription:
      "The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy's Sorrentine Peninsula. UNESCO-listed and achingly beautiful, it strings together a sequence of vertiginous villages — Positano, Amalfi, Ravello — each perched on cliffs that plunge into the iridescent Tyrrhenian Sea. Private villa stays, yacht charters, and Michelin-starred dining define the Aura Voyages experience here.",
    region: "Europe",
    country: "Italy",
    continent: "Europe",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=85",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=85",
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=85",
    ],
    highlights: [
      "Private villa with infinity pool overlooking Positano",
      "Sunset yacht charter along the coastline",
      "Private access to the Emerald Grotto",
      "Alain Ducasse curated dinner in Ravello",
      "Truffle & wine masterclass in the hillside estates",
    ],
    bestTimeToVisit: "May – June, September – October",
    duration: "7 nights",
    priceFrom: 12500,
    currency: "USD",
    tags: ["coastal", "luxury", "culinary", "romantic", "yachting"],
    featured: true,
    includes: [
      "Private villa accommodation",
      "Dedicated concierge",
      "All ground transfers",
      "Two private dining experiences",
      "Yacht charter (half-day)",
    ],
    accommodation: "Private Villa — Villa Tre Ville, Positano",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Positano Welcome",
        description:
          "Helicopter transfer from Naples to your clifftop villa. Private welcome dinner on your terrace as the sun melts into the Tyrrhenian.",
      },
      {
        day: 2,
        title: "Positano at Leisure",
        description:
          "Morning yoga on the terrace, private boat to secluded sea caves, lunch at Da Adolfo (accessible only by sea).",
      },
      {
        day: 3,
        title: "Ravello & Villa Rufolo",
        description:
          "Private tour of the 11th-century Villa Rufolo gardens. Afternoon concert in the belvedere. Curated tasting menu at Rossellinis.",
      },
      {
        day: 4,
        title: "Capri Day Charter",
        description:
          "Full-day private yacht to Capri. Blue Grotto access at dawn before the crowds arrive. Lunch at Il Riccio beach club.",
      },
      {
        day: 5,
        title: "Amalfi Town & Emerald Grotto",
        description:
          "Private early-morning access to the Emerald Grotto. Afternoon visit to the 9th-century Duomo. Limoncello masterclass.",
      },
      {
        day: 6,
        title: "Truffle Hillside Estate",
        description:
          "Private 4x4 into the Lattari Mountains. Truffle hunting with a local expert. Farm-to-table lunch. Afternoon at leisure.",
      },
      {
        day: 7,
        title: "Farewell Morning",
        description:
          "Final sunrise breakfast on the terrace. Helicopter return to Naples for onward connections.",
      },
    ],
  },
  {
    id: "2",
    slug: "maldives-private-atoll",
    name: "Maldives",
    tagline: "A private atoll at the edge of the world",
    description:
      "Overwater villas, bioluminescent nights, and an ocean too blue to be real — the Maldives is not a destination, it is a state of being.",
    longDescription:
      "The Maldives archipelago spans 1,200 coral islands across 26 natural atolls in the Indian Ocean. Aura Voyages operates exclusively with private island resorts and overwater villa properties, ensuring your horizon remains uninterrupted. From diving pristine coral gardens to dining on a sandbank illuminated by stars, every moment is engineered for absolute serenity.",
    region: "Asia",
    country: "Maldives",
    continent: "Asia",
    heroImage:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=85",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=85",
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1200&q=85",
    ],
    highlights: [
      "Overwater villa with direct ocean access",
      "Private sandbank dining under the Milky Way",
      "Bioluminescent night snorkeling",
      "Whale shark encounter with marine biologist",
      "Sunrise yoga on the private jetty",
    ],
    bestTimeToVisit: "November – April",
    duration: "10 nights",
    priceFrom: 18000,
    currency: "USD",
    tags: ["island", "overwater", "diving", "romantic", "wellness"],
    featured: true,
    includes: [
      "Overwater villa with butler service",
      "Seaplane transfers",
      "All meals & premium beverages",
      "Two guided marine excursions",
      "Spa treatment (90 min)",
    ],
    accommodation: "Overwater Villa — Soneva Jani, Noonu Atoll",
    itinerary: [
      {
        day: 1,
        title: "Seaplane Arrival",
        description:
          "Scenic seaplane flight over the atolls. Personal butler introduction and champagne welcome in your overwater villa.",
      },
      {
        day: 2,
        title: "Coral Garden Dive",
        description:
          "Morning dive with resident marine biologist at pristine coral gardens. Afternoon snorkeling in the house reef lagoon.",
      },
      {
        day: 3,
        title: "Sandbank Picnic",
        description:
          "Private boat to a deserted sandbank. Chef-prepared seafood lunch. Sunset return with cocktails on the water.",
      },
      {
        day: 4,
        title: "Wellness Day",
        description:
          "Full-day spa immersion. Overwater massage, Ayurvedic treatments, Himalayan bath ritual. Sunset meditation session.",
      },
      {
        day: 5,
        title: "Whale Shark Expedition",
        description:
          "Dawn expedition to South Ari Atoll for whale shark encounters. Marine biologist briefing. Underwater photography included.",
      },
      {
        day: 6,
        title: "Bioluminescence Night",
        description:
          "Sunset dolphin cruise. After dark: guided bioluminescent ocean swim in the glowing plankton waters.",
      },
      {
        day: 7,
        title: "Overwater Cooking Class",
        description:
          "Learn Maldivian cuisine with the resort's executive chef. Lunch at the over-ocean restaurant. Afternoon reef fishing.",
      },
      {
        day: 8,
        title: "Neighbouring Island Cruise",
        description:
          "Half-day private dhow cruise to local fishing villages. Sunset cocktails on deck as you return to your villa.",
      },
      {
        day: 9,
        title: "Last Full Day",
        description:
          "Completely at leisure. Final sunset sandbank dinner under a private canopy of stars.",
      },
      {
        day: 10,
        title: "Farewell",
        description: "Sunrise breakfast delivered to your deck. Seaplane return to Malé for onward flights.",
      },
    ],
  },
  {
    id: "3",
    slug: "patagonia-expedition",
    name: "Patagonia",
    tagline: "The last wilderness, untamed and eternal",
    description:
      "Granite towers, glaciers the size of cities, and skies that change in minutes — Patagonia is adventure distilled to its elemental core.",
    longDescription:
      "Straddling Chile and Argentina at the southern tip of South America, Patagonia is among the planet's last true wildernesses. Aura Voyages curates private lodge expeditions combining Torres del Paine, Los Glaciares, and the Carretera Austral — accessible only via private charter and small expedition teams of no more than eight guests.",
    region: "Americas",
    country: "Chile / Argentina",
    continent: "Americas",
    heroImage:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1531167072838-8e99a5d52e44?w=1200&q=85",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=85",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=85",
    ],
    highlights: [
      "Private helicopter over Perito Moreno Glacier",
      "Exclusive Ecocamp geodome accommodation in Torres del Paine",
      "Wild puma tracking with resident naturalist",
      "Kayaking among glacial icebergs in Grey Lake",
      "Asado dinner in a remote estancia",
    ],
    bestTimeToVisit: "October – March",
    duration: "12 nights",
    priceFrom: 22000,
    currency: "USD",
    tags: ["adventure", "wilderness", "trekking", "wildlife", "glaciers"],
    featured: true,
    includes: [
      "Ecocamp geodome suite",
      "All internal charter flights",
      "Expert naturalist guide",
      "All meals in the wilderness",
      "Kayaking & trekking equipment",
    ],
    accommodation: "Geodome Suite — EcoCamp Patagonia, Torres del Paine",
    itinerary: [
      {
        day: 1,
        title: "Punta Arenas Arrival",
        description:
          "Private charter from Santiago. Transfer to EcoCamp geodome. Welcome briefing with your naturalist guide.",
      },
      {
        day: 2,
        title: "Torres del Paine Introduction",
        description: "Guided hike to Mirador Las Torres. First views of the iconic towers at golden hour.",
      },
      {
        day: 3,
        title: "Grey Glacier Kayak",
        description: "Full day kayaking among glacial icebergs in Grey Lake. Picnic on the shore with glacial-melt water.",
      },
      {
        day: 4,
        title: "Puma Tracking",
        description: "Dawn puma tracking expedition with resident naturalist. Condor observation from clifftop lookouts.",
      },
      {
        day: 5,
        title: "French Valley Trek",
        description: "Full-day trek through French Valley. Glacier hanging walls, condors, and views of Patagonian steppe.",
      },
      {
        day: 6,
        title: "Transfer to El Calafate",
        description: "Private charter to Argentina. Check-in at Eolo lodge on the Patagonian steppe.",
      },
      {
        day: 7,
        title: "Perito Moreno Glacier",
        description: "Private helicopter flight over Perito Moreno. Ice-trekking on the glacier surface. Whisky on ice.",
      },
      {
        day: 8,
        title: "Los Glaciares National Park",
        description: "Full day in the park with expert naturalist. Wildlife spotting: guanaco, Andean condor, huemul deer.",
      },
      {
        day: 9,
        title: "Remote Estancia Day",
        description: "Visit to a working Patagonian estancia. Traditional asado, gaucho horsemanship display, open steppe ride.",
      },
      {
        day: 10,
        title: "Carretera Austral Drive",
        description: "Private 4x4 along one of the world's great roads through hanging glaciers and emerald fjords.",
      },
      {
        day: 11,
        title: "Return to Torres del Paine",
        description: "Final hike at dawn. A last sunrise over the towers before afternoon charter to Punta Arenas.",
      },
      {
        day: 12,
        title: "Return Flight",
        description: "Morning at leisure. Private transfer to airport for Santiago connection.",
      },
    ],
  },
  {
    id: "4",
    slug: "kyoto-ryokan-japan",
    name: "Kyoto & Beyond",
    tagline: "Where ceremony becomes art and silence speaks",
    description:
      "Private temple gardens at dawn, kaiseki dining by candlelight, and a pace of life that teaches you to be still.",
    longDescription:
      "Kyoto is Japan's spiritual and cultural heart — 17 UNESCO World Heritage Sites woven between bamboo groves, zen gardens, and thousand-year-old temples. Aura Voyages constructs a journey that moves beyond the tourist circuit into private temple ceremonies, invitation-only tea houses, and exclusive ryokan stays inaccessible to independent travellers.",
    region: "Asia",
    country: "Japan",
    continent: "Asia",
    heroImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=85",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=85",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&q=85",
    ],
    highlights: [
      "Private dawn ceremony at Fushimi Inari before opening",
      "Kaiseki dinner with a Living National Treasure chef",
      "Nishiki Market after-hours private tour",
      "Tea ceremony in a 300-year-old machiya townhouse",
      "Bullet train journey to Hakone with private onsen villa",
    ],
    bestTimeToVisit: "March – May, October – December",
    duration: "9 nights",
    priceFrom: 15500,
    currency: "USD",
    tags: ["culture", "culinary", "wellness", "temples", "ryokan"],
    featured: true,
    includes: [
      "Luxury ryokan accommodation",
      "Private english-speaking cultural expert",
      "Two kaiseki dining experiences",
      "All private transport",
      "Temple & garden access fees",
    ],
    accommodation: "Ryokan Suite — Tawaraya Ryokan, Kyoto (est. 1709)",
    itinerary: [
      {
        day: 1,
        title: "Tokyo Arrival",
        description: "Narita private meet-and-greet. Transfer to Park Hyatt Tokyo. Welcome sake tasting with cultural briefing.",
      },
      {
        day: 2,
        title: "Tokyo in Depth",
        description: "Private Tsukiji outer market breakfast tour. Afternoon in Yanaka old town. Evening omakase at 3-Michelin counter.",
      },
      {
        day: 3,
        title: "Shinkansen to Kyoto",
        description: "First-class Shinkansen with Mt. Fuji views. Check-in at Tawaraya Ryokan. First kaiseki dinner.",
      },
      {
        day: 4,
        title: "Arashiyama & Temples",
        description: "Dawn visit to Bamboo Grove. Private Tenryuji garden tour. Afternoon tea ceremony in private machiya.",
      },
      {
        day: 5,
        title: "Fushimi Inari at Dawn",
        description: "Pre-sunrise exclusive access to Fushimi Inari shrine paths. Geisha district (Gion) walking tour at dusk.",
      },
      {
        day: 6,
        title: "Nara Day",
        description: "Private guide to Nara's Todaiji Temple. Free-roaming sacred deer. Kasuga Taisha lantern ceremony access.",
      },
      {
        day: 7,
        title: "Cooking & Nishiki Market",
        description: "After-hours private Nishiki Market tour. Hands-on Japanese cooking class. Final kaiseki in a private tatami room.",
      },
      {
        day: 8,
        title: "Hakone Onsen Retreat",
        description: "Scenic train through mountain passes. Private onsen villa with Mt. Fuji views. Outdoor hot spring evening.",
      },
      {
        day: 9,
        title: "Return to Tokyo",
        description: "Shinkansen return. Airport private transfer for international departure.",
      },
    ],
  },
  {
    id: "5",
    slug: "morocco-imperial-cities",
    name: "Morocco",
    tagline: "A thousand stories in every medina alley",
    description:
      "From the rose-pink ramparts of Marrakech to the silence of the Sahara, Morocco is the ancient world still breathing.",
    longDescription:
      "Morocco layers Berber, Arab, and French colonial histories into a sensory landscape unlike anywhere else on Earth. Aura Voyages curates a private journey through the Imperial Cities — Marrakech, Fes, Meknes — combined with a private desert camp in the Erg Chebbi dunes of the Sahara, always in riad accommodation of the highest calibre.",
    region: "Africa",
    country: "Morocco",
    continent: "Africa",
    heroImage:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=85",
      "https://images.unsplash.com/photo-1595925889916-19f3a8d58e24?w=1200&q=85",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    ],
    highlights: [
      "Private riad in Marrakech's historic medina",
      "Sahara Desert camp under the stars",
      "Camel caravan at sunrise through Erg Chebbi",
      "Private access to Fes tanneries with master craftsman",
      "Cooking class with Michelin-recommended chef in a medina kitchen",
    ],
    bestTimeToVisit: "March – May, September – November",
    duration: "10 nights",
    priceFrom: 11000,
    currency: "USD",
    tags: ["culture", "desert", "culinary", "history", "adventure"],
    featured: false,
    includes: [
      "Luxury riad and desert camp accommodation",
      "Private driver-guide throughout",
      "All meals at curated local restaurants",
      "Hammam & spa session",
      "Camel trek",
    ],
    accommodation: "Riad — La Mamounia, Marrakech / Desert Camp — Scarabeo, Sahara",
    itinerary: [
      {
        day: 1,
        title: "Marrakech Arrival",
        description: "Private airport transfer. Check-in at La Mamounia. Rooftop welcome dinner over the medina.",
      },
      {
        day: 2,
        title: "Marrakech Medina",
        description: "Private medina walking tour. Bahia Palace. Majorelle Garden with exclusive early access. Djemaa el-Fna at dusk.",
      },
      {
        day: 3,
        title: "Atlas Mountains Day Trip",
        description: "4x4 into the Atlas Mountains. Berber village homestay lunch. Ait Ben Haddou kasbah at sunset.",
      },
      {
        day: 4,
        title: "Drive to Sahara",
        description: "Scenic private drive through Draa Valley and Todra Gorge. Overnight luxury kasbah en route.",
      },
      {
        day: 5,
        title: "Erg Chebbi Dunes",
        description: "Camel caravan into the Erg Chebbi dunes. Sunset at the highest dune. Private luxury desert camp dinner.",
      },
      {
        day: 6,
        title: "Desert Sunrise & Meknes",
        description: "Dawn photography from the dune crest. Drive north through the Middle Atlas. Meknes imperial city tour.",
      },
      {
        day: 7,
        title: "Fes Medina",
        description: "Private guide through the world's largest medieval medina. Leather tanneries with master craftsman. Dinner in a palace restaurant.",
      },
      {
        day: 8,
        title: "Fes Culinary Deep Dive",
        description: "Morning souk shopping for spices. Cooking class in a restored riad kitchen with Michelin-recommended chef.",
      },
      {
        day: 9,
        title: "Return to Marrakech",
        description: "Scenic drive back via Ifrane (Morocco's 'Switzerland'). Hammam & spa afternoon at La Mamounia.",
      },
      {
        day: 10,
        title: "Departure Day",
        description: "Late breakfast in the riad garden. Private transfer to Marrakech Menara Airport.",
      },
    ],
  },
  {
    id: "6",
    slug: "kenya-masai-mara-safari",
    name: "Kenya Safari",
    tagline: "Witness the greatest wildlife spectacle on Earth",
    description:
      "A private tented camp in the Masai Mara, where the Great Migration thunders past your canvas walls at dawn.",
    longDescription:
      "The Masai Mara National Reserve in southwest Kenya hosts the Great Migration — 1.5 million wildebeest crossing the Mara River in a primeval choreography of survival. Aura Voyages partners exclusively with the Mara's finest private conservancy camps, providing game drives with the top-ranked guides in Kenya, fly-camping under the stars, and hot air balloon safaris at first light.",
    region: "Africa",
    country: "Kenya",
    continent: "Africa",
    heroImage:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=85",
      "https://images.unsplash.com/photo-1518544866330-4e716499f800?w=1200&q=85",
      "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=1200&q=85",
    ],
    highlights: [
      "Great Migration crossing viewing from private conservancy",
      "Hot air balloon safari at sunrise over the Mara",
      "Big Five game drives twice daily with expert guide",
      "Fly-camp overnight on the open plains",
      "Masai cultural evening with warrior ceremony",
    ],
    bestTimeToVisit: "July – October (Migration), January – February (Calving)",
    duration: "8 nights",
    priceFrom: 16500,
    currency: "USD",
    tags: ["safari", "wildlife", "adventure", "photography", "luxury camping"],
    featured: false,
    includes: [
      "Private conservancy tented camp",
      "Internal bush flights",
      "All-inclusive meals & premium bar",
      "Expert master guide",
      "Hot air balloon flight",
      "Masai community visit",
    ],
    accommodation: "Private Tent Suite — Mahali Mzuri, Olare Motorogi Conservancy",
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Mara",
        description: "Light aircraft from Wilson Airport to Mara airstrip. Game drive en route to camp. Sundowner on the plains.",
      },
      {
        day: 2,
        title: "Big Five Morning",
        description: "Dawn game drive targeting lion, elephant, and leopard. Return for bush breakfast. Afternoon drive at the river crossing.",
      },
      {
        day: 3,
        title: "Balloon Safari",
        description: "Pre-dawn balloon launch. Hour-long flight over the migration herds. Champagne bush breakfast on landing.",
      },
      {
        day: 4,
        title: "Migration Crossing Day",
        description: "Full day at the Mara River. Wildebeest and zebra crossings. Hippo pools and Nile crocodile viewing.",
      },
      {
        day: 5,
        title: "Fly Camp Night",
        description: "Afternoon walk with Masai guide. Wilderness fly-camp setup. Dinner by campfire under the Milky Way.",
      },
      {
        day: 6,
        title: "Masai Village Visit",
        description: "Morning game drive. Afternoon cultural visit to authentic Masai village. Warrior ceremony at sunset.",
      },
      {
        day: 7,
        title: "Photography Focus Day",
        description: "Full day with conservation photographer guide. Golden hour game drive on private vehicle (exclusive use).",
      },
      {
        day: 8,
        title: "Final Morning & Departure",
        description: "Last dawn game drive. Bush brunch. Light aircraft to Nairobi for international connections.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}

export function getDestinationsByRegion(region: string): Destination[] {
  return destinations.filter((d) => d.region === region);
}
