
//categoryBtn variabel to acces the header buttons
//main variable to put the content.
//categoryArray is used to remove all other classes
//templateArray is the linkt ot templates for the pages
for (let i = 0; i < templateArray.length ; i++) {
  
    Fetchhtml("/htmlTemplate/" + templateArray[i]).then(document => {
      const doc = textToHtml(document);
      //about me
      categoryBtn[i].addEventListener("click", (e) => {
        if(e.target == categoryBtn[0]){
          aboutme(doc)
        }
        //CV
        if (e.target == categoryBtn[1]) {
          console.log("ye");
        }
        //projects
        if (e.target == categoryBtn[2]) {
          console.log("ye");
        }
        //education
        if (e.target == categoryBtn[3]) {
          console.log("ye");
        }


      });
    });
 
}