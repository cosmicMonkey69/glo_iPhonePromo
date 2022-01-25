(function () {
    
const tabs = document.querySelectorAll('.card-detail__change')
const tabsTitle = document.querySelector('.card-details__title')
const tabsPrice = document.querySelector('.card-details__price')
const tabsImage = document.querySelector('.card__image_item')
const pageTitle = document.head.querySelector('title')
const pageTitleText = pageTitle.textContent

const tabOptions = [
    {
        name: 'Graphite',
        memory: '128',
        price: 99990,
        imageSrc: 'img/iPhone-graphite.webp'
    },
    {
        name: 'Silver',
        memory: '256',
        price: 109990,
        imageSrc: 'img/iPhone-silver.webp'
    },
    {
        name: 'Sierra Blue',
        memory: '512',
        price: 119990,
        imageSrc: 'img/iPhone-sierra_blue.webp'
    }
]

const changeContent = i => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[i].memory}GB ${tabOptions[i].name}`
    tabsPrice.textContent = tabOptions[i].price + '₽'
    tabsImage.setAttribute('src', tabOptions[i].imageSrc)
}

const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab) => {
        tab.classList.remove('active')
    })
    tabs[indexClickedTab].classList.add('active')
    changeContent(indexClickedTab)
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        changeActiveTabs(index)
        pageTitle.textContent = pageTitleText + ' ' + tabOptions[index].name
    })
})



changeContent(0)

})()