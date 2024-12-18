const galleryImages = [
    {
        smallImageName:"bear-small.webp",
        largeImageName:"bear-large.webp",
        label:"Bear",
        alt:"bear"
    },
    {
        smallImageName:"blue-small.webp",
        largeImageName:"blue-large.webp",
        label:"Blue",
        alt:"blue"
    },
    {
        smallImageName:"bluestar-small.webp",
        largeImageName:"bluestar-large.webp",
        label:"Blue Star",
        alt:"blue"
    },
    {
        smallImageName:"devil-small.webp",
        largeImageName:"devil-large.webp",
        label:"Bear",
        alt:"bear"
    },
    {
        smallImageName:"doll-small.webp",
        largeImageName:"doll-large.webp",
        label:"Hambo from Adventure Time",
        alt:"Hambo"
    },
    {
        smallImageName:"flowergreen-small.webp",
        largeImageName:"flowergreen-large.webp",
        label:"Green Flower",
        alt:"green flower"
    },
    {
        smallImageName:"flower-small.webp",
        largeImageName:"flower-large.webp",
        label:"Sunflower",
        alt:"sunflower"
    },
    {
        smallImageName:"fluffy-small.webp",
        largeImageName:"fluffy-large.webp",
        label:"Fluffy Hat",
        alt:"fluffy hat"
    },
    {
        smallImageName:"frog-small.webp",
        largeImageName:"frog-large.webp",
        label:"Frog",
        alt:"frog"
    },
    {
        smallImageName:"moon-small.webp",
        largeImageName:"moon-large.webp",
        label:"Moon",
        alt:"moon"
    },
    {
        smallImageName:"pig-small.webp",
        largeImageName:"pig-large.webp",
        label:"Zelda",
        alt:"zelda"
    },
    {
        smallImageName:"purple-small.webp",
        largeImageName:"purple-large.webp",
        label:"Purple hat",
        alt:"purple hat"
    },
    {
        smallImageName:"red-small.webp",
        largeImageName:"red-large.webp",
        label:"Red Hat",
        alt:"red hat"
    },
    {
        smallImageName:"skeleton-small.webp",
        largeImageName:"skeleton-large.webp",
        label:"Skeleton",
        alt:"skeleton"
    },
    {
        smallImageName:"spidermanfunk-small.webp",
        largeImageName:"spidermanfunk-large.webp",
        label:"Spiderman",
        alt:"spiderman"
    },
    {
        smallImageName:"spiderman-small.webp",
        largeImageName:"spiderman-large.webp",
        label:"Spiderman",
        alt:"spiderman"
    },
    {
        smallImageName:"stars-small.webp",
        largeImageName:"stars-large.webp",
        label:"Stars",
        alt:"stars"
    },
    {
        smallImageName:"teddy-small.webp",
        largeImageName:"teddy-large.webp",
        label:"Bear",
        alt:"bear"
    },
    {
        smallImageName:"wednesday-small.webp",
        largeImageName:"wednesday-large.webp",
        label:"Wednesday",
        alt:"wednesday"
    },
    {
        smallImageName:"white-small.webp",
        largeImageName:"white-large.webp",
        label:"White Teddy",
        alt:"white teddy"
    },
    {
        smallImageName:"yellow-small.webp",
        largeImageName:"yellow-large.webp",
        label:"Jake from Adventure Time",
        alt:"Jake"
    },
    {
        smallImageName:"head-small.webp",
        largeImageName:"head-large.webp",
        label:"Head",
        alt:"head"
    },
    {
        smallImageName:"mushroomchap1-small.webp",
        largeImageName:"mushroomchap1-large.webp",
        label:"Mushroom Chapstick",
        alt:"mushroom"
    },
    {
        smallImageName:"mushroomchap-small.webp",
        largeImageName:"mushroomchap-large.webp",
        label:"Mushroom Chapstick",
        alt:"mushroom"
    },
    {
        smallImageName:"flowerchap1-small.webp",
        largeImageName:"flowerchap1-large.webp",
        label:"Flower Chapstick",
        alt:"flower"
    },
    {
        smallImageName:"flowerchap-small.webp",
        largeImageName:"flowerchap-large.webp",
        label:"Flower chapstick",
        alt:"flower"
    },
];


function createGalleryItemTemplate(galleryItem, index)
{
    if (index < 3)
    {
        const galleryItemDiv = `<figure class="gallery-item">
        <picture>
        <source srcset="images/${galleryItem.largeImageName}" media="(min-width:640px)">
        <img src="images/${galleryItem.smallImageName}" alt="${galleryItem.alt}" width="150" height="200">
        </picture>
        <figcaption>${galleryItem.label}</figcaption>
        </figure>`;
        return galleryItemDiv;
    }
    else 
    {
        const galleryItemDiv = `<figure class="gallery-item">
        <picture>
        <source srcset="images/${galleryItem.largeImageName}" media="(min-width:640px)">
        <img loading="lazy" src="images/${galleryItem.smallImageName}" alt="${galleryItem.alt}" width="150" height="200">
        </picture>
        <figcaption>${galleryItem.label}</figcaption>
        </figure>`;
        return galleryItemDiv;
    }
}

function renderGalleryItems(galleryItems)
{
    const mainGrid = document.querySelector("#gallery");
    const galleryHtml = galleryItems.map((galleryItem, index) =>
        createGalleryItemTemplate(galleryItem, index)
    );
    mainGrid.innerHTML=galleryHtml.join('');
}
renderGalleryItems(galleryImages);