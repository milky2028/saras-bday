export function TutorialAnimation() {
    const body = document.querySelector('body');
    const tapBtns = document.querySelectorAll('.btns');

    body!.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    tapBtns.forEach((btn) => {
        
    });

    setTimeout(() => {
        body!.style.backgroundColor = 'transparent';
    }, 3000);
}