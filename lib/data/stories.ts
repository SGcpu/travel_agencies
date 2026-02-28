import type { Story } from "@/types";

export const stories: Story[] = [
  {
    id: "1",
    slug: "dawn-at-fushimi-inari",
    title: "Dawn at Fushimi Inari",
    subtitle: "The 4 AM walk that changed everything",
    excerpt:
      "Before the first tourist bus arrives, before the selfie sticks emerge, Fushimi Inari belongs to the foxes and the incense smoke. We arrived at 4:30 AM. By 5:15, we understood why Kyoto holds its breath before sunrise.",
    content: `
The path begins in darkness. Not the theatrical darkness of a theme park haunted house, but the real darkness of a mountain considered sacred for 1,300 years — a darkness that has absorbed ten centuries of prayer, incense, and whispered gratitude.

We park at the base of the Inari-yama at 4:30 AM. Our guide, Takahiro, has been walking these paths since childhood. He moves without a torch. We follow his silhouette through the first vermillion torii gate, and the world as we know it recedes.

The torii tunnels glow a deep burnt orange in the pre-dawn light. Thousands of them — 10,000 by some counts — donated across the centuries by merchants and families seeking Inari's blessing for prosperous business. Each gate bears the donor's name and the date of offering on its reverse face. These are real people's hopes made physical, stacked in a corridor stretching 4 kilometres up the mountain.

At the Yotsutsuji intersection, we pause. The city of Kyoto spreads below us in its pre-dawn greyness — the Kamo River a silver thread, the distant Osaka plain disappearing into haze. A single monk descends the path, prayer beads in hand, utterly oblivious to our presence.

By the time we reach the summit shrines at Kami no Yashiro, the sky is shifting — not yet light, but preparing itself. The cedar trees are black silhouettes against deep indigo. Somewhere below, the first taxi is pulling into the car park.

We begin our descent as the sky turns gold. By the time we reach the main forecourt, a tour group of forty is tightening around a tour guide wielding an orange umbrella. We slip through them like water through stone.

This is what private access buys you: not a destination, but a dimension of it that most people will never see.
    `,
    author: "Helena Marsh",
    authorAvatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=85&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1400&q=90",
    destination: "Kyoto & Beyond",
    readTime: 6,
    publishedAt: "2025-11-15",
    tags: ["Japan", "Culture", "Photography", "Dawn", "Temples"],
  },
  {
    id: "2",
    slug: "the-migration-crossing",
    title: "The Migration Crossing",
    subtitle: "Standing at the edge of 1.5 million lives",
    excerpt:
      "Nothing prepares you for the sound. Before the first wildebeest appears on the opposite bank, you hear it — a low rumble, like distant thunder, that grows until it fills your chest. Then they run.",
    content: `
We had been at the Mara River since 6:30 AM. Our guide, Jackson Parashino — born in a Masai manyatta a kilometer from this bend — had read the landscape: the restless herds massing on the northern bank, the crocodiles repositioning in the shallows, the tension that builds in the air like pressure before a storm.

At 9:47 AM, the first wildebeest ran.

The crossing is not graceful. It is not a wildlife documentary moment of serene natural beauty. It is chaos compressed into purpose — 50,000 animals in the space of an hour making a decision that will kill hundreds of them and preserve the rest for another season. The crocodiles move with a patience that is somehow more terrifying than speed.

We were the only vehicle at this bend. Jackson had brought us here 30 years ago, before the other camps had even woken their guests. The privilege of that solitude — of witnessing the most spectacular wildlife event on Earth without a line of Land Cruisers on either side — is something that no photograph can communicate.

A bull wildebeest, enormous and ancient-looking, hesitated at the water's edge for four full minutes. We watched him calculate — survival instinct in raw, visible computation. Then he ran.

By noon, 45,000 had crossed. Three had not. The river was calm again.

Jackson turned off the engine. We ate sandwiches in the savannah silence, listening to the hyenas already gathering in the middle distance, watching a fish eagle ride a thermal over the Euphorbias.

"Every crossing is different," he said. "I have never seen the same one twice."

Neither will you.
    `,
    author: "David Osei",
    authorAvatar:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=120&q=85&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400&q=90",
    destination: "Kenya Safari",
    readTime: 7,
    publishedAt: "2025-10-08",
    tags: ["Kenya", "Wildlife", "Safari", "Photography", "Migration"],
  },
  {
    id: "3",
    slug: "sleeping-under-patagonia",
    title: "Sleeping Under Patagonia",
    subtitle: "A night in a geodome at the end of the world",
    excerpt:
      "The geodome's transparent roof is not a design choice. It is a philosophical position. To sleep here is to acknowledge that you are small, temporary, and lucky — the sky over Torres del Paine has stars so dense they form a cloud.",
    content: `
At midnight, I was awoken by light.

Not the ordinary light of a morning alarm or a hotel corridor — but the cold, silver light of 4,000 stars pressing through sixty centimetres of transparent acrylic above my head. I lay still for a moment, uncertain of where I was. Then the wind came.

The Patagonian wind is famous. Not metaphorically famous — practically famous, in that climbers, trekkers, and expedition planners all factor it into every decision. At EcoCamp, the geodomes are anchored to the earth with engineering that treats the wind as a structural partner rather than an adversary. You feel it. You hear it. You are in it, while also being inside.

I pulled on the thermal layer left at the bedside and stepped outside. The temperature had dropped to -4°C. The Torres del Paine towers — all three of them, 2,800 metres of Cretaceous granite — were silver-black against the sky. The sound of absolutely nothing except wind.

I stood there for twenty-three minutes. I know because I finally looked at my watch as I went back inside, and I remember being surprised that so much time had passed.

This is what Patagonia does to time. It stretches it. The landscape is so indifferent to human presence — so profoundly old and unimpressed — that it forces a kind of recalibration. You stop being in a hurry. The geodome roof keeps showing you the sky. Eventually, you begin to understand why people come back here again and again, trying to keep the feeling.

I knew, lying back down with 4,000 stars above me, that I would be one of them.
    `,
    author: "Clara Fontaine",
    authorAvatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&q=85&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&q=90",
    destination: "Patagonia",
    readTime: 8,
    publishedAt: "2026-01-22",
    tags: ["Patagonia", "Adventure", "Nature", "Wilderness", "Astronomy"],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
