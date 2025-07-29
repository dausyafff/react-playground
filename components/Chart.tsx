import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function CryptoChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let myChart: Chart | null = null;

  useEffect(() => {
    if (chartRef.current) {
      if (myChart) {
        myChart.destroy(); // Hentikan chart lama jika ada
      }
      myChart = new Chart(chartRef.current, {
        type: 'line', // Jenis grafik garis
        data: {
          labels: ['1 Jam', '2 Jam', '3 Jam'], // Label waktu
          datasets: [{
            label: 'Harga Bitcoin (USD)',
            data: [40000, 40500, 40200], // Data statis
            borderColor: 'rgba(75, 192, 192, 1)', // Warna garis
            tension: 0.1, // Kurva halus
          }],
        },
        options: {
          responsive: true, // Menyesuaikan ukuran
          scales: {
            y: {
              beginAtZero: false, // Mulai dari nilai terkecil
            },
          },
        },
      });
    }
    return () => {
      if (myChart) myChart.destroy(); // Bersihkan saat komponen dilepas
    };
  }, []);

  return <canvas ref={chartRef} />;
}