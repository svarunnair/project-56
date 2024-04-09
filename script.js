const pages = document.querySelectorAll('.page');
    const progressBar = document.getElementById('progress-bar');
    let currentPageIndex = 0;

    function updateProgressBar() {
        const totalPages = pages.length;
        const completedPages = currentPageIndex + 1;
        const progress = (completedPages / totalPages) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showNextPage() {
        if (currentPageIndex < pages.length - 1) {
            pages[currentPageIndex].style.display = 'none';
            currentPageIndex++;
            pages[currentPageIndex].style.display = 'block';
            updateProgressBar();
        }
    }

   
    pages.forEach(page => {
        const radioButtons = page.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radioButton => {
            radioButton.addEventListener('change', () => {
                showNextPage();
            });
        });
    });

  
    pages[currentPageIndex].style.display = 'block';