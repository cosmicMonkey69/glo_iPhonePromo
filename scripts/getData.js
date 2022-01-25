const getData = () => {

    const list = document.querySelector('.cross-sell__list')
    const button = document.querySelector('.cross-sell__add')

    let stack = 4
    let count = 1

    const render = (data) => {
        list.innerHTML = ''

        data.forEach((item) => {
            list.insertAdjacentHTML('beforeend', `
            <li>
				<article class="cross-sell__item">
					<img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
					<h3 class="cross-sell__title">${item.name}</h3>
					<p class="cross-sell__price">${item.price}₽</p>
					<button type="button" class="button button_buy cross-sell__button">Купить</button>
				</article>
			</li>
            `)
        })
    }

    const changeData = (data) => {
        if(stack*count >= data.length) {
            render(data)
            button.style.display = 'none'
        } else {
            render(data.slice(0, stack*count))
            count++
        }
    }

    const getGoods = () => {
        fetch('/cross-sell-dbase/dbase.json')
        .then((res) => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error('Error DB')
            }
        })
        .then(data => changeData(data))
        .catch((err) => console.error(err.message))
    }

    getGoods()

    button.addEventListener('click', () => {
        show()
    })
    
}

getData()