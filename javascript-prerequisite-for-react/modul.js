function merhaba(){
    return "Merhaba";
}

const kullanici = {isim:"Mehmet", yas:20};
const isim = "Ahmet";

export {default as merhaba,isim,kullanici}; // tek satırda export yapıyorsak default olarak export edeceğimiz yapıyı belirtmemiz lazım