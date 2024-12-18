
const images = [
    {
        itemNumber:0,
        imageName:"christmas-event-small.webp",
        alt:"Event 1",
        text:"This is event 1 and the text is really long so it should wrap"
    },
    {
        itemNumber:1,
        imageName:"event2-small.webp",
        alt:"Event 1",
        text:"This is event 2"
    },
    {
        itemNumber:2,
        imageName:"event-image3",
        alt:"Event 1",
        text:"This is event 3"
    },
    {
        itemNumber:3,
        imageName:"event-image4",
        alt:"Event 1",
        text:"This is event 4"
    },
    {
        itemNumber:4,
        imageName:"event-image5",
        alt:"Event 1",
        text:"This is event 5"
    },
    {
        itemNumber:5,
        imageName:"event-image6",
        alt:"Event 1",
        text:"This is event 6"
    },
    {
        itemNumber:6,
        imageName:"event-image7",
        alt:"Event 1",
        text:"This is event 7"
    },
];
let numItemsToDisplay = 3;
function createGalleryItem(image)
{
    const eventItem = `<figure class="upcoming-event-gallery-item">
    <picture>
    <img src="images/${image.imageName}" alt="${image.alt}" width="150" height="200">
    </picture>
    <figcaption>${image.text}</figcaption>
    </figure>`;
    return eventItem;
}
function createGalleryItemOLD(image)
{
    const eventItem = `<figure>
    </figure>`;
    return eventItem;
}
function renderGalleryItems(startItem)
{
    var leftArrow = document.querySelector("#upcoming-event-gallery-items");
    let cnt=numItemsToDisplay;
    let index = startItem;
    let displayImages = [];
    while(cnt > 0)
    {
        displayImages.push(images[index]);
        index = (index + 1)%images.length;
        cnt--;
    }
    const galleryHtml = displayImages
        .map((displayImage) =>
        createGalleryItem(displayImage)
    );
    leftArrow.innerHTML = galleryHtml.join('');
}
  
function getGalleryStartIndex()
{
    let startItem = Number(window.localStorage.getItem("startIndex")) || 0;
    return startItem;
}
// function getGalleryEndIndex()
// {
//     let endItem = Number(window.localStorage.getItem("startIndex")) || 0;
//     return (endItem + numItemsToDisplay-1)%images.length;
// }
function setGalleryStartIndex(startIndex)
{
    if (startIndex >= images.length)
        startIndex = 0
    window.localStorage.setItem("startIndex", startIndex)
}
function moveGalleryLeft()
{
    let startItem = getGalleryStartIndex();
    let i=numItemsToDisplay;
    while(i > 0)
    {
        if (startItem===0)
        {
            startItem=images.length;
        }
        startItem--;
        i--;
    }
    setGalleryStartIndex(startItem);
    renderGalleryItems(getGalleryStartIndex());   
}
function moveGalleryRight()
{
    let startItem = getGalleryStartIndex();
    let i=numItemsToDisplay;
    while(i > 0)
    {
        if (startItem===images.length)
        {
            startItem=0;
        }
        startItem++;
        i--;
    }
    setGalleryStartIndex(startItem);
    renderGalleryItems(getGalleryStartIndex());   
}
function checkMediaQuery()
{
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    if(mediaQuery.matches)
    {
        numItemsToDisplay=3;
    }
    else
    {
        numItemsToDisplay=1;
    }
    renderGalleryItems(getGalleryStartIndex());
}
checkMediaQuery();
//renderGalleryItems(getGalleryStartIndex());

const leftArrow = document.getElementById("left-arrow");
leftArrow.addEventListener("click", moveGalleryLeft);

const rightArrow = document.getElementById("right-arrow");
rightArrow.addEventListener("click", moveGalleryRight);

window.matchMedia("(min-width: 640px)").addEventListener("change", checkMediaQuery);