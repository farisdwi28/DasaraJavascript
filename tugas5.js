class Lingkaran {
    constructor(r){
        this.jarijari = r
    }
    luas (){
        return Math.PI * this.jarijari ** 2
    }
    keliling (){
        return 2 * Math.PI * this.jarijari
    }
}
class kerucut extends Lingkaran {
    constructor(r,t,s){
        super (r)
        this.tinggi = t
        this.selimut = s
    }
    volume (){
        return 1/3 * Math.PI * this.jarijari * this.jarijari * this.tinggi
    }
    luaspermukaan (){
        return (Math.PI*this.jarijari**2)+(Math.PI*this.jarijari*this.selimut)
    }
    luasselimut (){
        return Math.PI * this.jarijari * this.selimut
    }
}
class bola extends Lingkaran {
    constructor(r){
        super (r)
    }
    volume (){
        return 4/3 * Math.PI * this.jarijari ** 3
    }
    luaspermukaan (){
        return 4 * Math.PI * this.jarijari ** 2
    }
}
class tabung extends Lingkaran{
    constructor(r,t){
        super(r,t)
    }
    volume (){
        return  Math.PI * this.jarijari ** 2 * this.tinggi
    }
    luaspermukaan (){
        return 2 * Math.PI * this.jarijari * (this.jarijari + this.tinggi)
    }
    luasselimut (){
        return 2 * Math.PI * this.jarijari * this.tinggi
    }
}
let data = new kerucut(10,40,5);
console.log("Volume Kerucut = "+data.volume())
console.log("Luas Permukaan Kerucut = "+data.luaspermukaan())
console.log("Luas Selimut Kerucut = "+data.luasselimut())
console.log("-----------------------------------------------")
data = new bola(15)
console.log("Volume Bola = "+ data.volume())
console.log("Luas Permukaan Bola = "+ data.luaspermukaan())
console.log("-----------------------------------------------")
data= new tabung(15/2,50)
console.log("Volume Tabung = "+data.volume())
console.log("Luas Permukaan Tabung = "+data.luaspermukaan())
console.log("Luas Selimut Tabung = "+data.luasselimut())
console.log("---------------------DONE----------------------")

