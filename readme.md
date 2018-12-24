# weboffice app

## rétegek

```
view   >   store   >   model   >   api   >   drupal api
 |           |           |
.vue        vuex    factory adja 
```

A **view**k a views mappa alatt vannak, ezek komponensekből dolgoznak és egészen a store-ig látnak.

A **store** factoryból és modellből dolgozik.

A **factory** alapvetően a modellek létrehozásakor kell.

A **modell** kezeli a saját adatait és hívja a megfelelő apit.

Az **api** adja nekünk a végpontok címét drupal felé

A **drupalApi** ott áll minden api előtt, mint felparaméterezett Axios instance.
Ő tudja, hogy milyen paraméterekkel kell majd dolgoznia. 
