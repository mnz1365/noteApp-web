function newNote() {
    let htmlDiv = document.getElementById('htmlnotediv');
    let noteDiv = document.createElement('div');
    let noteHeader = document.createElement('header');
    let imageATag1 = document.createElement('a');
    let imageATag2 = document.createElement('a');
    let iconImageTag1 = document.createElement('img');
    let iconImageTag2 = document.createElement('img');
    let inputnote = document.createElement('textarea');
   

    //elements properties
    //notediv
    noteDiv.style.border = "3px solid gray";
    noteDiv.style.padding = "2px";
    noteDiv.style.width = "300px";
    noteDiv.style.height = "360px";
    noteDiv.style.margin = "15px";
    noteDiv.style.borderRadius = "4px";
    noteDiv.style.display = "inline-block";

    //noteHeader
    noteHeader.className = "myHeader";
    noteHeader.style.display = "block";
    noteHeader.style.padding = "1px";
    


    //imageATage
    
    imageATag1.href= "#1";
    imageATag2.href= "#2";
    imageATag1.style.marginLeft = "254px";
    imageATag2.style.marginLeft = "10px";
    imageATag1.title = "edit";
    imageATag2.title = "delete";
    
    



    //icone image tag
    iconImageTag1.src = "/imgs/pencil.svg";
    iconImageTag1.style.width = "16px";
    iconImageTag1.style.height = "16px";
    iconImageTag1.addEventListener("mouseover", event => {
        iconImageTag1.style,width = "18px";
        iconImageTag1.style.height = "18px";
    })
    iconImageTag1.addEventListener("mouseleave", event => {
        iconImageTag1.style.width = "16px";
        iconImageTag1.style.height = "16px";
    })
    iconImageTag1.addEventListener("click", event => {
        if(inputnote.readOnly == true) {
            inputnote.readOnly = false;
            inputnote.style.cursor = "auto";
        }
        else {
            inputnote.readOnly = true;   
        }
    })
    

    //second image
    iconImageTag2.src = "/imgs/trash.svg";
    iconImageTag2.style.width = "16px";
    iconImageTag2.style.height = "16px";
    iconImageTag2.addEventListener("mouseover", event => {
        iconImageTag2.style,width = "18px";
        iconImageTag2.style.height = "18px";
    })
    iconImageTag2.addEventListener("mouseleave", event => {
        iconImageTag2.style.width = "16px";
        iconImageTag2.style.height = "16px";
    })
    iconImageTag2.addEventListener("click", event => {
        noteDiv.remove();
    })


    //inputnote
    inputnote.style.margin = "-1px";
    inputnote.style.width = "99%";
    inputnote.style.height = "93%";
    inputnote.style.border = "none";
    inputnote.style.borderRadius = "4px";
    inputnote.style.resize = "none";
    inputnote.style.fontSize = "2rem";
    inputnote.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    inputnote.placeholder = "Type your note here...";
    inputnote.addEventListener("focusout", event => {
        inputnote.readOnly = true;
        noteDiv.style.border = "3px solid gray";
    });
    inputnote.addEventListener("focusin", event => {
        noteDiv.style.border = "2px solid black";
    })
    inputnote.addEventListener("mouseover", even => {
        if(inputnote.readOnly == true) {
            inputnote.style.cursor = "default";
        }
        
    })
    


    htmlDiv.appendChild(noteDiv);
    noteDiv.appendChild(noteHeader);
    noteHeader.appendChild(imageATag1);
    noteHeader.appendChild(imageATag2);
    imageATag1.appendChild(iconImageTag1);
    imageATag2.appendChild(iconImageTag2);
    noteDiv.appendChild(inputnote);

}

//email copy
function myEmailCopy() {
    navigator.clipboard.writeText("mzarei297@gmail.com");
    alert("email copied!");
}