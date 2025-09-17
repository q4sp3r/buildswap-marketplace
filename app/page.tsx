// app/page.tsx (Next 13+ with App Router)
// If your project uses Pages Router, name it pages/index.tsx instead.
import Link from "next/link";

export default function Home() {
  return (
    <main style={{maxWidth: 960, margin: "0 auto", padding: "48px 16px"}}>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:32}}>
        <h1 style={{fontSize:28,fontWeight:700}}>BuildSwap</h1>
        <nav style={{display:"flex",gap:16}}>
          <Link href="/listings">Browse</Link>
          <Link href="/submit">Submit a Project</Link>
        </nav>
      </header>

      <section style={{
        padding:"48px",
        border:"1px solid #eee",
        borderRadius:16,
        background:"rgba(255,255,255,0.7)",
        backdropFilter:"blur(6px)"
      }}>
        <h2 style={{fontSize:40, lineHeight:1.1, marginBottom:16}}>
          A clean, fast marketplace for micro projects
        </h2>
        <p style={{fontSize:18, color:"#444", marginBottom:24}}>
          Connect indie builders who want to cash out with buyers who want to acquire.
          Simple listings, quick reviews, and a fair 5% fee.
        </p>
        <div style={{display:"flex", gap:12}}>
          <Link href="/listings" style={{padding:"12px 18px", background:"#111", color:"#fff", borderRadius:10}}>
            Browse Listings
          </Link>
          <Link href="/submit" style={{padding:"12px 18px", background:"#f5f5f5", border:"1px solid #ddd", borderRadius:10}}>
            Submit Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}