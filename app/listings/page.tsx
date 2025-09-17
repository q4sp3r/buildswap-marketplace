import Link from "next/link";
import { demoListings } from "@/lib/data";

export default function Listings() {
  return (
    <main style={{maxWidth: 1000, margin: "0 auto", padding: "32px 16px"}}>
      <h1 style={{fontSize:28, fontWeight:700, marginBottom:16}}>Browse Listings</h1>
      <div style={{display:"grid", gap:16, gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))"}}>
        {demoListings.map(l => (
          <Link key={l.id} href={`/listing/${l.id}`} style={{textDecoration:"none", color:"inherit"}}>
            <article style={{border:"1px solid #eee", borderRadius:12, overflow:"hidden"}}>
              {l.heroImage && (
                <img src={l.heroImage} alt={l.title} style={{width:"100%", height:160, objectFit:"cover"}} />
              )}
              <div style={{padding:16}}>
                <h3 style={{margin:"0 0 8px", fontSize:18}}>{l.title}</h3>
                <p style={{margin:"0 0 10px", color:"#555"}}>{l.short}</p>
                <div style={{display:"flex", justifyContent:"space-between", fontSize:14}}>
                  <span>MRR: ${l.mrr}</span>
                  <span>Asking: ${l.price.toLocaleString()}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}