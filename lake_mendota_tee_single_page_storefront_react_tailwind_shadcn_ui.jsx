import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ExternalLink } from "lucide-react";

/**
 * Mendota Memories – Editorial Landing Page with dynamic, varied imagery layout
 */

const EXTERNAL_PURCHASE_URL = "https://undergroundshirts.com/groups/mhr-265-order-page/gildan-heavy-cotton-basic-t-shirt-natural";

const DEFAULT_IMAGES: { src: string; alt: string }[] = [
  { src: "https://files.oaiusercontent.com/file-00000000757471fda7cd8e52ad0e62aa.png", alt: "Person wearing Mendota Memories T-shirt near lake" },
  { src: "https://files.oaiusercontent.com/file-00000000757471fda7cd8e52ad0e62aa.png", alt: "Folded Mendota Memories T-shirt on furniture" },
  { src: "https://files.oaiusercontent.com/file-00000000757471fda7cd8e52ad0e62aa.png", alt: "Mendota Memories shirt tucked into a tote bag" },
  { src: "https://files.oaiusercontent.com/file-00000000757471fda7cd8e52ad0e62aa.png", alt: "T-shirt hanging on hanger with bright window view" },
  { src: "https://files.oaiusercontent.com/file-00000000757471fda7cd8e52ad0e62aa.png", alt: "T-shirt on freestanding rack in a modern home" },
  { src: "https://files.oaiusercontent.com/file-00000000757471fda7cd8e52ad0e62aa.png", alt: "Friends enjoying Lake Mendota while wearing the shirt" }
];

export default function MendotaMemories() {
  const [images] = useState(DEFAULT_IMAGES);
  return (
    <div className="min-h-screen bg-stone-50 text-blue-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1000px_700px_at_20%_-10%,rgba(30,58,138,0.08),transparent)]"/>

      <header className="sticky top-0 z-40 w-full bg-stone-50/80 backdrop-blur border-b border-blue-900/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Menu className="h-5 w-5 text-blue-900 lg:hidden"/>
            <a href="#" className="font-serif text-2xl tracking-tight text-blue-900">Mendota Memories</a>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm text-blue-900/70">
            <a href="#story" className="hover:text-blue-900">Story</a>
            <a href="#gallery" className="hover:text-blue-900">Gallery</a>
            <a href="#order" className="hover:text-blue-900">Order</a>
          </nav>
        </div>
      </header>

      <section className="relative border-b border-blue-900/10">
        <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-12 gap-10 py-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs text-blue-900/70">Feature • Lake Culture</div>
            <h1 className="font-serif text-5xl leading-[1.05] text-blue-950">Summer on the Terrace, stitched into a tee.</h1>
            <p className="text-blue-950/80 text-lg leading-relaxed max-w-prose">An off-white unisex shirt celebrating the iconic Sunburst chairs and the view over Lake Mendota. Designed for easy days, golden hours, and Wisconsin nostalgia.</p>
          </div>
          <aside className="lg:col-span-5 lg:pl-6">
            <div className="sticky top-28 rounded-3xl border border-blue-900/10 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(2,6,23,0.25)]">
              <div className="rounded-2xl overflow-hidden ring-1 ring-blue-900/10 mb-4">
                <img src={images[0]?.src} alt={images[0]?.alt} className="w-full h-80 object-cover"/>
              </div>
              <div className="font-serif text-2xl">Mendota Memories Tee</div>
              <p className="mt-2 text-sm text-blue-950/80">Soft natural cotton. Unisex fit. Printed with eco-friendly inks.</p>
              <div className="mt-5">
                <Button asChild className="w-full rounded-xl bg-blue-900 hover:bg-blue-800 text-white">
                  <a href={EXTERNAL_PURCHASE_URL} target="_blank" rel="noreferrer" id="order"><ExternalLink className="h-4 w-4 mr-2"/>Order at Underground Shirts</a>
                </Button>
              </div>
              <p className="mt-3 text-xs text-blue-900/60">Ships directly from Underground Shirts. Secure checkout.</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-4xl px-4 py-14">
        <p className="relative text-blue-950/90 text-lg leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-blue-900">
          Inspired by the rhythm of waves on Lake Mendota and the geometry of the Terrace chairs, this design pairs a relaxed natural cotton base with a vibrant photographic print. Dress it up with denim and a blazer or throw it on after a swim—either way, it carries a little Madison summer wherever you go.
        </p>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 row-span-2 rounded-3xl overflow-hidden ring-1 ring-blue-900/10">
            <img src={images[1]?.src} alt={images[1]?.alt} className="w-full h-[600px] object-cover" />
          </div>
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="rounded-3xl overflow-hidden ring-1 ring-blue-900/10">
              <img src={images[2]?.src} alt={images[2]?.alt} className="w-full h-[280px] object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden ring-1 ring-blue-900/10">
              <img src={images[3]?.src} alt={images[3]?.alt} className="w-full h-[320px] object-cover" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-3xl overflow-hidden ring-1 ring-blue-900/10">
            <img src={images[4]?.src} alt={images[4]?.alt} className="w-full h-[450px] object-cover" />
          </div>
          <div className="col-span-12 md:col-span-6 rounded-3xl overflow-hidden ring-1 ring-blue-900/10">
            <img src={images[5]?.src} alt={images[5]?.alt} className="w-full h-[550px] object-cover" />
          </div>
        </div>
      </section>

      <section className="border-t border-blue-900/10 bg-blue-50/60">
        <div className="mx-auto max-w-6xl px-4 py-12 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl text-blue-950">Ready to make your own Mendota memory?</h3>
            <p className="mt-2 text-blue-950/80">View size availability and complete your purchase on Underground Shirts.</p>
          </div>
          <div className="flex lg:justify-end">
            <Button asChild className="rounded-xl bg-blue-900 hover:bg-blue-800 text-white px-6">
              <a href={EXTERNAL_PURCHASE_URL} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4 mr-2"/>Go to Order Page</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-blue-900/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-blue-950/70 grid sm:grid-cols-2 gap-4">
          <div>© {new Date().getFullYear()} Mendota Memories. All rights reserved.</div>
          <div className="flex gap-4 sm:justify-end">
            <a href="#" className="hover:text-blue-900">Privacy</a>
            <a href="#" className="hover:text-blue-900">Terms</a>
            <a href="#" className="hover:text-blue-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
