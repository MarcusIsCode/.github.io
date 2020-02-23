

const textToHtml =(text)=>{
    const parser = new DOMParser();
    const doc = parser.parseFromString(text,"text/html");
    return doc;
}


async function Fetchhtml(path) {
  let response = await fetch(path);
  
  return await response.text();
}

//uses category array to add and remove classes 
const removeAddClassNav =(classs)=>{
   categoryArray.forEach(elemnt => {
     main.classList.remove(elemnt);
   });
   main.classList.add(classs);
}

    const aboutme = (doc) => {
      removeAddClassNav('aboutme');
      const text = doc.querySelector("p").innerText;
      main.innerHTML = text;     
    };
    const cv =(doc)=>{
    removeAddClassNav("cv");
      const cvText = doc.querySelector('.cvdiv').innerHTML
      main.innerHTML = cvText;
    }