let barang = [
    {nama:"beras", harga:10000, jumlah:5},
    {nama:"gula", harga:14000, jumlah:5},
    {nama:"telur", harga:20000, jumlah:2},
    {nama:"Minyak Goreng", harga:9000, jumlah:10}
] 
let total=0;
for (let i=0; i < 4;i++){
    total += barang[i].harga * barang[i].jumlah;
}
console.log(barang);
console.log("Total="+total)
