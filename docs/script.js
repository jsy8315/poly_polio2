fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const limitedData = data.slice(0, 4); // 처음 4개의 데이터만 사용
        showInsuranceProducts(limitedData);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function showInsuranceProducts(data) {
    const cardDeck = document.querySelector('.card-deck');

    data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('card-img-top');
        image.src = product.image;
        image.alt = 'Product Image';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        cardBody.appendChild(title);
        cardBody.appendChild(description);

        card.appendChild(image);
        card.appendChild(cardBody);

        cardDeck.appendChild(card);
    });
}