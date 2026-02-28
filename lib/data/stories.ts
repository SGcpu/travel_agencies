import type { Story } from "@/types";

export const stories: Story[] = [
  {
    id: "1",
    slug: "the-blue-hour-in-jodhpur",
    title: "The Blue Hour in Jodhpur",
    subtitle: "40 minutes before sunrise, a million indigo walls ignite.",
    excerpt:
      "In the last minutes before Jodhpur's dawn becomes day, the blue city earns its name absolutely. Standing on a rooftop in Navchokiya, watching the Mehrangarh loom above like a hallucination — this is the window that changes a traveller for good.",
    content:
      "Jodhpur is not blue the way you expect. The photographs lie, or rather they edit. The blue hour — the 40 minutes before sunrise when the city and the sky are the same saturated indigo — is a phenomenon that happens to you rather than being witnessed. You are standing on the rooftop of a haveli in Navchokiya when it begins. The city below is silent. Then the muezzin calls from the Jumma Masjid, and seconds later a temple bell answers from somewhere in the old city, and in the rising light the 10 million blue walls begin their slow separate revelations. Your guide, a fifth-generation resident of the blue quarter, explains that the tradition was practical: lime-based indigo paint repelled insects, specifically termites, which meant the Brahmin families who used it most had cleaner homes. The aesthetics were an accident of function. Above everything, Mehrangarh's ramparts turn amber just as the city below turns fully blue — a two-toned composition that no photographer has ever adequately captured because the moment lasts only four minutes. This is why we come to Jodhpur at dawn. Not for the photographs. For the four minutes.",
    author: "Siddharth Rao",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=85&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1600&q=90",
    destination: "Rajasthan",
    readTime: 6,
    publishedAt: "2025-11-12",
    tags: ["Rajasthan", "Jodhpur", "Architecture", "Dawn", "Heritage"],
  },
  {
    id: "2",
    slug: "waking-on-the-backwaters",
    title: "Waking on the Backwaters",
    subtitle: "A Kerala houseboat, a mist, and a kingfisher that resets everything.",
    excerpt:
      "There is a silence in the Kerala backwaters at 5 a.m. that has no equivalent anywhere on land. Your houseboat is moored in a side canal so narrow the palms touch overhead. A mist sits on the water. Then a kingfisher makes its move.",
    content:
      "The houseboat wakes up gently. That is the design principle the best kettuvallam operators understand: nothing should interrupt the passage between sleep and the backwaters. By 4:45 a.m. the cook has lit the wood fire in the small galley kitchen and the first smell — cardamom and coconut oil — moves through the vessel before any sound does. You lie in the main cabin and watch the mist through the window lattice. The canal you are moored on is in the Kuttanad wetlands, the region below sea level that supplies rice to most of south India. The paddy fields are underwater now in the monsoon season, which means the houseboat route weaves through flooded agriculture — an eerie, beautiful inversion of the normal order of things. At first light the toddy tappers are already in the palms, moving with a practiced efficiency that suggests they have been doing this since before the concept of a day off was invented. Your guide explains that toddy — the local palm wine — must be harvested at dawn and consumed by noon before fermentation changes its character. This is a lesson in the backwaters generally: its rhythms are older than tourism and run entirely on their own schedule. The houseboat will join them, or it will miss everything.",
    author: "Meenakshi Pillai",
    authorAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=85&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=90",
    destination: "Kerala",
    readTime: 7,
    publishedAt: "2025-10-03",
    tags: ["Kerala", "Backwaters", "Houseboat", "Kuttanad", "Dawn"],
  },
  {
    id: "3",
    slug: "the-pangong-revelation",
    title: "The Pangong Revelation",
    subtitle: "134 kilometres of impossible blue, at 14,000 feet above everything.",
    excerpt:
      "The road to Pangong Tso gains 1,200 metres in the last 18 kilometres. Your body knows this before your mind does. Then you crest the pass, and the lake materialises — and the altitude, the exhaustion, all of it disappears into awe.",
    content:
      "Nobody prepares you for the colour. Every photograph of Pangong Tso you have ever seen has been treated as factual when it is actually approximate. The lake at 4,350 metres above sea level changes colour across its 134-kilometre length — from turquoise at the western Tibetan end near Spangmik, through cobalt in the middle section, to a deep ultramarine along the ranges you can see from the Indian side. The shift happens because of depth and what the surrounding mountains reflect into the water at different angles of sun. Your driver, Stanzin, who has made this journey 300 times, still gets out of the Land Cruiser and stands at the edge in silence every visit. When asked why, he says: 'I want to check it's still there.' The previous night you stayed at a permanent tented camp run by a Ladakhi family in Spangmik village. The temperature at 2 a.m. dropped to minus nine. The stars were so numerous and so low that the Milky Way cast a visible shadow. In the morning, the lake was there at the end of the camp's garden — still blue, still impossible, still doing exactly what lakes at 14,200 feet should not be able to do.",
    author: "Tenzin Wangchuk",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=85&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1605649041964-06d8b6523c9e?w=1600&q=90",
    destination: "Ladakh",
    readTime: 8,
    publishedAt: "2025-09-18",
    tags: ["Ladakh", "Pangong", "Himalaya", "High Altitude", "Monastery"],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
