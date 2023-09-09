// methods of dom part-2 week 15

// console.log(document);
// console.dir(document);
// console.dir(document.domain);
// console.dir(document.URL);
// document.title="ajksdf";
// console.dir(document.head);
// console.dir(document.body);
// console.dir(document.all);
// console.dir(document.all[8]);

//adding elements
// const body=document.body;
// body.append("hello","world");
// body.appendChild("hello","world");//append child can't add simple text

//creating elements
// const div=document.createElement("div");
// console.log(div);
// body.append(div);

//adding text
// div.innerText="hi everyone";
// div.textContent="hi everyone";

//exercise
// const body=document.body;
// const div=document.createElement('div');
// const strong=document.createElement('strong');
// strong.textContent="demo text";
// div.append(strong);
// body.append(div);
// console.log(body);

// div.innerHTML='<strong>demo text</strong>';//instead of doing above steps we can use this innerHtml to add html

//remove elements
// const itemOne=document.querySelector('#one');
// itemOne.remove();

//attributes
// console.log(itemOne.getAttribute("id"));//will return value of id attribute
// itemOne.setAttribute("type","listItem");

// itemOne.id="onetwo";//id is changed

//removing attribute
// itemOne.removeAttribute("type");

//adding classes
// itemOne.classList.add("new-class");
// itemOne.classList.remove("new-class");
// itemOne.classList.toggle("new-class");
// itemOne.classList.toggle("new-class");

// itemOne.style.setProperty('color','blue');
// itemOne.style.backgroundColor="red";


//======week 15 methods of dom part-3==========


// const listItem=document.querySelector(".list");
// const firstItem=listItem.firstChild;
// const lastItem=listItem.lastChild;
// const secondItem=firstItem.nextSibling;
// console.log(lastItem);
// console.log(secondItem);

//events
const myfunc=function(){
    alert("clicked");
}
const button=document.getElementById('btn');
button.addEventListener("click",myfunc,/*{once:true}*/) //once true for happing the event for just one time

//if we want to remove the event listner after 3 sec

setTimeout(function(){
    button.removeEventListener("click",myfunc)
    console.log("removed");
}, 3000);