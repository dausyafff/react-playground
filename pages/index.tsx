import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Selamat Datang di Portofolio Saya</h1>
        <p>Nama saya [Nama Anda], developer dengan pengalaman Laravel dan Next.js.</p>
        <p>Proyek: Aplikasi Todo, Crypto Trends Visualizer.</p>
      </div>
    </div>
  );
}