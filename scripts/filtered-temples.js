const templeButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

templeButton.addEventListener('click', () => 
{
    templeButton.classList.toggle('open');
    navigation.classList.toggle('open');
})

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls, Idaho",
        dedicated: "1945, September, 23",
        area: 85624,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/7-Idaho-Falls-Temple-1375367.jpg"
      },
      {
        templeName: "Provo City Center",
        location: "Provo, Utah",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
      },
      {
        templeName: "Houston Texas",
        location: "Houston, Texas",
        dedicated: "2000, August, 26",
        area: 33970,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/400x250/houston-temple01.jpg"
      },
      {
        templeName: "Memphis Tennessee",
        location: "Memphis, Tennessee",
        dedicated: "2000, April, 23",
        area: 10890,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/memphis-tennessee/400x250/2-Memphis-Temple-2229729.jpg"
      },
      {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg"
      }
  ];

  function createTempleItemTemplate(temple)
{
    return `<div class="temple-card">
    <h3>${temple.templeName}</h3>
    <table>
    <tr><td>Location:</td><td>${temple.location}</td></tr>
    <tr><td>Dedicated:</td><td>${temple.dedicated}</td></tr>
    <tr><td>Size:</td><td>${temple.area}</td></tr>
    </table>
    <img src=${temple.imageUrl} loading="lazy" width=400 height=250 alt=${temple.templeName}>
    </div>    
    `
}

function renderTemples(temples)
{
    const mainGrid = document.querySelector("#mainGrid");

    const templeHtml = temples.map(createTempleItemTemplate);
    mainGrid.innerHTML = templeHtml.join('');
}

renderTemples(temples);

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

oldLink.addEventListener('click',() => 
{
    const filteredTemples = temples.filter(
            (temple) => {
                const date = new Date(temple.dedicated);
                return date < new Date(1900,1,1);
            }
        )
    renderTemples(filteredTemples);
});

newLink.addEventListener('click',() => 
    {
        const filteredTemples = temples.filter(
                (temple) => {
                    const date = new Date(temple.dedicated);
                    return date > new Date(2000,1,1);
                }
            )
        renderTemples(filteredTemples);
    }
);

largeLink.addEventListener('click',() => 
    {
        const filteredTemples = temples.filter(
                (temple) => {
                    return temple.area > 90000;
                }
            )
        renderTemples(filteredTemples);
    }
);

smallLink.addEventListener('click',() => 
    {
        const filteredTemples = temples.filter(
                (temple) => {
                    return temple.area < 10000;
                }
            )
        renderTemples(filteredTemples);
    }
);