const promise = fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6');
promise
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((element) => {
            const cardArea = document.createElement('div');
            const img = document.createElement('img');
            const description = document.createElement('div');
            const fn = () => {
                localStorage.setItem(element.name, element.id)
            }
            cardArea.setAttribute('id', 'cardArea');
            img.setAttribute('id', 'cards');
            img.setAttribute('src', element.image_url);
            description.setAttribute('id', 'descriptions');
            description.innerHTML = element.description;
            document.body.prepend(cardArea)
            cardArea.appendChild(img);
            cardArea.appendChild(description);
            img.addEventListener('click', fn)
        });
    });
