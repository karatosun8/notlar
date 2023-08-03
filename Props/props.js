//! Faydalı Bilgiler


{/* Inline CSS (Cift suslu ile key-value yapisi ile stil verilebilir) */}
<h2 style={{ color: "white", backgroundColor: "red" }}>REACT JS</h2>


{/* public klasorunde bulunan bir resime dogrudan ana dizinmis gibi yol ile erisilebilir. import gerek yoktur  */}
<img src="./assets/dandelion.jpeg" alt="dandelion" />


//! Props ile ÇAlışma

// data.js dosyanın içeriğinde hangi bilgiler olduğunu incele

{/*Veriler parentden childe doğru akar.Klasördeki bir dosyadan data çekerek çalışma yapmak istiyorsak sırasıyla;

1-App componentinden data yi import et.ve console.log(data) yazarak veririn gelip gelmediğini kontrol et.

//? import data from "./data" veya data {data} içinde olmalı

2-Data yı child komponente göndermek için bikaç yol vardır.1.yol = Birden fazla statemet kullanicaksa o zaman fonksiyonun suslu  ve return
 keywordu kullanamsi gerekir.Örnek aşağıda;
 return ün içine aşağıdaki kodu yaz

   {data.map((item) => {
       const { id, language, img, btnName } = item
        return <Card key={id} lang={language} img={img}btn={btnName} />
     })}
      Yukarıdaki örnekte Card komponentine data daki verileri propsla gönderdik.

2.yol =  //? iterasyon
Örnek aşağıda;

//? {data.map(({ id, language, img, btnName }) => (
//?        <Card key={id} lang={language} img={img} btn={btnName} />
//?      ))}
      Yukarıda Card komponentine veriler gönderildi.

//! Card komponentinin yapısı aşağıdadır:
 
//?  const Card = ({ lang, btn, img }) => {
//?  return (
//?    <div>
//?      <h1 className={CardStyle["title"]}>{lang}</h1>
//?      <img className={CardStyle["images"]} src={img} alt="image" />
//?      <Buton btn={btn} />
//?    </div> )}


 */}