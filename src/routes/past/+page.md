<script lang="ts">
  import Expandable from '$lib/Expandable.svelte';
  let expanded = $state<string | null>(null);
</script>

<div class="flex flex-col gap-3 pt-6 sm:pt-7">

<Expandable name="Caddy (YC F25)" time="ONGOING" bind:expanded>

I worked on rebuilding Caddy's agent stack, the main onboarding flow, eval + memory/skills infrastructure, and shipping consumer features across the agent. See some of my work [here](https://caddy.app/fit) and in the iMessage app!

</Expandable>

<Expandable name="Marks app" time="ONGOING" bind:expanded>

I reverse engineered my school's LMS (infinite campus) since there's no publicly available API or persistent auth and built a **[React Native app](https://apps.apple.com/us/app/marks-for-infinite-campus/id6761805541)** around it.

</Expandable>

<Expandable name="Hackathons" time="ONGOING" bind:expanded>

I've won at 6/8 hackathons in/around SF and NYC. Some favorites are:

<div class="text-sm">

- NY Tech Week Hackathon - I built a git hook, CLI, and web interface that quizzes you on understanding of your AI-generated PRs. We ended up winning $1k from Perseus Computer because I found their internal endpoint for codebase indexing and used it for our project!
- Lindy x E2B x Anthropic AI Agents Hackathon - I built an agent using Claude 4.5 Sonnet and E2B Computer Use to scrape FB Marketplace for deals and **lowball the seller based on the their job title on LinkedIn**. Won 1st Place/$2000.
- [Cal Hacks '25](https://devpost.com/software/dialsense) - MCP server for Poke, allowing you to make calls using a cloned AI voice and schedule appointments with just a text

</div>

</Expandable>

<Expandable name="Stang hacks" time="2026" bind:expanded>

I founded my **[school's first hackathon](https://stanghacks.com)** with ~200 participants/456 signups, $1.5k cash prizes, and sponsors including Vercel, ElevenLabs, Vapi, and more.

</Expandable>

<Expandable name="TikTok cpb" time="2024" bind:expanded>

I ran a meme page on TikTok with a team of 3. It made **$6k/m** at peak scale, when we'd produce 2 videos/day (1-3min. videos on avg). I reached 20 million views / 10k followers in \<3 months.

</Expandable>

<Expandable name="TikTok shop" time="2023" bind:expanded>

I ran some oddball ecom stores on Shopify/Etsy/TikTok Shop since I was 13 with varying levels of profitability (~10k/m).

Before getting banned off TikTok Shop, I was doing **$3k/m**, worked with massive affiliates in the space, and built+sold a CLI tool in Python automating outreach to affiliates via TikTok's internal API.

</Expandable>

<Expandable name="Discord bots" time="2021" bind:expanded>

My first project, a [discord bot](https://files.catbox.moe/smyfx9.png) reaching ~550 servers and 15,000 users.

</Expandable>

</div>
