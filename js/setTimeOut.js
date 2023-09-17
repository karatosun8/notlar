// SetTimeout da kod bir defa çalışır.ör:
// SetTimeout(()=>{
//     console.log("sefa");
// },2000)  mesela bu kodda 2 sn sonra bir defa çalışır


// setInterval ise sürekli çalışır.mesela aşağıdaki örnekte her 2 sn de bir çalışır ve consola sefa yazar.
// SetInterval(()=>{
//     console.log("sefa");
// },2000) 

// setInterval i durdurmak için bir değişkene atanır.aşağıdaki kodu incele.

let i =0;
const bastır = setInterval(()=>{
    console.log("sefa");
    i++;
    if(i ==4)
    {
        clearInterval(bastır)
    }
},1000);
// yukarıda i 4 oluncaya kadar her 1 sn de bir sefa yazar 4 olunca clearInterval ile durur.
