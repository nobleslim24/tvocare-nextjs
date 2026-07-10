import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { getPosts, WPPost } from "@/lib/wordpress";

export const revalidate = 3600; // Revalidate at most every hour

export default async function BlogIndex() {
  const posts: WPPost[] = await getPosts();

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <>
      <div className="relative w-full bg-black-pure overflow-hidden border-b border-black-border">
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-16 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-display font-semibold tracking-widest text-gold-500 uppercase block mb-2">Insights &amp; Care Guides</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white mb-4 mt-2 uppercase">Blog</h1>
            <p className="text-sm text-gray-400 font-sans">Articles and advice from our professional care team on mental health, dementia care, and independent living.</p>
          </div>
        </div>
      </div>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black-pure relative overflow-hidden flex-grow border-b border-black-border">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 font-sans">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
                const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                return (
                  <article key={post.id} className="bg-black-rich border border-black-border hover:border-gold-500/30 rounded-[15px] overflow-hidden transition-all duration-300 flex flex-col h-full group hover:shadow-lg hover:shadow-gold-500/5">
                    <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden bg-black-pure shrink-0">
                      {featuredImage ? (
                        <Image 
                          src={featuredImage} 
                          alt={post.title.rendered} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-black-rich to-black-pure border-b border-black-border">
                          <div className="w-10 h-10 rounded-full border border-gold-500/25 flex items-center justify-center mb-3">
                            <BookOpen className="text-gold-500 w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-display font-bold text-gold-500 uppercase tracking-widest">TVO Care Insights</span>
                        </div>
                      )}
                    </Link>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-sans text-gray-500">
                        <span className="text-[10px] font-display font-bold uppercase tracking-wider text-gold-500 bg-gold-950/20 px-2.5 py-0.5 rounded border border-gold-500/10">
                          {category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gold-500/70" /> 
                          {formatDate(post.date)}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-display font-bold text-white uppercase tracking-tight mb-3 group-hover:text-gold-500 transition-colors duration-200 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                      
                      <div className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-6 flex-grow line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                      
                      <div className="pt-4 border-t border-black-border/60 flex items-center justify-between shrink-0">
                        <span className="flex items-center gap-1.5 text-xs text-gray-500 font-sans">
                          <User className="w-3 h-3 text-gold-500/70" /> TVOCARE LTD
                        </span>
                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 font-display font-bold text-[10px] uppercase tracking-wider text-gold-500 hover:text-white transition-colors duration-200">
                          Read Post <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
