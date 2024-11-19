const templeButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

templeButton.addEventListener('click', () => 
{
    templeButton.classList.toggle('open');
    navigation.classList.toggle('open');
})