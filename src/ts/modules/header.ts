const header: HTMLElement | null = document.querySelector('header');


const handleHeader = () => {

  // Add class to header
  header?.classList.add('header');

}

if(header){
    handleHeader();
}

