// Js de querySelector ile seçtiğimiz değişkenler "Html Collection" formatında alınır ve forEach yapılmaz.Seçilen değiişkneler arasında forEach kullanabilmek için önce arraya çevirmemiz lazım.ör:

// //section değişenini seçtik//
// const sefa = document.querySelector("section")

// Array.from(sefa.children).forEach(child =>{
//     child.classList.add("section-element")
// })

// //Yukarıda sefa nın altındaki tüm child ları gezdik ve "section-element" clası ekledik.
