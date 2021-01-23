
const arrayLinks = ["week01", "week02", "week03", "week04", 
"week05", "week06", "week07", "week08", "week09", "week10", 
"week11", "week12", "week13", "week14"]

const ol = document.querySelector('ol');
let i = 0;

arrayLinks.forEach(links =>
    {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = arrayLinks[i].toUpperCase();
        ol.appendChild(li);
        li.appendChild(a);
        a.href="../" + arrayLinks[i] + "html/index.html";
        i++;
    });