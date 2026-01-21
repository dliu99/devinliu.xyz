<script lang="ts">
  import Expandable from '../components/Expandable.svelte';
  const data = fetch('https://api.github.com/repos/dliu99/devinliu.xyz/commits?per_page=1')
  .then((r) => r.json())
  let expanded = $state<string | null>(null);
</script>

<div class="bg-neutral-700 h-screen min-w-screen flex justify-center px-6 py-10">
  <div class="flex flex-col justify-between w-full max-w-[400px] text-neutral-200 text-center">
    <div class="pt-[10vh]">

# DEVIN LIU

<div class="flex flex-col gap-4 pt-20">

<Expandable name="STANG HACKS" time="NOW" bind:expanded>

I founded my **[school's first hackathon](https://stanghacks.com)** with 300+ participants and sponsors including Vercel, Cerebras, Vapi, and more.

</Expandable>

<Expandable name="HACKATHONS" time="NOW" bind:expanded>

I've won at 5/7 hackathons in/around SF. Some favorites are:

<div class="text-xs">

- Lindy x E2B x Anthropic AI Agents Hackathon - **I won 1st/$2000** and built an agent using E2B Computer Use to scrape FB Marketplace for deals and **lowball the seller based on the their job title on LinkedIn**
- [Cal Hacks '25](https://devpost.com/software/dialsense) - MCP server for Poke, allowing you to make calls using your cloned voice and schedule appointments with just a text

</div>

</Expandable>

<Expandable name="TIKTOK CPB" time="2024" bind:expanded>

I ran a meme page on TikTok with a team of 3. It made **$6k/m** at peak scale, when we'd produce 2 videos/day (1-3min. videos on avg). I reached **20 million views** / **10k followers** in \<3 months

</Expandable>

<Expandable name="TIKTOK SHOP" time="2023" bind:expanded>

I was running a lot of oddball dropshipping stores on Shopify/Etsy/TikTok Shop since I was 13 with varying levels of profitability.

Before getting banned off TikTok Shop, I was doing **$3k/m**, worked with massive affiliates in the space, and **built+sold a tool** automating outreach to affiliates via TikTok's internal API.

</Expandable>

</div>
    </div>

<div class="text-sm">
{#await data then commits}
  {@const d = new Date(commits[0].commit.committer.date)}
  UPDATED {d.toLocaleString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'America/Los_Angeles' }).toUpperCase()} PT
{/await}
{#snippet link(href: string, label: string)}
<a {href} target="_blank" rel="noopener noreferrer" class="hover:underline">[{label}]</a>
{/snippet}

<br>
<br>
I'm 17, from Monte Vista High School in Danville, CA. 

{@render link('mailto:devin78988@gmail.com?subject="Yo"', 'email')}
{@render link('https://github.com/dliu99', 'github')}
{@render link('https://www.linkedin.com/in/devin-liu-6aa1b9325/', 'linkedin')}
{@render link('https://instagram.com/devin78988', 'ig')}
{@render link('https://tiktok.com/@devin78988', 'tt')}
</div>
</div>
</div>
