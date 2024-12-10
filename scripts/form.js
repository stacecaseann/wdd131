/*Set Products Dropdown */
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function optionTemplate(product)
  { 
    return `<option value="${product.name}">${product.name}</option>`;
  }

  function createOptions()
  {
    const options = products.map(optionTemplate);
    return options.join('');
  }

  document.querySelector('#product').innerHTML += createOptions();

  /* Overwrite submit so it can keep track of the number of submissions */
  document.getElementById("product-form").addEventListener('submit', () =>
    {
        setNumberOfReviews();
    })
  /* Manage number of Reviews */

  function setNumberOfReviews()
  {
    let numReviews = getNumberOfReviews()
    numReviews++;
    localStorage.setItem("numReviews-ls", numReviews);
  }

  function getNumberOfReviews()
  {
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
    return numReviews;
  }