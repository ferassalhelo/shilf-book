//body:
let bod = document.body;
bod.style.margin = "0";
bod.style.padding = "0";
bod.style.backgroundColor = "rgb(220,220,220)";

//header
let header = document.createElement("header");
bod.appendChild(header);
//style to header
header.setAttribute(
  "style",
  " width:80%; height:12vh; margin:0 auto; background-color:rgb(244, 240, 240); margin-bottom:15vh; padding:1vh 6%; border:1px solid rgb(90,90,90); border-radius:0 0 5px 5px;"
);

//div in heder:
let divHed = document.createElement("div");
header.appendChild(divHed);
//style to divHed
divHed.setAttribute(
  "style",
  "width:50%; height:10vh; padding:1vh; font-size:2.32vw; color:rgb(121, 120, 120);"
);

// text in div in header:
let textChildHeder = document.createTextNode("E-Book Exhibition");
divHed.appendChild(textChildHeder);

// main
let main = document.createElement("main");
bod.appendChild(main);
//style to main
main.setAttribute(
  "style",
  "width:80%; height:auto;padding: 0; margin:0 auto; padding:8vh 0 8vh 0; background-color:rgb(244, 240, 240); border:1px solid rgb(90,90,90); border-radius: 10px;"
);

//books
let books = [
  {
    title: "eagle in the sky",
    author: "wilbur smith",
    image: "imges/img.jpg"
  },
  {
    title: "call of the raven",
    author: "wilbur smith",
    image: "imges/img1.jpg"
  },
  {
    title: "the quest",
    author: "wilbur smith",
    image: "imges/img2.jpg"
  },
  {
    title: "when the lion feeds",
    author: "wilbur smith",
    image: "imges/img3.jpg"
  },
  {
    title: "warlock",
    author: "wilbur smith",
    image: "imges/images1.jpg"
  },
  {
    title: "a time to die",
    author: "wilbur smith",
    image: "imges/images2.jpg"
  },
  {
    title: "eagle in the sky",
    author: "wilbur smith",
    image: "imges/images4.jpg"
  },
  {
    title: "the dark of the sun",
    author: "wilbur smith",
    image: "imges/images5.jpg"
  },
  {
    title: "the eye of the tiger",
    author: "wilbur smith",
    image: "imges/images6.jpg"
  },
  {
    title: "cry wolf",
    author: "wilbur smith",
    image: "imges/images7.jpg"
  },
  {
    title: "the leopard hunts ",
    author: "wilbur smith",
    image: "imges/images8.jpg"
  },
  {
    title: "torn",
    author: "paul clarke",
    image: "imges/img4.jpg"
  }
];
let row = document.createElement("div");
main.appendChild(row);

//shilf for to books
for (let i = 0; i < books.length; i = i + 1) {
  if (i % 4 === 0) {
    row = document.createElement("div");
    main.appendChild(row);
    //style to shilf
    row.setAttribute(
      "style",
      "width:90%; margin:auto; margin-bottom:5vh;  padding-bottom:2vh; border:3px inset rgb(121, 120, 120); display:flex; flex-wrap:wrap; justify-content:space-around; border-radius:10px;"
    );
  }
  //the book
  let book = document.createElement("article");
  row.appendChild(book);
  // style the book
  book.setAttribute(
    "style",
    "width:21%; min-height:25vh; ; margin:3vh 0; background-color:white;  box-shadow:2px 2px 7px rgb(100,100,100), -2px -2px 7px rgb(100,100, 100); border-radius:5px; "
  );
  //div1 to imgbook the books
  let imgBook = document.createElement("div");
  book.appendChild(imgBook);
  //style imgbook
  imgBook.setAttribute("style", "height:17vh; width:100%;");
  //images in imgbook
  let imge = document.createElement("img");
  imgBook.appendChild(imge);
  imge.setAttribute("src", books[i].image);
  //style to imge
  imge.setAttribute(
    "style",
    "width:100%; height:100%; border-radius:5px 5px 0 0"
  );

  //titlebook to title the books
  let titleBook = document.createElement("div");
  book.appendChild(titleBook);
  //style to titlebook
  titleBook.setAttribute(
    "style",
    "height:3vh; width:100%; padding:1vh; font-size:1vw; font-weight:600; margin:auto; color:rgb(90,90,90)"
  );
  //text to titlebook
  let titleText = document.createTextNode("title : " + books[i].title + ".");
  titleBook.appendChild(titleText);
  //authorbook to the books
  let authorBook = document.createElement("div");
  book.appendChild(authorBook);
  //style authorbook
  authorBook.setAttribute(
    "style",
    "height:3vh; width:100%; padding:1vh; font-size:1vw; font-weight:600; margin:auto; color:rgb(90,90,90)"
  );
  //text to authorbook
  let authorText = document.createTextNode("author : " + books[i].author + ".");
  authorBook.appendChild(authorText);
}
//form to add
let formAdd = document.createElement("div");
bod.appendChild(formAdd);
// style to formAdd
formAdd.setAttribute(
  "style",
  "width:80%; background-color:rgb(190,190,190); margin:5vh auto;  padding-bottom:4vh; border:3px inset rgb(121, 120, 120); display:flex; flex-wrap:wrap; justify-content:space-around; border-radius:5px; display:flex; padding-top:4vh;"
);
//div to the imge add
let divImgAdd = document.createElement("div");
formAdd.appendChild(divImgAdd);
//style divImgAdd
divImgAdd.setAttribute("style", "height:12.5vh; width:30%;");
// img to add
let imgAdd = document.createElement("img");
divImgAdd.appendChild(imgAdd);
//atributes to imgAdd
imgAdd.setAttribute("src", "imges/add.jpg");
//style imgAdd
imgAdd.setAttribute(
  "style",
  "width:100%; height:100%; border-radius:100%; border-radius:10px 10px 0 0;"
);

//form
let formm = document.createElement("form");
formAdd.appendChild(formm);
//style to forrm
formm.setAttribute(
  "style",
  "width:60%; color:black; text-align:center; padding-left:2vh "
);
//input to titl
let titleAdd = document.createElement("input");
formm.appendChild(titleAdd);
//attrebutes input title
titleAdd.setAttribute("type", "text");
titleAdd.setAttribute("placeholder", "Enter title");
//style titleAdd
titleAdd.setAttribute("style", "width:90%;  margin-bottom:1vh");
// input to author
let authorAdd = document.createElement("input");
formm.appendChild(authorAdd);
//attrebutes to input authoradd
authorAdd.setAttribute("type", "text");
authorAdd.setAttribute("placeholder", "Enter authorad");
//style to authorAdd
authorAdd.setAttribute("style", "width:90%; margin-bottom:1vh;");
//input to src
let srcAdd = document.createElement("input");
formm.appendChild(srcAdd);
//attrebytes to input urll
srcAdd.setAttribute("type", "url");
srcAdd.setAttribute("placeholder", "ُEnter image URL");
//style to srcAdd
srcAdd.setAttribute("style", "width:90%; margin-bottom:1vh;");
// botton to add
let bottonAdd = document.createElement("input");
formm.appendChild(bottonAdd);
//attrebutes to bottom
bottonAdd.setAttribute("type", "button");
bottonAdd.setAttribute("value", "Add Book");
//style to bottonAdd
bottonAdd.setAttribute("style", "width:50%; margin-top:1vh;");
let x = window.matchMedia("(max-width: 450px)");
bottonAdd.addEventListener("click", function aad() {
  let title = titleAdd.value,
    author = authorAdd.value,
    image = srcAdd.value;

  if (title.length !== 0 && author.length !== 0 && image.length !== 0) {
    if (row.children.length % 4 == 0) {
      row = document.createElement("div");
      main.appendChild(row);
      //style to shilf
      row.setAttribute(
        "style",
        "width:90%; margin:auto; margin-bottom:5vh;  padding-bottom:2vh; border:3px inset rgb(121, 120, 120); display:flex; flex-wrap:wrap; justify-content:space-around; border-radius:10px;"
      );
    }
    let book = document.createElement("article");
    row.appendChild(book);
    // style book
    book.setAttribute(
      "style",
      "width:21%; min-height:25vh; ; margin:3vh 0; background-color:white;  box-shadow:2px 2px 7px rgb(100,100,100), -2px -2px 7px rgb(100,100, 100); border-radius:5px; "
    );

    //div1 to imeges the books
    let imgBook = document.createElement("div");
    book.appendChild(imgBook);
    //style imgBook
    imgBook.setAttribute("style", "height:17vh; width:100%;");
    //images in imgBook
    let imge = document.createElement("img");
    imgBook.appendChild(imge);
    imge.setAttribute("src", image);
    //style to imge
    imge.setAttribute(
      "style",
      "width:100%; height:100%; border-radius:10px 10px 0 0;"
    );
    //titleBook to title the books
    let titleBook = document.createElement("div");
    book.appendChild(titleBook);
    //style to titleBook
    titleBook.setAttribute(
      "style",
      "height:3vh; width:100%; padding:1vh; font-size:1vw; font-weight:600; margin:auto; color:rgb(90,90,90)"
    );
    //text to div2
    let text1 = document.createTextNode("title : " + title + ".");
    titleBook.appendChild(text1);
    //div3 to author to the books
    let authorBook = document.createElement("div");
    book.appendChild(authorBook);

    //@media
    function media450(x) {
      if (x.matches) {
        row.setAttribute("style", "border:none; ");
      }
    }
    media450(x);
    x.addListener(media450);

    //style authorBook
    authorBook.setAttribute(
      "style",
      "height:3vh; width:100%; padding:1vh; font-size:1vw; font-weight:600; margin:auto; color:rgb(90,90,90)"
    );
    //text to autherBook
    let text2 = document.createTextNode("author : " + author + ".");
    authorBook.appendChild(text2);
  }
  formm.reset();
});

let footerr = document.createElement("footer");
bod.appendChild(footerr);
//style to foter
footerr.setAttribute(
  "style",
  "width:80%; height:13vh; margin:0 auto; background-color:rgb(244, 240, 240); margin-top:15vh; padding:1vh 6%; padding-bottom:0; border:1px solid rgb(90,90,90); border-radius:5px 5px 0 0 "
);
//p to textfot
let p = document.createElement("p");
footerr.appendChild(p);
//style textfot
p.setAttribute(
  "style",
  "width:100%; line-height:6.5vh; text-align:center; font-size:1vw; font-weight:600; color:rgb(121,120,120);"
);
//text to foter
let textfot = document.createTextNode("feras.s.alhelo@gmail.com");
p.appendChild(textfot);
