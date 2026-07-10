export interface WPPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  _embedded?: {
    "wp:term"?: Array<Array<{ name: string }>>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

const WP_API_URL = process.env.WORDPRESS_API_URL || "https://your-wp-domain.com/wp-json/wp/v2";

export async function getPosts(): Promise<WPPost[]> {
  try {
    // We add _embed to fetch featured images and categories in the same request
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=10`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!res.ok) {
      console.warn("Failed to fetch WordPress posts, using fallback mock data.");
      return getFallbackPosts();
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error fetching WP posts:", error);
    return getFallbackPosts();
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`, {
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) {
      const fallback = getFallbackPosts().find(p => p.slug === slug);
      return fallback || null;
    }
    
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching WP post:", error);
    const fallback = getFallbackPosts().find(p => p.slug === slug);
    return fallback || null;
  }
}

// Fallback data so the site doesn't break if the WP URL is invalid initially
function getFallbackPosts(): WPPost[] {
  return [
    {
      id: 1,
      slug: "the-essentials-of-home-caregiving-a-practical-guide",
      title: { rendered: "The Essentials of Home Caregiving: A Practical Guide" },
      excerpt: { rendered: "<p>Caregiving for a loved one is a rewarding yet demanding journey. This practical guide explores essential tips for managing daily care effectively while ensuring the safety and comfort of both the patient and the caregiver.</p>" },
      content: { rendered: "<p>Caregiving for a loved one is a rewarding yet demanding journey. This practical guide explores essential tips for managing daily care effectively while ensuring the safety and comfort of both the patient and the caregiver.</p>" },
      date: "2026-07-08T10:00:00",
      _embedded: {
        "wp:term": [[{ name: "Caregiving" }]],
        // No featured media provided in fallback to simulate no image, or we could provide a placeholder URL
      }
    },
    {
      id: 2,
      slug: "navigating-healthcare-systems-advocacy-for-caregivers",
      title: { rendered: "Navigating Healthcare Systems: Advocacy for Caregivers" },
      excerpt: { rendered: "<p>Effective communication is the cornerstone of quality healthcare. As a caregiver, you are often the primary link between the patient and the medical team. Navigating these complex systems requires confidence, organization, and clear advocacy.</p>" },
      content: { rendered: "<p>Effective communication is the cornerstone of quality healthcare. As a caregiver, you are often the primary link between the patient and the medical team. Navigating these complex systems requires confidence, organization, and clear advocacy.</p>" },
      date: "2026-07-08T10:00:00",
      _embedded: {
        "wp:term": [[{ name: "Healthcare" }]]
      }
    },
    {
      id: 3,
      slug: "prioritizing-self-care-preventing-caregiver-burnout",
      title: { rendered: "Prioritizing Self-Care: Preventing Caregiver Burnout" },
      excerpt: { rendered: "<p>Caregiver burnout is a serious concern in the healthcare industry, often leading to physical and emotional exhaustion. To provide the best care for others, you must first ensure your own well-being is maintained through intentional self-care practices.</p>" },
      content: { rendered: "<p>Caregiver burnout is a serious concern in the healthcare industry, often leading to physical and emotional exhaustion. To provide the best care for others, you must first ensure your own well-being is maintained through intentional self-care practices.</p>" },
      date: "2026-07-08T10:00:00",
      _embedded: {
        "wp:term": [[{ name: "Mental Health" }]]
      }
    }
  ];
}
