const question = document.querySelectorAll('.accordian-header')

question.forEach(item => item.addEventListener('click', (e) => {
    console.log(e.target)
    item.classList.toggle('active')
    // Add styling to children elements
    const bold = item.firstElementChild;
    const arrowTurn = item.lastElementChild;
    if(item.classList.contains('active')){
        bold.style.fontWeight = 'bold';
        arrowTurn.style.transform = 'rotate(180deg)'
    } else {
        bold.style.fontWeight = 'normal';
        arrowTurn.style.transform = 'rotate(0)'
    }

    // Display text 
    const content = item.nextElementSibling
    if(item.classList.contains('active')){
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = 0
    }
    })
)
