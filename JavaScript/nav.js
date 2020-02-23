
//categoryBtn variable to access the header buttons
//main variable to put the content.
//categoryArray is used to remove all other classes
//templateArray is the link to templates for the pages
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
          cv(doc);
        }
        //projects
        if (e.target == categoryBtn[2]) {
          console.log("ye");
        }
      
      });
    });
 
}
