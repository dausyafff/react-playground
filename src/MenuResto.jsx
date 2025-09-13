function MenuResto(){

  const styleMenuItem = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "5px"
  }

  const isMakanan = true;
  const menu = [
    {nama : "Nasi Goreng", harga : 12500},
    {nama : "Mie Goreng", harga : 12000},
  ]
  return (

    <>
      {
        menu.map((item, index) => {
          return (
            <div style={styleMenuItem} key={index}>
              <h1>Dausyaf</h1>
              <p>Menu Resto <em>best seller</em></p>
              <li>{item.nama}</li>
              <li>{item.harga}</li>
            </div>
          )
        })
      }
    </>

  )
}
export default MenuResto