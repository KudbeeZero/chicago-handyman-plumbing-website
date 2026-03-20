import { Link } from "@tanstack/react-router";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";

const posts = [
  {
    slug: "plumbing-emergency",
    title: "What to Do During a Plumbing Emergency in Chicago",
    date: "January 15, 2025",
    readTime: "6 min read",
    category: "Emergency Plumbing",
    excerpt:
      "A burst pipe at 2am is every homeowner's nightmare. Here's exactly what to do — and what not to do — when a plumbing emergency strikes your Chicago home.",
    href: "/blog/plumbing-emergency",
  },
  {
    slug: "sewer-problems",
    title: "Common Sewer Problems in Older Chicago Homes",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Plumbing & Sewer",
    excerpt:
      "Chicago's aging housing stock means sewer problems are common. Learn the warning signs of root intrusion, pipe deterioration, and combined sewer overflows.",
    href: "/blog/sewer-problems",
  },
  {
    slug: "seasonal-maintenance",
    title: "Seasonal Home Maintenance Checklist for Chicago",
    date: "November 5, 2024",
    readTime: "8 min read",
    category: "Home Maintenance",
    excerpt:
      "Chicago's extreme seasons demand year-round home maintenance. This checklist covers spring, summer, fall, and winter tasks to keep your home in top shape.",
    href: "/blog/seasonal-maintenance",
  },
  {
    slug: "handyman-vs-diy",
    title: "When to Call a Handyman vs DIY",
    date: "October 20, 2024",
    readTime: "5 min read",
    category: "Handyman Tips",
    excerpt:
      "Not every home repair needs a pro — but some definitely do. Here's how to decide when to grab your toolbox and when to call Dom.",
    href: "/blog/handyman-vs-diy",
  },
  {
    slug: "winter-plumbing",
    title: "Preparing Your Home for Chicago Winter Plumbing Issues",
    date: "September 30, 2024",
    readTime: "6 min read",
    category: "Seasonal Tips",
    excerpt:
      "Chicago winters are brutal on pipes. Learn how to prevent frozen pipes, protect vulnerable plumbing, and what to do if disaster strikes.",
    href: "/blog/winter-plumbing",
  },
];

const categoryColors: Record<string, string> = {
  "Emergency Plumbing": "bg-brand-orange-100 text-brand-orange-700",
  "Plumbing & Sewer": "bg-brand-navy-100 text-brand-navy-700",
  "Home Maintenance": "bg-green-100 text-green-700",
  "Handyman Tips": "bg-amber-100 text-amber-700",
  "Seasonal Tips": "bg-blue-100 text-blue-700",
};

export default function Blog() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-navy-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
            Chicago Home <span className="text-brand-orange-400">Repair Blog</span>
          </h1>
          <p className="text-brand-navy-200 text-lg">
            Tips, guides, and expert advice for Chicago homeowners and renters.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl p-8 shadow-navy-sm border border-gray-100 hover:shadow-navy-md transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${
                      categoryColors[post.category] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-heading font-black text-brand-navy-900 mb-3 hover:text-brand-orange-600 transition-colors">
                  <Link to={post.href}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  to={post.href}
                  className="inline-flex items-center gap-1 text-brand-orange-500 hover:text-brand-orange-600 font-semibold text-sm transition-colors"
                >
                  Read Article <ChevronRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
