// Custom Cursor Settings-----------------------
window.onmousemove = (event) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = event.x+'px';
    cursor.style.top = event.y+'px';
};

// Input Settings-----------------------
const img = document.querySelector('img');
const video = document.querySelector('video');
var inputField = document.querySelector('.input');
inputField.addEventListener('input', ()=>{
    var input = inputField.value;
    if(input.startsWith('https://www.youtube.com/watch?v=')){
        let videoId = input.replace('https://www.youtube.com/watch?v=', '').substring(0, 11);
        let url = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        img.src = url;
    }
    else if(input.startsWith('https://youtu.be/')){
        let videoId = input.replace('https://youtu.be/', '').substring(0, 11);
        let url = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        img.src = url;
    }
    else if(input.startsWith('https://www.youtube.com/embed/')){
        let videoId = input.replace('https://www.youtube.com/embed/', '').substring(0, 11);
        let url = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        img.src = url;
    }
    else if(input.length==11){
        img.src = `https://img.youtube.com/vi/${input}/maxresdefault.jpg`;
    }
    else {
        img.src = '';
    };
});

// Button Settings-----------------------
const imgDownloadBtn = document.querySelector('.btn1');
imgDownloadBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const downloadLink = document.querySelector('.btn1 button');
    downloadLink.href = img.src;
    downloadLink.target = '_blank';
    downloadLink.download = 'thumbnail.jpg';
});
