export default function Submit() {
  return (
    <main style={{maxWidth:720, margin:"0 auto", padding:"32px 16px"}}>
      <h1 style={{fontSize:28, fontWeight:700, marginBottom:12}}>Submit Your Project</h1>
      <p style={{color:"#555", marginBottom:24}}>
        Fill this quick form. I’ll review and publish approved listings.
      </p>

      <form
        action="https://formspree.io/f/your-form-id"  // temporary; replace with your Formspree ID
        method="POST"
        style={{display:"grid", gap:12}}
      >
        <input name="email" required placeholder="Your email" style={inp}/>
        <input name="title" required placeholder="Project title" style={inp}/>
        <input name="mrr" type="number" required placeholder="Current MRR (USD)" style={inp}/>
        <input name="price" type="number" required placeholder="Asking price (USD)" style={inp}/>
        <input name="category" placeholder="Category (AI, DevTools, Template…)" style={inp}/>
        <textarea name="summary" required placeholder="Short description" rows={5} style={inp}/>
        <button style={{padding:"12px 18px", background:"#111", color:"#fff", borderRadius:10}}>
          Submit for Review
        </button>
      </form>
    </main>
  );
}

const inp: React.CSSProperties = {
  padding:"12px 14px",
  border:"1px solid #ddd",
  borderRadius:10
};