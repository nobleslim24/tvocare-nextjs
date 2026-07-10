import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { getPostBySlug, getPosts } from "@/lib/wordpress";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <>
      <section className="relative w-full bg-black-pure overflow-hidden border-b border-black-border">
        <div className="max-w-4xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-gray-400 hover:text-gold-500 transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-xs font-sans text-gray-500">
            <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gold-500 bg-gold-950/20 px-3 py-1 rounded border border-gold-500/20">
              {category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-500/70" /> 
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gold-500/70" /> 
              TVOCARE LTD
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white mb-8 uppercase" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
        </div>
      </section>

      {featuredImage && (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-[20px] overflow-hidden border border-black-border shadow-2xl">
            <Image src={featuredImage} alt={post.title.rendered} fill className="object-cover" />
          </div>
        </div>
      )}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-pure flex-grow border-b border-black-border">
        <article className="max-w-3xl mx-auto prose prose-invert prose-gold prose-p:text-gray-400 prose-p:font-sans prose-p:leading-relaxed prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wider prose-h2:text-2xl prose-h2:border-l-2 prose-h2:border-gold-500 prose-h2:pl-3 prose-a:text-gold-500 hover:prose-a:text-gold-400" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></article>
      </section>
    </>
  );
}
