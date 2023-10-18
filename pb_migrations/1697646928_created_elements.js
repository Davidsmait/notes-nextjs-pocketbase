/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y0cat8cd5lkdy9d",
    "created": "2023-10-18 16:35:28.733Z",
    "updated": "2023-10-18 16:35:28.733Z",
    "name": "elements",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g4dyzr8e",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ht0p6fos",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y0cat8cd5lkdy9d");

  return dao.deleteCollection(collection);
})
