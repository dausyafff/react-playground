// PEMBELAJARAN useState useEffect

// import { useState, useEffect } from "react";

// function App() {
//   const [waktu, setWaktu] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setWaktu(waktu+1), 1000);
//     return () => clearInterval(timer);
//   }, [waktu]);
//   return <p>Bunga disiram selama: {waktu} detik</p>;
// }

// export default App;



// PEMBELAJARAN useMemo
// import { useState, useMemo } from "react";

// function App(){
//   const [kecepatan, setKecepatan] = useState(1);

//   const hitungJarak = useMemo(()=>{
//     console.log('Menghitung jarak...');
//     return kecepatan * 100;
//   }, [kecepatan]);
//   return(
//     <>
//       <p>Kecepatan: {kecepatan} km/jam</p>
//       <p>Jarak: {hitungJarak} km</p>
//       <button onClick={()=>setKecepatan(kecepatan+1)}>Tambah Kecepatan</button>
//     </>
//   )
// }

// export default App;


// PEMBELAJARAN useCallback
// import { useState, useCallback } from "react";

// function App() {
//   const [nilai, setNilai] = useState(0);

// const terbang = useCallback(() => {
//     console.log("Burung terbang");
//   }, []);
//   return (
//     <>
//       <p>Nilai: {nilai}</p>
//       <button onClick={() => setNilai(nilai + 1)}>Tambah Nilai</button>
//       <button onClick={terbang}>Terbang</button>
//     </>
//   );
// }
// export default App;


// PEMBELAJARAN useRef
// import { useRef } from "react";
// function App() {
//   const SirineRef = useRef(null);
  
//   const nyalakanSirine = () => {
//     SirineRef.current.style.backgroundColor = "red";
//   }
//   return (
//     <>
//       <div ref={SirineRef} style={{width: '100px', height: '100px', backgroundColor: 'grey'}}></div>
//       <button onClick={nyalakanSirine}>Nyalakan Sirine</button>
//     </>
//   )
// }
// export default App;

// PEMBELAJARAN useContext

import { TemaContext } from "./TemaContext";
import Header from "./Header";

function App() {
  return (
    <TemaContext.Provider value="gelap">
      <Header />
    </TemaContext.Provider>
  );
}

export default App;
