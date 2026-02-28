import type { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "rajasthan-royal-circuit",
    name: "Rajasthan Royal Circuit",
    tagline: "Where every fort holds a dynasty and every sunset bleeds gold",
    description:
      "Amber forts at dawn, indigo cities carved from desert rock, and lake palaces floating on still water — Rajasthan is India's most theatrical kingdom.",
    longDescription:
      "Spanning the Thar Desert's golden edge, Rajasthan strings together five distinct royal capitals — Jaipur, Jodhpur, Jaisalmer, Udaipur, and Pushkar — each built by a separate dynasty with a separate genius. Aura Voyages curates private palace-hotel stays, pre-dawn fort access, and expert Rajput historians as guides, constructing a journey that goes beyond the surface of India's most photographic state.",
    region: "North India",
    country: "India",
    continent: "Asia",
    heroImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=85",
      "https://images.unsplash.com/photo-1598977054507-88baeb11c0b3?w=1200&q=85",
    ],
    highlights: [
      "Private dawn access to Amber Fort before tourist gates open",
      "Overnight stay in a converted 17th-century haveli in Jaisalmer",
      "Sunset camel ride into the Thar Desert dunes at Sam Sand Dunes",
      "Private heritage dinner inside Mehrangarh Fort, Jodhpur",
      "Sunset boat on Pichola Lake with Udaipur's City Palace backdrop",
    ],
    bestTimeToVisit: "October – March",
    duration: "10 nights",
    priceFrom: 4800,
    currency: "USD",
    tags: ["heritage", "culture", "desert", "palaces", "photography"],
    featured: true,
    includes: [
      "Palace hotel and heritage haveli accommodation throughout",
      "Private air-conditioned Innova Crysta with expert driver-guide",
      "All curated meals at heritage restaurants",
      "Private guide at each fort and palace",
      "Camel safari at Sam Sand Dunes",
    ],
    accommodation: "Taj Lake Palace, Udaipur · RAAS Jodhpur · Suryagarh Jaisalmer",
    itinerary: [
      {
        day: 1,
        title: "Jaipur — The Pink City Arrival",
        description:
          "Private airport transfer to your palace hotel. Evening visit to Hawa Mahal (Palace of Winds) at dusk. Welcome rajasthani dinner at 1135 AD restaurant inside Amber Fort complex.",
      },
      {
        day: 2,
        title: "Amber Fort at Dawn",
        description:
          "Pre-sunrise private access to Amber Fort — elephant procession path, Sheesh Mahal (mirror palace), and the secret tunnel only your guide knows. City Palace and Jantar Mantar by afternoon.",
      },
      {
        day: 3,
        title: "Drive to Jodhpur — The Blue City",
        description:
          "Scenic 6-hour drive in your private Innova Crysta. Stepwell at Abhaneri en route. Arrive at RAAS Jodhpur as Mehrangarh Fort turns to fire at sunset.",
      },
      {
        day: 4,
        title: "Mehrangarh Fort & Blue Lanes",
        description:
          "Private heritage dinner inside Mehrangarh Fort's cannon room. Morning walk through Brahmpuri's narrow blue-washed lanes with a local photographer guide.",
      },
      {
        day: 5,
        title: "Drive to Jaisalmer — The Golden City",
        description:
          "5-hour desert highway drive through the Thar. Roadside dhabas and rural Rajasthan. Jaisalmer Fort at golden hour — still a living city.",
      },
      {
        day: 6,
        title: "Jaisalmer Fort & Havelis",
        description:
          "Private guided walk through Patwa ki Haveli (merchant mansion), the fort temple, and the Jain temples within the walls. Desert cooking class by evening.",
      },
      {
        day: 7,
        title: "Thar Desert Safari",
        description:
          "Dawn jeep into the Sam Sand Dunes. Camel caravan at sunrise. Lunch in a Bishnoi village. Desert campfire dinner under Rajasthan's stellar sky.",
      },
      {
        day: 8,
        title: "Drive to Udaipur via Ranakpur",
        description:
          "600-year-old Ranakpur Jain temple en route — 1,444 carved marble pillars, no two identical. Evening arrival in Udaipur, the City of Lakes.",
      },
      {
        day: 9,
        title: "Udaipur — The Venice of the East",
        description:
          "Private sunset boat on Pichola Lake. City Palace access before public opening. Evening at Ambrai Ghat watching the lake temples phosphoresce under lights.",
      },
      {
        day: 10,
        title: "Farewell Udaipur",
        description:
          "Final sunrise from Taj Lake Palace terrace. Morning at leisure. Private transfer to Udaipur Airport for onward flights.",
      },
    ],
  },
  {
    id: "2",
    slug: "kerala-backwaters",
    name: "Kerala Backwaters",
    tagline: "A thousand waterways threading the green pulse of the south",
    description:
      "Kettuvallam houseboats gliding through palm-fringed canals, Ayurvedic healers in teak pavilions, and spice plantations that smell like the sixteenth century.",
    longDescription:
      "Kerala's network of backwaters — 900 kilometres of interconnected lakes, canals, and rivers threading through the coastal state — is unique on Earth. Aura Voyages arranges private rice-barge (kettuvallam) charters with personal chef, Ayurvedic immersions at Kerala's finest kalarimarthanda, and access to the spice estates of Thekkady and the tea gardens of Munnar that no standard tour operator visits.",
    region: "South India",
    country: "India",
    continent: "Asia",
    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1519235106923-1a6cce9e4aca?w=1200&q=85",
      "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=1200&q=85",
      "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=1200&q=85",
    ],
    highlights: [
      "2-night private kettuvallam houseboat charter with personal chef",
      "Pre-dawn access to Padmanabhaswamy Temple (by prior arrangement)",
      "Full Ayurvedic Panchakarma consultation and treatments at CGH Earth",
      "Private spice plantation walk in Thekkady with master harvester",
      "Dawn Vipassana meditation with a resident monk",
    ],
    bestTimeToVisit: "September – March",
    duration: "9 nights",
    priceFrom: 3900,
    currency: "USD",
    tags: ["wellness", "backwaters", "Ayurveda", "nature", "culture"],
    featured: true,
    includes: [
      "Private kettuvallam houseboat (2 nights) with onboard chef",
      "Heritage resort accommodation throughout",
      "Private AC Innova Crysta with driver",
      "Full-day Ayurvedic consultation and treatments",
      "All curated meals",
    ],
    accommodation: "CGH Earth Spice Village, Thekkady · Fragrant Nature, Alleppey · Kalari Rasayana, Kollam",
    itinerary: [
      {
        day: 1,
        title: "Kochi — Fort & Spices",
        description:
          "Private airport welcome. Fort Kochi walking tour — Jewish Synagogue, Chinese fishing nets at sunset, Dutch Palace. Malabar cuisine dinner in a heritage home.",
      },
      {
        day: 2,
        title: "Drive to Munnar",
        description:
          "Scenic 4-hour drive through the Western Ghats. Arrival at Munnar's high-altitude tea estates. Private tea-tasting session at a 100-year-old estate factory.",
      },
      {
        day: 3,
        title: "Munnar Tea Gardens",
        description:
          "Dawn mist walk through Pothamedu viewpoint. Eravikulam National Park (Nilgiri tahr). Private spice garden in the evening.",
      },
      {
        day: 4,
        title: "Drive to Thekkady",
        description:
          "Periyar Wildlife Sanctuary — private early morning boat on the lake. Elephant observation. Afternoon spice plantation tour with the estate owner.",
      },
      {
        day: 5,
        title: "Alleppey — Houseboat Embarkation",
        description:
          "Drive to Alleppey (Alappuzha). Board your private kettuvallam. Afternoon cruise through narrow backwater canals. Chef-prepared Kerala sadya dinner on deck.",
      },
      {
        day: 6,
        title: "Backwaters at Dawn",
        description:
          "Wake to absolute silence and mist over Vembanad Lake. Village life from the water — morning markets, country boats, paddy fields. Coir weaving cooperative visit.",
      },
      {
        day: 7,
        title: "Disembark — Ayurvedic Retreat",
        description:
          "Morning disembarkation. Transfer to Kalari Rasayana Ayurvedic retreat. Panchakarma consultation with senior Ayurvedic physician. First treatment session.",
      },
      {
        day: 8,
        title: "Full Ayurveda Immersion",
        description:
          "Full day of treatments: Abhyangam, Shirodhara, steam bath. Yoga at dawn and sunset. Sattvic meals prepared by retreat kitchen.",
      },
      {
        day: 9,
        title: "Farewell Kochi",
        description:
          "Morning meditation. Transfer to Kochi International Airport with dawn departure.",
      },
    ],
  },
  {
    id: "3",
    slug: "ladakh-high-altitude",
    name: "Ladakh High-Altitude Odyssey",
    tagline: "Above the clouds, beyond the ordinary world",
    description:
      "Buddhist monasteries perched on 4,000m ridges, a lake so blue it looks painted, and the silence of the highest motorable passes on Earth.",
    longDescription:
      "Ladakh — the 'Land of High Passes' — sits at the top of the Indian subcontinent, a Trans-Himalayan plateau where Buddhist culture has survived unchanged since the 8th century. Aura Voyages curates private journeys that include monastery dawn ceremonies accessible to no standard tour, private home stays in Nubra Valley with Bactrian camel nomads, and border-road expeditions to Pangong Tso — where the sky and the water become indistinguishable.",
    region: "Himalayan",
    country: "India",
    continent: "Asia",
    heroImage:
      "https://images.unsplash.com/photo-1605649041964-06d8b6523c9e?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=85",
      "https://images.unsplash.com/photo-1567533849571-2ef2deb2df7d?w=1200&q=85",
      "https://images.unsplash.com/photo-1567533850252-6aa36a81c4a2?w=1200&q=85",
    ],
    highlights: [
      "Dawn prayer ceremony at Thiksey Monastery — monks, butter lamps, and silence",
      "Pangong Tso: the 134km lake straddling India and China at 4,350m",
      "Nubra Valley over Khardung La (5,359m) — world's highest motorable pass",
      "Bactrian double-humped camel ride in Hunder sand dunes, Nubra",
      "Private astrophotography session at 4,200m — 5,000 stars",
    ],
    bestTimeToVisit: "June – September",
    duration: "8 nights",
    priceFrom: 3200,
    currency: "USD",
    tags: ["adventure", "Buddhist", "Himalayan", "wilderness", "photography"],
    featured: true,
    includes: [
      "Private 4×4 Toyota Fortuner with expert high-altitude driver",
      "Acclimatisation lodge in Leh",
      "All camp and hotel accommodation",
      "Monastery access permits and inner sanctum entry",
      "All meals including wilderness camp dinners",
    ],
    accommodation: "The Grand Dragon Leh · Pangong Retreat Camp · Nubra Ecolodge",
    itinerary: [
      {
        day: 1,
        title: "Leh Arrival — Acclimatisation",
        description:
          "Fly into Leh (3,500m). Complete rest mandatory. Evening stroll to Leh Palace at sunset. Acclimatisation dinner at hotel.",
      },
      {
        day: 2,
        title: "Leh Monastery Circuit",
        description:
          "Dawn: Thiksey Monastery prayer ceremony with resident monks. Afternoon: Hemis Monastery (richest in Ladakh), Rancho School. Rest by evening.",
      },
      {
        day: 3,
        title: "Shanti Stupa & Leh Market",
        description:
          "Morning: Shanti Stupa at sunrise. Leh old town — Tibetan apricot orchards, nomadic craft shops. Evening: private rooftop dinner over the Indus Valley.",
      },
      {
        day: 4,
        title: "Khardung La — Nubra Valley",
        description:
          "Early drive over Khardung La Pass (5,359m). Descend into the flower-filled Nubra Valley. Afternoon camel safari on Hunder white sand dunes.",
      },
      {
        day: 5,
        title: "Diskit Monastery & Valley Walk",
        description:
          "dawn at Diskit Monastery — 32m golden Maitreya Buddha. Village walk through Turtuk (most northern Indian village accessible publicly). Return to Nubra camp.",
      },
      {
        day: 6,
        title: "Pangong Tso — The Blue Lake",
        description:
          "3.5-hour drive over Chang La Pass (5,360m) to Pangong Tso. First view is an event. Camp on the shore as the lake changes from cobalt to jade to silver.",
      },
      {
        day: 7,
        title: "Pangong Dawn & Return to Leh",
        description:
          "Dawn photography at the lake — mirror-flat surface, first light. Leisurely return drive via Hemis. Private farewell dinner.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Early morning transfer to Leh Airport. Sunrise over the Stok Kangri range en route.",
      },
    ],
  },
  {
    id: "4",
    slug: "goa-golden-coast",
    name: "Goa & the Konkan Coast",
    tagline: "400 years of Portuguese poetry in a tropical Indian Eden",
    description:
      "Sun-bleached baroque churches, spice-drenched seafood, and an ocean that glows copper at dusk — Goa is where India's contradictions resolve into pleasure.",
    longDescription:
      "Goa's tiny 3,700 sq km contain more history per square kilometre than most countries: Portuguese colonial churches (UNESCO-listed), ancient Hindu temples that survived 450 years of coexistence, a spice-trading heritage, and India's most celebrated coastline. Aura Voyages moves beyond the beach-resort circuit into the old Portuguese villas of Fontainhas, the private spice estates of Ponda, and the untouched Konkan fishing villages accessible only by boat.",
    region: "Coastal",
    country: "India",
    continent: "Asia",
    heroImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=85",
      "https://images.unsplash.com/photo-1575297944228-62cca0d38e93?w=1200&q=85",
      "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=1200&q=85",
    ],
    highlights: [
      "Private villa stay in a restored 18th-century Portuguese mansion in Fontainhas",
      "Sunrise at Basilica of Bom Jesus with no crowds",
      "Private spice plantation tour with the estate owner in Ponda",
      "Sunset sailing on a traditional Goan gaiola fishing boat",
      "Konkan coastal village boat trip — deserted beaches, no roads",
    ],
    bestTimeToVisit: "November – February",
    duration: "7 nights",
    priceFrom: 2800,
    currency: "USD",
    tags: ["coastal", "heritage", "culinary", "beach", "history"],
    featured: true,
    includes: [
      "Private Portuguese villa accommodation",
      "Private chauffeur and heritage guide",
      "All curated Goan meals and seafood experiences",
      "Spice plantation tour with lunch",
      "Sunset sailing experience",
    ],
    accommodation: "Vivanta Goa Panaji · Private Villa, Fontainhas Heritage District",
    itinerary: [
      {
        day: 1,
        title: "Goa Arrival — Old Goa",
        description:
          "Private airport transfer. Check-in at heritage villa in Fontainhas (Goa's Latin Quarter). Evening walk through 18th-century Portuguese alleyways. Feni cocktail and Goan fish curry dinner.",
      },
      {
        day: 2,
        title: "Basilica of Bom Jesus & Old Goa",
        description:
          "Pre-dawn access to Basilica of Bom Jesus (St Francis Xavier's remains). Old Goa UNESCO monuments circuit with private art historian guide. Lunch at a century-old Catholic Goan home.",
      },
      {
        day: 3,
        title: "Ponda Spice Estates",
        description:
          "Morning in the spice-growing heartland. Black pepper, vanilla, cardamom, nutmeg — harvested and explained by the estate owner. Goan lunch surrounded by spice gardens.",
      },
      {
        day: 4,
        title: "North Goa & Vagator Cliffs",
        description:
          "Chapora Fort sunrise — wide-angle view of two bays. Anjuna flea market. Cliff walk at Vagator. Sundown at the Fort Aguada battlements.",
      },
      {
        day: 5,
        title: "Sunset Sailing & Coastal Villages",
        description:
          "Morning boat trip to a deserted Konkan beach village (no roads, no tourists). Afternoon back in Panjim. Sunset sail on a traditional fishing boat.",
      },
      {
        day: 6,
        title: "South Goa — Palolim & Cotigao",
        description:
          "Cotigao Wildlife Sanctuary at dawn — flying squirrels, monkeys. Palolem Beach lunch. Afternoon at leisure at a private beach resort.",
      },
      {
        day: 7,
        title: "Farewell Goa",
        description:
          "Morning at leisure in the villa garden. Transfer to Goa International Airport.",
      },
    ],
  },
  {
    id: "5",
    slug: "varanasi-sacred-circuit",
    name: "Varanasi & the Sacred Circuit",
    tagline: "The oldest city on Earth, still burning, still praying",
    description:
      "Ganga aarti flames in the river mist, 84 ghats descending into the sacred water, and a philosophical density that rewires how you think about time.",
    longDescription:
      "Varanasi (Kashi) has been continuously inhabited for over 3,000 years — possibly the world's oldest living city. The Ganges here is not a river but a theology. Aura Voyages constructs a sacred circuit journey that connects Varanasi with Sarnath (where Buddha gave his first sermon) and Bodh Gaya (where he attained enlightenment), providing not just access but depth — early morning private boat rides, evening Ganga aarti with a Brahmin priest guide, and Benares' finest silk weavers in their working quarters.",
    region: "East India",
    country: "India",
    continent: "Asia",
    heroImage:
      "https://images.unsplash.com/photo-1561361058-c24e022efd17?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1589056824778-5e82bde06568?w=1200&q=85",
      "https://images.unsplash.com/photo-1524397057410-1e775ed476f3?w=1200&q=85",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=85",
    ],
    highlights: [
      "Pre-dawn private Ganga boat ride — mist, diyas, and funeral pyres",
      "Private Ganga Aarti ceremony viewing with front-row temple access",
      "Silk weaving atelier visit in the Weavers' Colony, Varanasi",
      "Sarnath excavation site at dawn — Dhamek Stupa in silence",
      "Bodh Gaya — Mahabodhi Temple meditation under the Bodhi Tree descendant",
    ],
    bestTimeToVisit: "October – March",
    duration: "6 nights",
    priceFrom: 2200,
    currency: "USD",
    tags: ["spiritual", "culture", "history", "photography", "Buddhist"],
    featured: false,
    includes: [
      "Heritage hotel accommodation throughout",
      "Private Ganga boat with experienced local guide",
      "Air-conditioned private car for all transfers",
      "All curated meals including home-cooked Banarasi dinner",
      "Aarti ceremony priority viewing arrangement",
    ],
    accommodation: "BrijRama Palace Varanasi · Hotel Sujata Bodh Gaya",
    itinerary: [
      {
        day: 1,
        title: "Varanasi Arrival",
        description:
          "Private airport transfer to BrijRama Palace (17th-century haveli directly on the Ganga). Welcome Banarasi paan and chai. Evening walk along Dashashwamedh Ghat.",
      },
      {
        day: 2,
        title: "Dawn Ganga Boat & the 84 Ghats",
        description:
          "Pre-dawn private boat ride — the most sacred morning on Earth. Manikarnika Ghat, the eternal funeral fire. Breakfast on the river. Afternoon: Banarasi silk weaving atelier in the weavers' colony.",
      },
      {
        day: 3,
        title: "Ganga Aarti & Old City",
        description:
          "Morning: Private session with astrologer at Kashi Vishwanath complex. Afternoon: Benares Hindi University campus and Bharat Kala Bhavan (museum). Evening: Reserved front-row position for Ganga Aarti.",
      },
      {
        day: 4,
        title: "Sarnath — First Sermon of the Buddha",
        description:
          "Dawn drive to Sarnath (10km). Dhamek Stupa at sunrise — where the Buddha gave his first discourse. Archaeological museum. Deer Park meditation.",
      },
      {
        day: 5,
        title: "Drive to Bodh Gaya",
        description:
          "6-hour drive to Bodh Gaya. Check-in at riverside hotel. Evening visit to Mahabodhi Temple — UNESCO World Heritage, lighting of 500 oil lamps at sunset.",
      },
      {
        day: 6,
        title: "Bodh Gaya Dawn & Departure",
        description:
          "Dawn meditation under the Bodhi Tree descendant. Return to Varanasi for departure flights, or onward connection.",
      },
    ],
  },
  {
    id: "6",
    slug: "himachal-spiti-valley",
    name: "Himachal Pradesh & Spiti",
    tagline: "The valley that the Himalayas kept for themselves",
    description:
      "Ancient Pin Valley monasteries at 4,000m, apple orchards in Shimla, and the lunar landscape of Spiti — Himachal Pradesh is India's answer to Tibet.",
    longDescription:
      "Himachal Pradesh contains multitudes: the hill-station nostalgia of Shimla, the pine forests of Manali, and the otherworldly Trans-Himalayan plateau of Spiti Valley — a 12,500 sq km moonscape at 3,800–4,500m where Buddhist villages have existed in near-total isolation for a thousand years. Aura Voyages curates a private circuit starting in the accessible and ending at the extreme, always with expert high-altitude naturalist guides and premium transport.",
    region: "Himalayan",
    country: "India",
    continent: "Asia",
    heroImage:
      "https://images.unsplash.com/photo-1566836610593-62a64888a216?w=1920&q=90",
    galleryImages: [
      "https://images.unsplash.com/photo-1626621329323-3d5b21b87e13?w=1200&q=85",
      "https://images.unsplash.com/photo-1582401656496-9d2b7ff101c7?w=1200&q=85",
      "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=1200&q=85",
    ],
    highlights: [
      "Key Monastery at sunrise — oldest in Spiti, perfect stillness at 4,166m",
      "Pin Valley National Park — Snow Leopard territory (rare winter sighting)",
      "Dhankar Monastery on a vertical cliff above the Spiti River",
      "Apple harvest walk in a Kullu Valley orchard (September)",
      "Shimla's colonial Mall Road at the blue hour",
    ],
    bestTimeToVisit: "June – October (Spiti) · Year-round (Shimla/Manali)",
    duration: "10 nights",
    priceFrom: 3500,
    currency: "USD",
    tags: ["adventure", "Himalayan", "Buddhist", "nature", "photography"],
    featured: false,
    includes: [
      "Private 4×4 with high-altitude experienced driver throughout",
      "All accommodation including high-altitude tented camps",
      "Expert high-altitude naturalist and cultural guide",
      "All meals including village home-cooked dinners",
      "Emergency oxygen kit and satellite phone",
    ],
    accommodation: "Wildflower Hall Shimla · Snow Valley Camps Spiti · The Himalayan Manali",
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Shimla",
        description:
          "Arrival in Chandigarh. Private vehicle to Shimla on the old Hindustan-Tibet highway. Heritage walk on the Mall Road. Dinner at Wildflower Hall.",
      },
      {
        day: 2,
        title: "Shimla to Manali",
        description:
          "Scenic Himalayan drive through Kullu Valley. Apple orchards, river rapids, cascading waterfalls. Arrival at Manali — Hadimba Temple visit.",
      },
      {
        day: 3,
        title: "Manali — Rohtang Pass Approach",
        description:
          "Morning: Old Manali village and Tibetan monastery. Afternoon: Drive toward Rohtang La (if season permits) — first Himalayan high-altitude experience.",
      },
      {
        day: 4,
        title: "Enter Spiti Valley via Kunzum Pass",
        description:
          "5,050m Kunzum La pass — one of the highest motorable passes in the world. Lhalung village — ancient murals and a living 1,000-year-old tree.",
      },
      {
        day: 5,
        title: "Kaza — Heart of Spiti",
        description:
          "Explore Kaza town (Spiti's capital). Hikkim — world's highest post office. Ki Monastery at sunset.",
      },
      {
        day: 6,
        title: "Key Monastery at Dawn",
        description:
          "Pre-dawn hike to Key Monastery (4,166m) as the lamas chant morning prayers. Komik village — the world's highest inhabited village with a road.",
      },
      {
        day: 7,
        title: "Pin Valley — Snow Leopard Country",
        description:
          "Day in Pin Valley National Park with naturalist guide. Dangkar village prehistoric Buddhist art. River crossing by foot bridge.",
      },
      {
        day: 8,
        title: "Dhankar Monastery",
        description:
          "Dhankar Monastery on a vertical 4,000m cliff. Dhankar Lake (glacial). Ancient cave meditation chambers.",
      },
      {
        day: 9,
        title: "Return via Shimla",
        description:
          "9-hour return drive via Kinnaur Valley — orchards, gorges, and Tibetan flags on every mountain summit.",
      },
      {
        day: 10,
        title: "Shimla — Departure",
        description:
          "Farewell morning at Wildflower Hall. Transfer to Chandigarh Airport for onward connections.",
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
