
const images = [
    {
        itemNumber:0,
        imageName:"christmas-event-small.webp",
        alt:"christmas",
        text:"Christmas Crafts at the Orem Library<br>6pm Dec 7, 2024"
    },
    {
        itemNumber:1,
        imageName:"crochet-event.webp",
        alt:"Crochet",
        text:"Crochet Class at the Spanish Fork Library<br>6pm January 1, 2025"
    },
    {
        itemNumber:2,
        imageName:"valentines-event.webp",
        alt:"Valentines",
        text:"Valentine's Day Crafts at the Provo Library<br>6pm February 14, 2025"
    },
    {
        itemNumber:3,
        imageName:"sewing-event.webp",
        alt:"Sewing",
        text:"Sewing Class at the Springville Library<br>6pm March 10, 2025"
    },
    {
        itemNumber:4,
        imageName:"easter-event.webp",
        alt:"Easter",
        text:"Easter Event at the Orem Library<br>6pm April 20, 2025"
    },
    {
        itemNumber:5,
        imageName:"event2-large.webp",
        alt:"Holidays",
        text:"Holiday Crafts at the Provo Library<br>6pm December 10, 2024"
    },
    {
        itemNumber:6,
        imageName:"music-event.webp",
        alt:"Craft",
        text:"Craftin' Critters Club Meeting at the Provo Library<br>November 8, 2025"
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
    const eventItem = `<figure class="upcoming-event-gallery-item">
    <picture>
    </picture>
    <figcaption>${image.text}</figcaption>
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

const leftArrow = document.getElementById("left-arrow");
leftArrow.addEventListener("click", moveGalleryLeft);

const rightArrow = document.getElementById("right-arrow");
rightArrow.addEventListener("click", moveGalleryRight);

window.matchMedia("(min-width: 640px)").addEventListener("change", checkMediaQuery);