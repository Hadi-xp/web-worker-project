const btn = document.querySelector('.btn');
const worker = new Worker('./worker/worker.js')
function print(){
    worker.postMessage('asd')
}

worker.onmessage = function(msg){
    alert(msg.data);
}
btn.addEventListener('click',print);