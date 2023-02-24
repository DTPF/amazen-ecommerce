import { SECTIONS } from "../../config";
import { sectionsData } from "./sectionsData";

export default function firstPostSections(vls, db) {
  if (vls === 1 || vls < db.version) {
    sectionsData.forEach((section, index) => {
      const { title, img, linkName, link, isActive } = section;
      postSections(db, title, img, linkName, link, isActive, index);
    });
  }
}

function postSections(db, title, img, linkName, link, isActive, index) {
  let transaction = db.transaction([SECTIONS], "readwrite");
  let sections = transaction.objectStore(SECTIONS);
  let section = {
    id: index,
    title: title,
    img: img,
    linkName: linkName,
    link: link,
    isActive: isActive
  };
  let request = sections.put(section);

  request.onsuccess = function (e) {
  };

  request.onerror = function () {
    console.log("Error", request.error);
  };
}