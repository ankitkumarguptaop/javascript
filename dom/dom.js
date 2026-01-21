//traversing dom / navigation

let rootele = document.getRootNode(); // -> document
console.log(rootele);
let htmlele = rootele.childNodes[0];
console.log(htmlele);

let childofhtmlelement = htmlele.childNodes;
console.log(childofhtmlelement);

let firstchildofhtml= htmlele.firstChild;
console.log(firstchildofhtml); //----> head
let lastchildofhtml= htmlele.lastChild;
console.log(lastchildofhtml); // ----> body


let headd= childofhtmlelement[0];
console.log(headd);
let text1= childofhtmlelement[1];
console.log(text1);
let body= childofhtmlelement[2];
console.log(body);

let headchild=headd.childNodes;
console.log(headchild)
let text2= headchild[0];
console.log(text2);
let script= headchild[1];
console.log(script);
let text3= headchild[2];
console.log(text3);
let title= headchild[3];
console.log(title);
let text4= headchild[4];
console.log(text4);

// parent relation
let ParentOfHead = headd.parentNode; 
console.log(ParentOfHead); //--> html

// sibling relationship
//nextSibling
console.log(headd); // ---> head
let firstsiblingofHead= headd.nextSibling;
console.log(firstsiblingofHead); //----> text
let secondsiblingofHead= headd.nextSibling.nextSibling;
console.log(secondsiblingofHead); //---->body

//nextElementSibling
console.log(headd.nextElementSibling); //  not give text nodes (ignores)


//previous Sibling
console.log(body); // ---> body
console.log(body.previousSibling); //----> text
console.log(body.previousSibling.previousSibling); // ----> head


// previousElementSibling 
console.log(body.previousElementSibling); // --->head (ignores text nodes)

/*The nodeValue property specifies the value of a node.
nodeValue for element nodes is null
nodeValue for text nodes is the text itself
nodeValue for attribute nodes is the attribute value 
*/
console.log(body.nodeValue);

/*
The nodeType property is read only. It returns the type of a node.
The most important nodeType properties are:
    Node	      Type  	 Example
ELEMENT_NODE	    1	<h1 class="heading">W3Schools</h1>
ATTRIBUTE_NODE	    2	 class = "heading" (deprecated)
TEXT_NODE	        3	W3Schools
COMMENT_NODE	    8	<!-- This is a comment -->
DOCUMENT_NODE	    9	The HTML document itself (the parent of <html>)
DOCUMENT_TYPE_NODE	10	<!Doctype html>
*/
console.log(body.nodeType); 

/*The nodeName property specifies the name of a node.
nodeName is read-only
nodeName of an element node is the same as the tag name
nodeName of an attribute node is the attribute name
nodeName of a text node is always #text
nodeName of the document node is always #document */
console.log(body.nodeName); 

console.log(document.documentElement);
console.log(document.body);
console.log(document.head);





