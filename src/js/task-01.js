const listWithId = document.querySelector('#categories');
const numOfCategories = listWithId.querySelectorAll('li.item').length;
console.log('Number of categories: ' + numOfCategories);


    const categoriesList = document.getElementById("categories");
    const categoryItems = categoriesList.querySelectorAll(".item");
  
    categoryItems.forEach((item) => {
      const categoryName = item.querySelector("h2").textContent;
      const categoryItemsList = item.querySelectorAll("ul li");
      const elementsCount = categoryItemsList.length;
  
      console.log(`Category: ${categoryName}`);
      console.log(`Elements: ${elementsCount}`);
    });
  ;