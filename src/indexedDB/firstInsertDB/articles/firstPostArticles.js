import { ARTICLES } from "../../config";
import { articlesData } from "./articlesData";

export default function firstPostArticles(vls, db) {
  if (vls === 1 || vls < db.version) {
    articlesData.forEach((article, index) => {
      const { title, stars, price, image, sizes, info, stock } = article;
      postArticles(db, title, stars, price, image, sizes, info, stock, index);
      localStorage.setItem("amazen_idb_vs", db.version);
    });
  }
}

function postArticles(db, title, stars, price, image, sizes, info, stock, index) {
  let transaction = db.transaction([ARTICLES], "readwrite");
  let articles = transaction.objectStore(ARTICLES);
  let article = {
    id: index,
    title: title,
    stars: stars,
    price: price,
    image: image,
    sizes: sizes,
    info: info,
    stock: stock
  };
  let request = articles.put(article);

  request.onsuccess = function (e) {
    const lsObj = localStorage.getItem('last_id');
    const objParse = JSON.parse(lsObj);
    const sectionObj = {
      users: objParse && objParse.users,
      sections: objParse && objParse.sections,
      articles: e.target.result,
    }

    localStorage.setItem('last_id', JSON.stringify(sectionObj));
  };

  request.onerror = function () {
    console.log("Error", request.error);
  };
}