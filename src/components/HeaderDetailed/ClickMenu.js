
export const clickMenu = () => {
    const menu = document.querySelector('.headerdetail__bottom');
    if(menu.style.opacity == 1){
        menu.style.opacity = 0;
        menu.style.height = 0;
        menu.style.overflow = 'hidden';
    }
    else {
        menu.style.transition = 'all 0.8s';
        menu.style.opacity = 1;
        menu.style.height = 'auto';
    };
}