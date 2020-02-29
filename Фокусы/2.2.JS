function qwerty(){
let but = document.querySelector('#but');

but.addEventListener('mouseover', qwerty);

function qwerty(){
	console.log('!!!');
}
but.addEventListener('click', function () {
	console.log('@@@');
});
but.addEventListener('click', qwerty);

function qwerty(){
	console.log('***');
}
