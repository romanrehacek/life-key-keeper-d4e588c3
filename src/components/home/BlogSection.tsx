
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const BlogPost = ({ post }: { post: any }) => (
  <Link to={`/blog/${post.id}`} className="group">
    <div className="bg-card rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-2">
          {new Date(post.date).toLocaleDateString('sk-SK')}
        </p>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-lifekey-teal transition-colors">
          {post.title}
        </h3>
        <p className="text-muted-foreground">
          {post.excerpt}
        </p>
      </div>
    </div>
  </Link>
);

const BlogSection = ({ posts }: { posts: any[] }) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najnovšie články
          </h2>
          <p className="text-xl text-muted-foreground mx-auto max-w-3xl">
            Prečítajte si naše tipy a rady, ako sa lepšie pripraviť na všetky životné situácie.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link to="/blog">
              Zobraziť všetky články
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
