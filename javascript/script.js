var articles = document.querySelectorAll(".featured__article");

articles.forEach(article => article.addEventListener("mouseover", addClass));
articles.forEach(article => article.addEventListener("mouseleave", removeClass));

function addClass(){
    this.classList.add('article__open');
}
function removeClass(){
    this.classList.remove('article__open');
}