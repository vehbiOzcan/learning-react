/*
import { isim as name} from './modul'; //burada isim i adını name olarak kullanacağız bu dosyada
import { default as merhaba, kullanici } from "./modul"; //default bir yapıyı diğer yapılarla import etmek istiyorsak default as anahtarı ile belirtmemiz lazım
//Hem import hem export yapacaksak default olanları ayrı satırda yapmamız lazım 
export { default as merhaba } from "./modul";
export * from './modul'; //tamamını import edeceksek bu şekilde 
*/
const kisi = {
    name: "Mehmet",
    age: "18"
}
const adres = {
    sok: "74522",
    no: "4"
}

const kullanici = { ...kisi, ...adres };
console.log(kullanici);

//Ternary Conditions
kopruDurumu = "acik";

kopruDurumu === "acik"
    ? console.log("Köprü açık")
    : console.log("köprü kapalı");

kopruDurumu = "kapali";
kopruZamani = "tam";

kopruDurumu === "acik"
    ? console.log("Köprü açık")
    : (kopruDurumu === "kapali" && kopruZamani === "tam")
        ? console.log("köprü kapalı")
        : console.log("köprü durumu belirsiz");

//Array Methods 
const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];
//Bu fonksiyonlar içlerine callback fonksiyon alırlar
console.log(urunler.find((urun) => urun.fiyat > 5));  //şartı tutan ilk elemanı döndürür ve sonlandırır

console.log(urunler.some((urun) => urun.fiyat > 2));  //tüm elemnalara bakar eğer bir tane bile şartı sağlayan eleman varsa değeri döner

console.log(urunler.every((urun) => urun.fiyat > 2));  //tüm elemanlara bakar eğer her eleman şartı sağlıyorsa true döner aksi halde false

//.includes() metodu büyük küçük harf duyarlı bir string içerisinde parça veya tümünün olup olmadığını kontrol eder ve geriye boolean değer döner
const ad = "MEHMET";

const arama = "Mehmet";

console.log(ad.includes("mehmet"));//false

console.log(ad.includes("MEH"));//true

console.log(ad.toLowerCase().includes(arama.toLowerCase())); //true

console.log(urunler.filter(urun => urun.name.toLowerCase().includes("kalem"))); // [ { id: 1, name: 'Kalem', fiyat: 5 },{ id: 4, name: 'Kalemtraş', fiyat: 7 } ]

//.map() metodu içerisine callback fonksiyon alır ve dizi elemanlarını tek tek gezerek kullanılabilmesini sağlar ayrıca her 
//bir dizi elamnı için yapılan değişiklikleri/kullanımları içerisinde başka bir diziye ekler ve o diziyi döndürür 

console.log(urunler.map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`)); 
/*Çıktı:
[
    'Kalem fiyatı 5 liradır.',
    'Defter fiyatı 10 liradır.',
    'Silgi fiyatı 2 liradır.',
    'Kalemtraş fiyatı 7 liradır.'
]
*/
//bu içine gönderdiğimiz callbacki şu şekildede yazabiliriz:
const urunOluşturucu = (urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`;
//işlemler uzun olursa karmaşayı önler ve tekrar kullanabilmeyi kolaylaştırır
console.log(urunler.map(urunOluşturucu));

//react ile kulanımı:
function UrunGoster({urunListesi}){
   // return urunListesi.map((urun,index) => <li key={index}>{urun.name} fiyatı {urun.fiyat}</li>);//JSX olduğu için dolar işareti olmadan süslü parantezi kullanabiliriz
}

//.filter() metodu parametre olarak bir callback fonksiyon alır ve dizi elemanlarını tek tek dolaşır, callback fonksiyon içine verilen şarta göre true veya false değeri döner
//true değerini dönen yani koşulu sağlayan dizi elemanları yeni bir diziye aktarılır, sonrasında filter metodu yeni diziyi dışa döner.

console.log(urunler.filter(urun => urun.name.toLowerCase().includes("kalem")));
/*Çıktı:
[
    { id: 1, name: 'Kalem', fiyat: 5 },
    { id: 4, name: 'Kalemtraş', fiyat: 7 }
]
*/ 

console.log(urunler.filter(({fiyat}) => fiyat > 5).map(urun => `${urun.name} adlı ürünün fiyatı 5'ten büyüktür`)); //filter metod zaten dizi döndüğü için map ile yeni diziyi kullandık 
                            //bu kısımda object destructuring yaptık 
/*Çıktı:
[
    "Defter adlı urunun fiyatı 5'ten büyüktür",
    "Kalemtraş adlı urunun fiyatı 5'ten büyüktür"
]
*/

//.reduce() :

//.reduce() metedu içerisine bir callback fonksiyon ve birde başlangıç değeri alır. reduce(fuction(accumulator,currentArrayValue,index,array){},initialValue) 
/*1.parametre olan callback fonksiyon parametreleri:
accumulator = toplam yani toplayıcı değer üzerinde işlem yapıp biriktirdiğimiz değerler burada tutulur, geriye dönen değerdir.
currentArrayValue = o an için üzerinde işlem yaptığımız array elemanıdır.
index = üzerinde işlem yapılan dizinin index değeridir.
array = üzerinde işlem yapılan dizinin kendisidir.
2.parametre
initialValue = üzerine eklenilecek olan ilk değer.

bu fonksiyon bir diziyi tek bir değere indirgemeye yarar. indirgenen değer geriye dönülür
*/ 
//toplama işlemi
console.log(urunler.reduce((toplam,urun) => toplam += urun.fiyat,0)); //24

//String birleştirme
console.log(urunler.reduce((toplam,urun) => toplam = `${toplam} ${urun.name}`,"Urun Listesi: "));

//.map() metodu yerine kullanımı
const reducedArray = urunler.reduce((toplam,urun) => [...toplam,urun.name],[]);

//.map() ile aynı dizi 
const reducedArrayWithMap = urunler.map((urun) => urun.name);

console.log(reducedArray); // [ 'Kalem', 'Defter', 'Silgi', 'Kalemtraş' ]
console.log(reducedArrayWithMap); // [ 'Kalem', 'Defter', 'Silgi', 'Kalemtraş' ]

//Promises and async/await:
//Promise ler bizim verilerimizi senkron oloarak almamızı sağlar üretilen promise callstackte en aşağı çekilir bu sayede işlem kontrolümüz kolaylaşır
const veriAl = new Promise((resolve,reject) => {
    let veriDurumu = true;
    if(veriDurumu){
        resolve("Başarılı");

    }else{
        reject("Başarısız");
    }
});

veriAl
.then(response => console.log(response))
.catch(err => console.log(err));

const axios = require("axios");

async function ulkeGetir(){
    // axios.get("https://restcountries.eu/v3.1/name/Turkey")
    // .then(response => console.log(response))
    // .catch(err => console.log(err)); //Bu kullanıma alternatif ama daha iyi bir yöntem async/await kullanmaktır
    const veri = await axios.get("https://restcountries.eu/v3.1/name/Turkey"); //JSON objesi döner
    console.log(veri);
}

// function lar js dosyalarınnda (callstack'te) hoist edilirler yani işlenmeye başlamadan önce yukarı çekilirler ama 
//async olarak belirtilen bir fonksiyon aslında bir promise yapısı döndüğü için
//tam tersi olarak callstackte aşağı çekilirler bu sayede içinde await anahtar kelimemizide kullanmaya olanak tanır 
//yani veri gelmesini veya işlemin tamamlanıp alt satıra geçmesini sağlar await anahtar kelimesi yalnızca async fonksiyonlar içerisinde 
//kullanılabilir bunun mantığı ise yukarıda bahsettiğimiz callstacte aşağı çekilme durumudur.