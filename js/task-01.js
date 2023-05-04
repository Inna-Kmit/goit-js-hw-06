const categoryEl = document.querySelector('#categories');
console.log ("Number of categories:", categoryEl.childElementCount);

const newArray = [...categoryEl.children];
newArray.forEach((element)=> { 
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.childElementCount);
})
