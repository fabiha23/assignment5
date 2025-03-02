function textConvertedToNumber(id){
    const text =document.getElementById(id).innerText;
    const convertedIntoNumber = parseInt(text);
    return convertedIntoNumber;
}

function color(){
    let v1=Math.floor(Math.random() * 256);
    let v2=Math.floor(Math.random() * 256);
    let v3=Math.floor(Math.random() * 256);

    return `rgba(${v1}, ${v2}, ${v3}, .5)`;
}

const discover = document.getElementById("discover");
console.log(discover);
discover.addEventListener("click",function(){
    window.location.href="blog.html"
})

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", function(){
    const body = document.body;
    let newColor = color();
    body.style.backgroundColor=newColor;

})

const clear = document.getElementById("clear");
clear.addEventListener("click",function(){
    document.getElementById("new").innerText="";
})
