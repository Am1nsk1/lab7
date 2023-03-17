var arr_list1 = [
    'find elements in the DOM <b> (5 points) </b>;', 
    'create/add/remove elements (5 points);',
    'change content of the elements (5 points);',
    'change styles of the elements (5 points);',
    'change attributes of the elements (5 points);',
    'change classes of the elements (5 points).'];


var arr_list2 = [
    'Create a new repository on Github, named lab7 (1 point).',
    'Clone this repository to your local machine and work inside it.',
    'Create a new HTML file, called index.html, which has only one <h1> tag with "Hello, World!" message (1 point).',
    'Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).',
    'Link this main.js file to your index.html file (Note: place your script at the end of the body section).',
    'Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).',
    'After you finish your work, submit it to the Github (2 points).'
]

function boldString(str, substr) {
    var strRegExp = new RegExp(substr, 'g');
    return str.replace(strRegExp, '<b>'+substr+'</b>');
  }

function createList(arr){
 
    var list = document.createElement("ul");
    
    for (var i = 0; i < arr.length; i++) {
        var item = document.createElement('li');
        
        item.textContent = arr[i];
        
        if(i % 2 == 0){
            item.style.color = "green";
        }else{
            item.style.color = "purple";
        }
        list.appendChild(item);
    }

    return list;   
}

function createLinkBreak(){
    let lineBreak = document.createElement("hr");

    return lineBreak;
}

function createh2tag(nm){
    let h2tag = document.createElement("h2");
    h2tag.innerText = nm;
    h2tag.style.color = 'red'
    return h2tag;
}

function createpara(txt){
    let para = document.createElement("p")
    para.innerText = txt;
    return para;
}

document.getElementById("h1").innerHTML = "Lab7 Assignment";
document.getElementById("h1").style.color = "blue";

document.body.appendChild(createLinkBreak())

document.body.appendChild(createh2tag("Task"))
document.body.appendChild(createpara("In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"));
document.body.appendChild(createList(arr_list1));
document.body.appendChild(createLinkBreak())



document.body.appendChild(createh2tag("Submission"))
document.body.appendChild(createpara("To submit your work, follow these instructions:"));
document.body.appendChild(createList(arr_list2));
document.body.appendChild(createLinkBreak())


