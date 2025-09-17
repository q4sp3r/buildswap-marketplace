import { demoListings } from "@/lib/data";

type Props = { params: { id: string } };

export default function ListingDetail({ params }: Props) {
  const listing = demoListings.find(l => l.id === params.id);

  if (!listing) {
    return <main style={{maxWidth:800,margin:"0 auto",padding:32}}>Listing not found.</main>;
  }

  return (
    <main style={{maxWidth: 800, margin:"0 auto", padding: "32px 16px"}}>
      {listing.heroImage && (
        <img src={listing.heroImage} alt={listing.title} style={{width:"100%", borderRadius:12, marginBottom:16}}/>
      )}
      <h1 style={{fontSize:28, fontWeight:700, marginBottom:8}}>{listing.title}</h1>
      <p style={{color:"#555", marginBottom:16}}>{listing.short}</p>

      <div style={{display:"flex", gap:16, marginBottom:24}}>
        <div style={{padding:12, border:"1px solid #eee", borderRadius:10}}>MRR: ${listing.mrr}</div>
        <div style={{padding:12, border:"1px solid #eee", borderRadius:10}}>Asking: ${listing.price.toLocaleString()}</div>
        <div style={{padding:12, border:"1px solid #eee", borderRadius:10}}>Category: {listing.category}</div>
      </div>

      <a
        href="mailto:buildswap@yourmail.com?subject=Interested%20in%20Listing%20(BuildSwap)&body=Hi%2C%20I%27m%20interested%20in%20this%20listing%3A%20{listing.id}"
        style={{padding:"12px 18px", background:"#111", color:"#fff", borderRadius:10}}
      >
        I’m Interested
      </a>
    </main>
  );
}