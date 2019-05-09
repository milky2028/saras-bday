export async function TutorialAnimation() {
  const body = document.querySelector('body');
  const tapIcons: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.icons');
  const header = document.querySelector('h1');

  setTimeout(() => {
    header!.remove()
    body!.style.backgroundColor = 'transparent';
    tapIcons.forEach((icon: HTMLParagraphElement) => icon.remove());
  }, 3000);
}