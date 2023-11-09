const generateHTML = (pagename)=>{
    return `
    <<div id="container">
    <h1>FOCUS ON YOUR WORK</h1>
    <p>STUDYING IS MORE IMPORTANT THEN --> ${pagename}</p>
</div>`
}
const generateStyle= ()=>{
    let style=`
    <style>
    body{
        background-color: orange;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
    }
    #container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
    
    }
    #container h1{
        font-size: 3rem;
        border-bottom: 2px solid black;
    }
    #container p{
        font-size:1.5rem;
    }
    </style>
    `
    return style
}
switch (window.location.hostname){
    case "www.youtube.com":
        document.head.innerHTML = generateStyle();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateStyle();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;
    case "www.netflix.com":
        document.head.innerHTML = generateStyle();
        document.body.innerHTML = generateHTML("NETFLIX");
        break;
}