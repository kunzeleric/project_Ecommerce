
export const clickMenu = () => {
    const menu = document.querySelector('.headerdetail__bottom');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }
    else menu.style.display = 'block';
}