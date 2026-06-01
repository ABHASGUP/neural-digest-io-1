export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "openai-releases-gpt-5-with-agentic-reasoning",
    title: "OpenAI releases GPT-5 with native agentic reasoning",
    excerpt:
      "The new flagship model can plan multi-step tasks, call tools autonomously, and ships with a major price drop for developers.",
    category: "Models",
    author: "Maya Chen",
    date: "Jun 1, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    featured: true,
    content: [
      "OpenAI today unveiled GPT-5, a system the company describes as its first 'genuinely agentic' model. Unlike previous releases, GPT-5 is designed to break down complex requests into intermediate steps, call external tools without prompting, and verify its own outputs before returning a response.",
      "## A shift from chatbot to agent",
      "Where GPT-4 functioned primarily as a conversational interface, GPT-5 introduces a built-in planner that reasons over goals before generating text. Early benchmarks show a 38% reduction in hallucinations on long-horizon tasks and a near-doubling of performance on SWE-bench, the standard for autonomous software engineering.",
      "## Pricing and availability",
      "API access opens today at $5 per million input tokens — roughly half the cost of GPT-4 Turbo at launch. ChatGPT Plus and Team subscribers will receive access this week, with Enterprise rollout following in two weeks.",
      "## What it means for builders",
      "The release marks an inflection point for AI product teams. Workflows that previously required orchestration frameworks like LangGraph or custom tool-calling logic can now be expressed as a single prompt. Whether that consolidation is durable — or whether it cedes too much control to a single provider — will be the central debate of the next quarter.",
    ],
  },
  {
    slug: "anthropic-claude-opus-4-coding-benchmarks",
    title: "Anthropic's Claude Opus 4 tops every major coding benchmark",
    excerpt:
      "The new model edges out competitors on SWE-bench, HumanEval, and a new internal benchmark focused on long-running engineering tasks.",
    category: "Models",
    author: "Daniel Park",
    date: "May 30, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    content: [
      "Anthropic released Claude Opus 4 this morning, claiming state-of-the-art results across the most-watched coding benchmarks. On SWE-bench Verified, the model resolves 71.3% of issues — a meaningful jump from the 65% reported by GPT-5 last week.",
      "## Long-horizon engineering",
      "Anthropic also debuted a new benchmark, Repo-Marathon, designed to measure model performance on tasks that span hundreds of files and multiple days of work. Opus 4 completed 44% of tasks end-to-end without human intervention.",
      "## Available now",
      "Claude Opus 4 is available today via the Anthropic API, Amazon Bedrock, and Google Cloud Vertex AI. Pricing remains unchanged from Opus 3.",
    ],
  },
  {
    slug: "eu-ai-act-enforcement-begins",
    title: "EU AI Act enforcement begins as first fines loom",
    excerpt:
      "Companies deploying high-risk AI systems in the EU now face fines of up to 7% of global revenue. Here's what changed overnight.",
    category: "Policy",
    author: "Sophie Laurent",
    date: "May 28, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1488747279002-c8523379faaa?w=1600&q=80",
    content: [
      "The European Union's AI Act enters its full enforcement phase today, two years after passage. Regulators in Brussels confirmed that the first formal investigations have already been opened against three undisclosed providers of general-purpose AI systems.",
      "## What's covered",
      "The Act categorizes AI systems by risk. Systems used for biometric identification, critical infrastructure, education, and employment now face strict documentation, transparency, and human oversight requirements.",
      "## The penalty structure",
      "Fines top out at €35 million or 7% of global annual revenue, whichever is higher — exceeding GDPR's 4% ceiling. Companies have a 90-day grace period to bring existing deployments into compliance.",
    ],
  },
  {
    slug: "google-deepmind-gemini-3-multimodal",
    title: "Google DeepMind ships Gemini 3 with real-time video understanding",
    excerpt:
      "The model processes live video streams at 30fps and can be embedded directly into Android devices via a 4B-parameter on-device variant.",
    category: "Models",
    author: "Aisha Rahman",
    date: "May 26, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80",
    content: [
      "Google DeepMind today announced Gemini 3, a multimodal model family that includes a flagship cloud-served variant and a 4-billion-parameter on-device version optimized for Pixel and Samsung Galaxy phones.",
      "## Real-time video",
      "Gemini 3 Pro is the first commercially available model to sustain 30fps video understanding, opening the door to assistive applications, real-time translation, and accessibility tools that were previously impractical.",
    ],
  },
  {
    slug: "perplexity-acquires-search-startup",
    title: "Perplexity acquires search startup Kagi in $400M deal",
    excerpt:
      "The acquisition gives Perplexity a privacy-first search index and an established subscriber base of power users.",
    category: "Business",
    author: "Tom Sullivan",
    date: "May 24, 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    content: [
      "Perplexity confirmed today that it has acquired Kagi Search for $400 million in a mix of cash and stock. The deal closes Q3 2026 pending regulatory approval.",
      "## The strategic logic",
      "Kagi brings a privacy-first search infrastructure and roughly 60,000 paying subscribers — a small but loyal base that Perplexity hopes to convert to its premium AI search tier.",
    ],
  },
  {
    slug: "meta-open-sources-llama-4-405b",
    title: "Meta open-sources Llama 4 405B with commercial license",
    excerpt:
      "The release includes full weights, training recipes, and a permissive license that allows commercial use without revenue caps.",
    category: "Open Source",
    author: "Carlos Mendes",
    date: "May 22, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80",
    content: [
      "Meta released Llama 4 today, a 405-billion-parameter open-weight model that the company claims matches GPT-5 on most reasoning benchmarks while remaining freely available for commercial use.",
      "## A more permissive license",
      "Unlike Llama 3, the new license removes the 700-million-user revenue cap, making the model usable by any company regardless of scale.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
