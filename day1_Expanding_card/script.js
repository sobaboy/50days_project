const panelAll = document.querySelectorAll('.panel')

panelAll.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })

})

function removeActiveClasses() {
    panelAll.forEach(panel=>{
        panel.classList.remove('active')
    })
    
}

/**
 * 보충해야할 점
 * https://www.udemy.com/course/the-complete-javascript-course/
 * 1. forEach 문에 대한 이해가 부족 -> Looping Arrays: forEach
 강좌로 보충할 것
 * 
 * 2. Arrow function에 대한 이해가 부족 -> Regular Functions vs. Arrow Functions 강좌로 보충할 것.

 * 
 * 
 * 
 * 
 */