let tinggi = 1.7;
let berat = 90;
let bb;

console.log(bb=90/(1.7*2));
if (bb<18.5){
    console.log("Kekurangan Berat Badan");
}else if(bb>=18.5 && bb<=24.9){
    console.log("Normal(IDEAL)");
}else if(bb>=20.0 && bb<=29.9){
    console.log("Kelebihan Berat Badan");
}else if(bb>=30.0){
    console.log("Kegemukan(Obesitas)");
}
