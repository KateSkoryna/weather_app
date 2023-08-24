const appendContent = (array) => {
        const list = array.map(({ title, measure }) => {
            const weatherInfoItem = document.createElement('li');
            const itemTitle = document.createElement('h3');
            const itemContent = document.createElement('p');
            weatherInfoItem.classList.add('weather-info__item');
            itemTitle.textContent = title;
            itemContent.textContent = measure;
            weatherInfoItem.append(
                itemTitle,
                itemContent,
            );
            return weatherInfoItem;
        });
        return list;
};
    

export { appendContent };