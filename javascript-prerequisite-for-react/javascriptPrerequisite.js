//TEMPLATE-LITERAL (ŞABLON DİZİLERİ)

const cname = "Audi";
const model = "A6";
const car = `${cname} ${model}`;
console.log(car);

//----------------------------------------------------------
//ES6 SHORTHAND PROPERTY NAMES (KISAYOL OBJE ANAHTAR ADLARI)

/*Javascript objeleri, key - value(anahtar - değer) sistemiyle çalışan bir veri tipidir.Bir obje oluştururken, 
değer bir değişkenden geliyorsa, anahtarın açıkça belirtilmesine gerek yoktur.Değişkenin direkt olarak objeye 
girilmesi, değişkenin ismini anahtar olarak, değerini ise değer olarak atar.*/

const isim = "Mehmet";
const yas = "30";
const personObject = { isim, yas }; //{isim: isim, yas: yas} yapmak ile aynıdır 
console.log(personObject); //çıktı:  {isim:"Mehmet", yas:"30"}

/* //React ile kullanmı
function Sayac({baslangicDegeri,adim}){
    //aşağıodaki kısımda object destructing var    
    const [sayac,setSayac] = useCounter({baslangicDegeri,adim}); //fonksiyon içinde gönderilen kısımda shorthand kullanımı var
    return <button onClick={setSayac}>{sayac}</button>
}
*/

//----------------------------------------------------------
// ARROW FUNCTION (OK FONKSİYONU)

/*
Oklu fonksiyon ifadeleri, Javascript'te fonksiyon oluşturmanın yeni bir yöntemidir. 
En önemli ve sık kullanılan özelliklerinden bir tanesi implicit (üstü kapalı) return özelliğidir.
*/

//topla(3, 5); // ReferenceError: Cannot access 'topla' before initialization at <anonymous>:1:1
//arrow function lar tanımlanmadan önce çağrılamazlar yani function anahtar kelimesiyle oluşturulan fonksiyonlar gibi hoist edilemezler
//çünkü function ifadesi hoist edilir yani kod çalıştırılmadan önce en yukarıya çıkarılır. (hoist = yukarı kaldırmak)

const topla = (sayi1, sayi2) => {
    return sayi1 + sayi2;
};
console.log(topla(3, 5));//8

// Fonksiyon içinde herhangi başka bir ifade olmaksızın tek bir ifade döndürülüyorsa implicit return (gizli return) özelliği kullanılabilir:

const toplama = (sayi1, sayi2) => sayi1 + sayi2;

// Fonksiyon tek bir parametre alıyorsa eğer parantezleri de kullanmamıza gerek yok.

const kare = a => a * a;
console.log(kare(2)); //4

//----------------------------------------------------------
//OBJECT/ARRAY DESTRUCTING (OBJE/DİZİLERİN PARÇALANIP DEĞİŞKENLERE ATANMASI)

//Object destructing yaparken obje anahtarları ile değişken isimleri aynı olmak zorundadır
const kullanici = { ad: "Ahmet", mail: "deneme@", sehir: "Konya" };
const { ad, mail } = kullanici; // Burada isim ve yas ismiyle iki değişken oluşturduk.
// Bu işlem, aşağıdaki iki işlemle aynıdır.
// const isim = kullanici.isim;
// const yas = kullanici.yas;

console.log(ad); //Ahmet
console.log(mail); //deneme@

//Eğer sadece tek bir değere ihtiyacınız varsa, onu alıp diğerlerini tek bir değişkene obje olarak atayabilirsiniz. 
//(Rest/Spread operatörüyle ilgili detaylı bilgi: Rest/Spread Operator)

//const { ad, ...kalanlar } = kullanici; // (...) rest/spread operatörüdür.
//burada kullanılan rest operatörü

console.log(isim); // "Ahmet"
console.log(kalanlar); // {mail: "deneme@" , sehir:"Konya"}

//Bir React örneği: Prop'lardan alınan veriler olay yerinde parçalanıp değişkenlere atanabilir.

// Normalde KullaniciYasGoster(props) yapabilirdik, ama props içinde isim ve yas olduğunu bildiğimiz için object destructing yaptık
function KullaniciYasGoster({ isim, yas }) {
    return `${isim} isimli kullanıcı ${yas} yaşındadır.`;
}

//Dizilerde destructuring yaparken ise elemanların sırası önemlidir. İlk eleman, ilk girilen değişkene atanır.

const sayilar = [1, 2, 3, 4, 5];
const [bir, iki, uc, dort, bes] = sayilar; // Burada 1,2,3,4,5 sayılarını bir,iki,uc,dort,bes değişkenlerine atadık.

console.log({ bir, iki, uc, dort, bes }); // { bir: 1, iki: 2, uc: 3, dort: 4, bes: 5 }

//İlk elemanı bir değişkene atamak, geri kalanları tek bir diziye atamak isterseniz, objede olduğu gibi rest/spread 
//(toparlama/yayma) operatörünü kullanabilirsiniz.
/*
const sayilar = [1, 2, 3, 4, 5];
const [bir, ...kalanlar] = sayilar; // Burada ilk elemanı bir değişkenine atadık. Kalanlar ise kalanlar değişkenine atandı.
*/

//console.log({ bir, kalanlar }); // {bir: 1, kalanlar: [2,3,4,5] }
// Spread operatörüyle oluşturulan kalanlar değeri, Rest element olarak adlandırılır. 
//Bu eleman. her zaman objenin veya dizinin son elemanı olarak gelmek zorundadır. Örneğin şöyle bir kullanım geçerli değildir.

//const [...ilkler, bes] = sayilar; // Uncaught SyntaxError: Rest element must be last element

//----------------------------------------------------------
//PARAMETER DEFAULTS (varsayılan parametre)

//Bir fonksiyonun aldığı parametreler için varsayılan değerler girilebilir. 
//Eğer fonksiyon çağırıldığında bu değerler girilmezse, varsayılan değerler hesaba katılır.
/*
topla(3, 5); // 8 döndürür
topla(3); // 3 döndürür
topla(); // 0 döndürür
*//*
function topla(sayi1 = 0, sayi2 = 0) {
  // Burada eğer fonksiyon parametreleri girilmezse varsayılan olarak 0 değerini tanımladık.
    return sayi1 + sayi2;
}*/
// Bir React örneği:

//const STATE_BASLANGICI = { yukleniyor: false, yazilar: [] };
/*
const reducer = (state = STATE_BASLANGICI, action) => {
  // burada state değerine başlangıç olarak STATE_BASLANGICI değeri atadık.
  // reducer detayları
    return state;
};
*/


//----------------------------------------------------------
//REST/SPREAD OPERATOR (TOPLAMA VE YAYMA OPERATORU)

//Bu operatör farklı durumlarda farklı anlamlara gelebilir. Toparlama özelliğine Object/Array Destructuring bölümünde değindik. 
//Burada ise yayma özelliğine ve kullanım amaçlarına bakacağız.
//Yayma operatörü, bir obje veya bir diziyi alıp, içindeki tüm elemanları tek tek döndürür. 
//React projelerinde en önemli kullanım amaçlarından bir tanesi, immutability (değişmezlik) kuralına riayet edebilmek içindir. 
//Örneklerle açıklayalım.

//Örneğin bir kullanıcı objemiz var ve kullanıcının şehir bilgisini değiştirmek istiyoruz.

//let kullanici = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };

//kullanici.sehir = "Ankara"; //Mutable etme bu yöntem reactta stateler üzerinde asla yapılmaz

//console.log(kullanici); // { isim: "Mehmet", yas: 35, sehir: "Ankara" }
/*
Her şey yolunda görünüyor. Kullanıcının şehir bilgisini değiştirmek istedik ve değiştirdik. 
Ancak React ekosisteminde, state üzerinde yapılan değişiklikler state objesini mutate etmeden (doğrudan değiştirmeden) yapılmalıdır.
Yukarıdaki örnekte, kullanici objesinin hafızadaki (RAM) yeri değişmedi. 
Sadece objenin bir elemanı güncellendi. React bu şekilde yapılan değişiklikleri algılayamıyor. 
State üzerinde yapılan bir değişikliğin algılanamaması demek, rendering (ekrana yazdırma) işleminin tetiklenememesi demek.
 Bu da değişikliğin tarayıcıda yansıtılamaması anlamına geliyor.
Oysaki bizim yapmamız gereken şey, sehir değeri güncellenmiş yeni bir obje oluşturmak ve onu mevcut kullanici objesi ile yer değiştirmek.
 Bu durumda güncellemeyi şöyle yapabiliriz:
*/

//let kullanici = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };

//kullanici = { ...kullanici, sehir: "Ankara" };

//Burada yapılan işlem şudur: Önce bir kullanici oluşturduk. Arkasından bu kullanici değişkenine başka bir obje atadık.
 //Bu objenin içine kullanici objesinin bütün değerlerini yaydık (...kullanici bölümü). Arkasından bir de sehir: "Ankara" değeri ekledik.
 // Yeni obje şu şekilde oldu:

//kullanici = { isim: "Mehmet", yas: 35, sehir: "İstanbul", sehir: "Ankara" };
/*
Dikkat ederseniz obje içinde iki tane sehir değeri oldu. Objelerin aynı isimle iki tane anahtarı olamayacağından ikinci anahtarın değeri,
birinci anahtarın değerinin üzerine yazıldı, böylelikle İstanbul değeri Ankara olarak güncellenmiş oldu. 
Tüm bunları yeni bir obje içerisinde yaptığımız için orjinal objenin değerlerine dokunmadan yapmış olduk. 
Yeni kullanici objesinin hafızada (RAM) bulunduğu yer de burada güncellenmiş oldu.
*/
//Şimdi aynı örneği Redux reducer içinde görelim:
/*
INITIAL_STATE = {
  yukleniyor: false,
  hataMesaji: "",
  arabalar: ["Mercedes", "BMW", "Audi"],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ARABA_EKLE":
      return { ...state, arabalar: [...state.arabalar, action.payload] };
    default:
      return state;
  }
};
*/
//Şimdi return { ...state, arabalar: [...state.arabalar, action.payload] } kısmında ne yaptığımızı anlatalım.
/*
TOFAS_EKLE action çağırıldığında return kelimesi ile yeni bir obje döndürüyoruz, oradaki bir çift süslü parantez yeni bir objeyi 
ifade ediyor. Bu objenin içine mevcut state'deki her şeyi dolduruyoruz, ...state bunu ifade ediyor. 
Arkasından arabalar değerini güncelliyoruz. Onun içine de yeni bir dizi koyuyoruz, oradaki köşeli parantezler yeni bir diziyi ifade ediyor.
Hemen arkasından ...state.arabalar ifadesiyle state.arabalar dizisindeki bütün arabaları o dizinin içine kopyalıyoruz, 
üzerine bir de Tofas ekliyoruz. Bu sayede ARABA_EKLE action her çağırıldığında, yeni bir state objesi döndürmüş oluyoruz, 
döndürdüğümüz state objesinin hafızadaki (RAM) yeri değişmiş oluyor.Yeri değişincede React bakıyor state değişince kullanıcının
tarayıcısına bu değişiklik yansıyor. Bu sayede React değişikleri algılayabiliyor.

Örnek RAM deki durum:
0001 <- {yükleniyor, hataMesaji, arabalar} <- state 
biz spread operatorü sayesinde yeni obje içerisine eski obje bilgilerini ekleyip return ledikten sonra Ramde şöyle gözükür
0001 <- {yükleniyor, hataMesaji, arabalar} 
0002 <- {yükleniyor, hataMesaji, [...arabalar,"tofas"]} <- state  
state yerdeğiştirdiği için React değişiklikleri algılıyor
//burada dizimiz ["mercedes","bmw","audi","tofas"] oldu

*/

//----------------------------------------------------------
//ES MODULES (ES MODULLERİ)
/*
Modül sistemi sayesinde belirli kod blokları yeniden kullanmak ve organizasyon amaçlı import/export (içe/dışa aktarma) edilebilir. 
İki adet içe/dışa aktarma yöntemi vardır: named (isimli) ve default (varsayılan).
*/
/*
İsimli dışa aktarmada export ifadesi ardından dışa aktarılmak istenen Javascript ifadesi gelir.
Dışa aktarılan değişken, fonksiyon, obje, vs. aynı isimle import edilmelidir.
Bir dosyada birden fazla named export (isimli dışa aktarma) yer alabilir.
*/
//---Named Exports & Imports (isimli dışa/içe aktarmalar)---

//Javascript ifadeleri oluşturulduğu yerde dışa aktarılabilir.
/*
export let isim = "Mehmet"; // oluşturuldu ve dışa aktarıldı
export const kullanici = { isim, yas: 35 }; // oluşturuldu ve dışa aktarıldı
export function merhaba(isim) {
  // oluşturuldu ve dışa aktarıldı
  return `Merhaba, ${isim}`;
}*/
//Bu üç ifade, isim, kullanici, merhaba, önce oluşturulup ardından liste şeklinde tek bir satırda dışa aktarılabilir.
/*
let isim = "Mehmet";
const kullanici = { isim, yas: 35 };
function merhaba(isim) {
  return `Merhaba, ${isim}`;
}

export { isim, kullanici, merhaba };*/
//Named exports (isimli dışa aktarmalar) başka dosyalarda içe aktarılırken, süslü parantezler içinde, dışa aktarma sırasında kullanılan 
//isimlerle eşleşecek şekilde kullanılır.

//Yukarıdaki dışa aktarmalar başka dosyalarda şöyle içe aktarılır:

//import { isim, kullanici, merhaba } from "./dosyaadi.js";
//İçe aktarma sırasında içe aktarılan ifadenin adı değiştirilebilir.
/*
import {
  isim as name,
  kullanici as user,
  merhaba as hello,
} from "./dosyaadi.js";
*/
//---Default Exports & Imports (varsayılan içe/dışa aktarmalar)---
//Her dosyada yalnızca bir tane default export (varsayılan dışa aktarma) yapılabilir.
/*
export default function merhaba(isim) {
  return `Merhaba, ${isim}!`;
}
*/
//Aynı satırda hem isimli hem de varsayılan dışa aktarma aynı anda yapılabilir.

//export { merhaba as default, isim, kullanici }; // merhaba varsayılan, diğerleri isimli dışa aktarma
//Varsayılan olarak dışa aktarılan ifadeler süslü parantezler olmadan içe aktarılır.

// merhaba.js
/*
export default function merhaba(isim) {
  return `Merhaba, ${isim}!`;
}*/

// anasayfa.js
//import merhaba from "./merhaba.js";
//Hem varsayılan hem isimli dışa aktarma olan bir dosyadan içe aktarılırken, süslü parantez kullanılır ve varsayılan içe aktarmaya isim verilir.

//import { default as merhaba, isim, kullanici } from "./dosyaadi.js"; // merhaba varsayılan, diğerleri isimli içe aktarma

/*
Immediate re-export (anında yeniden dışa aktarma)
İçe aktarılan bir modül aynı satırda hiç bekletmeden dışa aktarılabilir. Varsayılan ve isimli olarak içe aktarılan modüller tek bir satırda anında yeniden dışa aktarılamazlar. Bu yüzden iki ayrı satırda ayrı ayrı dışa aktarmak gerekir.
*/
/*
export { default as merhaba } from "./dosyaadi.js"; // bir dosyadaki varsayılan dışa aktarmayı merhaba ismiyle yeniden dışa aktarma
export * from "./dosyaadi.js"; // bir dosyadaki tüm isimli dışa aktarmaları tek bir obje olarak dışa aktarma
*/


//----------------------------------------------------------
//TERNARY CONDITIONAL OPERATOR (3 DEĞİŞKENLİ KOŞUL OPERATORÜ )

//koşul ? doğruysa : yanlışsa

//Ternary operatörleri üç adet ifade alır. İlk ifade koşuldur. Koşul true yani doğru olarak hesaplanırsa soru 
//işaretinden sonraki kısım işleme alınır, false yani yanlış olarak hesaplanırsa iki nokta işaretinden sonraki kısım işleme alınır.
/*
kopruAcikMi
  ? "Anadolu yakasina gecebilirsiniz"
  : "Anadolu yakasina gecisler iptal";
  */
/*
Javascript'te yanlış  (false) olarak hesaplanan ifadeler:
 null
 NaN
 0
 "" (empty string)
 undefined
 */
//name ? `Merhaba, ${name}` : `Merhaba misafir`; // isim tanımlanmamışsa yahut boş ise Merhaba misafir döndürülecektir.





//----------------------------------------------------------
//ARRAY METHODS
/*
.find() .some() .every() .includes() .map() .filter() .reduce()

Dizi elemanlarını bir callback fonksiyonu yardımıyla tek tek gezip belirli kontroller yapabildiğimiz, Javascript'in yeni versiyonuyla 
dizi prototipi olarak hazır gelen metodlardır.

Şöyle bir örnek verimiz olsun.
/*
const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 10 },
  { id: 3, name: "Silgi", fiyat: 2 },
  { id: 4, name: "Kalemtraş", fiyat: 7 },
];

.find()
Dizide bir eleman bulmaya yarar. Eleman bulunduğu anda arama işlemi durdurur ve bulunan elemanı döndürür. 
Aynı koşulları sağlayan başka bir eleman olması durumunda ilk bulunan eleman döndürülür.

urunler.find((urun) => urun.fiyat > 5); // {id: 2, name: "Defter", fiyat: 10}
.some()
Dizide en az bir elemanın, girilen koşulu sağlayıp sağlamadığıyla ilgili true/false döndürür.

urunler.some((urun) => urun.fiyat < 2); // false, dizide bir tane bile fiyatı 2'den düşük olan yok
urunler.some((urun) => urun.fiyat > 9); // true, dizide en az bir tane fiyatı 9'dan büyük olan var
.every()
Dizideki tüm elemanların girili koşulu sağlayıp sağlamadığıyla ilgili true/false döndürür.

urunler.every((urun) => urun.fiyat > 1); // true, tüm ürün fiyatları 1'den büyük
urunler.every((urun) => urun.fiyat < 10); // false, tüm ürün fiyatları 10'dan küçük DEĞİL
.includes()
Bir string içinde, verilen ifadenin olup olmadığını kontrol eder, küçük/büyük harf duyarlıdır.

urunler.some((urun) => urun.name.includes("Kalem")); // true, bazı ürün isimleri Kalem içeriyor
urunler.every((urun) => urun.name.includes("Kalem")); // false, tüm ürün isimleri Kalem içermiyor
.map()
Verilen dizi elemanlarına, girilen callback fonksiyonu uygular ve elde edilen sonuçlarla yeni bir dizi oluşturur.

urunler.map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`);
// ["Kalem fiyatı 5 liradır.", "Defter fiyatı 10 liradır.", "Silgi fiyatı 2 liradır.", "Kalemtraş fiyatı 7 liradır."]
React içinde:

function UrunGoster({ urunListesi }) {
  return urunListesi.map((urun) => <li key={urun.id}>{urun.name}</li>);
}
.filter()
Verilen dizi elemanlarına, girilen callback fonksiyonu uygular, false döndüren sonuçları eler ve true döndüren sonuçlarla yeni 
bir dizi oluşturur.

urunler.filter((urun) => urun.name.includes("Kalem")); // [{id: 1, name: "Kalem", fiyat: 5}, {id: 4, name: "Kalemtraş", fiyat: 7}]
.filter() ve .map() her ikisi de yeni bir dizi döndürdüğünden, birbirine eklenerek tek satırda kullanılabilir.

urunler
  .filter((urun) => urun.name.includes("Kalem")) // Önce Kalem içeren ürünleri bul
  .map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`); // Ardından bulunan elemanlara verilen callbak fonksiyonu uygula

// ["Kalem fiyatı 5 liradır.", "Kalemtraş fiyatı 7 liradır."]
.reduce()
Verilen dizinin elemanları üzerinde, reducer olarak verilen callback fonksiyonu uygular. Bu fonksiyonun döndürdüğü sonuç her bir 
döngüde hatırlanır ve bir sonraki döndürülen sonuç bir öncekine eklenir. Reducer fonksiyonu dört adet parametre alır: 
accumulator (her döngüden çıkan sonucun toplandığı değer), current value (sırası gelen dizi değeri), 
current index (sırası gelen değerin dizideki konumu), ve source array (üzerinde reduce uygulanan dizi.)

.reduce() ayrıca ikinci parametre olarak başlangıç değeri alabilir. Matematiksel işlemler için başlangıç olarak bir sayı girileceği gibi,
string, dizi vs. de girilebilir.

Listedeki ürünlerin fiyat toplamı:

urunler.reduce((toplam, urun) => toplam + urun.fiyat, 0); // 24
Ürün isimlerinin tek satırda yazılışı:

urunler.reduce((isimler, urun) => isimler + " " + urun.name, "Ürün İsimleri:"); // "Ürün İsimleri: Kalem Defter Silgi Kalemtraş"
Ürün isim ve fiyatlarından bir string oluşturup yeni bir dizi olarak oluşturulması:

urunler.reduce(
  (yeniUrunListesi, urun) => [
    ...yeniUrunListesi,
    `${urun.name} ${urun.fiyat} liradır.`,
  ],
  [] // Başlangıç değeri boş dizi
);
// ["Kalem 5 liradır.", "Defter 10 liradır.", "Silgi 2 liradır.", "Kalemtraş 7 liradır."]
*/

//----------------------------------------------------------
//



//----------------------------------------------------------
//