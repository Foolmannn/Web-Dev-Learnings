// console.log("Hello world ")

/*
on Console write 
document.body.childNodes

document.body.childNodes[1]
document.body.childNodes[1].childNodes
document.body.childNodes[1].childNodes[2]


cont=document.body.childNodes[1]

//New line is considered text nodes so first and last nodes of the container are text nodes
// To access the only elements like div ,p, a etc we use the firstelementchild , .Children[0] etc

cont.firstchild 
cont.lastchild
cont.firstelementchild
cont.LastElementChild.style.color ="red"
cont.LastElementChild.style.backgroundcolor ="green"

//getting the parent 
cont.LastElementChild.ParentElement

//getting the sibling

cont.firstElementChild.previousSibling // gives the text nodes

//getting the element sibling 

cont.lastElementChild.previousElementSibling //gives the box3
cont.lastElementChild.nextElementSibling

//.children gives the element child ignoring the comment nodes text nodes etc

document.body.firstElementChild.children[0]
document.body.firstElementChild.children[1]
document.body.firstElementChild.children[2]
document.body.firstElementChild.children[3]


//accessing the table elements 

table =document.body.children[1]

<table border>​…​</table>​

table.rows

HTMLCollection(4) [tr, tr, tr, tr]

table.caption

<caption>​Records​</caption>​

table.tHead

<thead>​</thead>​

table.rows[2]

<tr>​…​</tr>​<td>​2​</td>​<td>​20​</td>​<td>​Danesh​</td>​</tr>​

table.rows[2].cells

*/