---
title:  "android: siguiente paso"
layout: post
date:   2018-01-11
category: blog
author: jartigag
tag:
- android
---

## Índice:

- [Gradle](#gradle)
- [SharedPreferences](#sharedpreferences)
- [Bases de datos](#bases-de-datos)
  - [SQLite](#sqlite)
  - [GreenDAO](#greendao)
- [Lists y Adapters](#lists-y-adapters)

## Gradle

Herramienta para automatización de tareas como:
* Compilar
* Enlazar librerías
* Firmar
* Ejecutar

Usa un DSL (lenguaje de dominio específico) basado en Groovy y un DAG (gráfico acíclico dirigido) para fijar el orden de ejecución de tareas. Fichero: ``build.gradle``

## SharedPreferences

Almacenamiento de variables en un entorno privado a la app. Es un fichero XML no compartido con otras aplicaciones, en el que se guardan pares clave-valor de tipos sencillos.

Almacenar datos:
```
SharedPreferences settings = getSharedPreferences("Config", 0);
SharedPreferences.Editor editor = settings.edit();
editor.putBoolean("alarm_active", alarmActive);
editor.putString("username", username);
editor.commit();
```

Recuperar datos:
```
SharedPreferences settings = getSharedPreferences("Config", 0);
boolean alarmActive = settings.getBoolean("alarm_active", false);
String username = settings.getString("username", "");
```

# Bases de Datos

## SQLite

En Android usamos SQLite, que es una RDBMS: *Relational-DBMS (DataBase Management System)*. Cualquier acción para crear, leer, actualizar y borrar (CRUD) debe programarse.

[ORM](https://es.wikipedia.org/wiki/Mapeo_objeto-relacional) (*Object-Relational Mapper*): Crea relaciones entre bases de datos y objetos Java. Permite un lenguaje más evidente ([DAO](https://es.wikipedia.org/wiki/Objeto_de_acceso_a_datos) - *Data Access Object*).  
Ejemplo con GreenDao:
```
// para acceder a la base de datos:
DaoMaster.DevOpenHelper helper = new DaoMaster.DevOpenHelper(this, "db", null);
SQLiteDatabase db = helper.getWritableDatabase();
DaoMaster daoMaster = new DaoMaster(db);
DaoSession daoSession = daoMaster.newSession();

// getObjectDao tantas veces como se necesite
objectDao = daoSession.getObjectDao();

List<MyObject> objectsList = objectDao.queryBuilder().orderDesc(ObjectDao.Properties.Name).list();
// MyObject es una entidad de GreenDao
```

## GreenDAO

Instalar y configurar la librería: http://greenrobot.org/greendao/documentation/introduction

En build.gradle que está en la carpeta raíz del proyecto:
1. Añadir repositorio ``mavenCentral()``
2. Añadir ``classpath 'org.greenrobot:greendao-gradle-plugin:3.2.2'``

En el build.gradle de la app:
1. Al inicio del fichero: ``apply plugin: 'org.greenrobot.greendao'``
2. Añadir ``compile 'org.greenrobot:greendao:3.2.2'``

Creamos al menos un modelo: http://greenrobot.org/greendao/documentation/modelling-entities/  
Primero definimos la versión del *schema*, en el build.gradle de la app, añadimos:
```
greendao {
  schemaVersion 2
}
```
Ahora *anotamos* nuestro modelo (crear métodos getter, setter y constructores).  
Ejecutamos Make > Build project.

# Lists y Adapters

Para crear listados necesitamos:
* Elemento de layout: [``ListView``](#listview)
  * Listado vertical de celdas
  * Cada celda es un layout independiente
* Clase que gestiona una celda: [``Adapter``](#adapter)
  * Indica cómo se tiene que mostrar cada celda
  * Relación directa con la celda
  * Diversos tipos: ``BaseAdapter, SimpleAdapter, ArrayAdapter``...

## ListView

El elemento ListView es un elemento de layout más:  
```
<ListView
    android:id="@+id/example_list"
    android:layout_width="match_parent"
    android:layout_height="match_parent"></ListView>
```
pero para determinar su contenido se debe asignar un Adapter:
```
ListView lvList = (ListView) findViewById(R.id.example_list);
lvList.setAdapter(new MyAdapter(objectsList));

```

## Adapter

Podemos crear nuestro Adapter usando ``extends BaseAdapter``. Requiere implementar 4 métodos:
```
  public int getCount() {···}
  public Object getItem(int position) {···}
  public long getItemId(int position) {···}

  //Ejemplo más detallado de método getView:
  @Override
  public View getView(int position, View convertView, ViewGroup parent) {

    if (convertView == null) {
            convertView = LayoutInflater.from(parent.getContext()).inflate(R.layout.list_cell, null, false);
            //list_cell.xml es el layout de cada celda de la lista
        }

    //TODO

    return convertView;
  }
```

## Click event

Es necesario crear un **click listener** particular: ``AdapterView.OnItemClickListener``. Funciona parecido al click listener de un botón, pero con una posición.  
Ejemplo:
```
public class MyListItemClickListener implements AdapterView.OnItemClickListener {

    private List<MyObject> myList;
    private Activity activity;

    public MyListItemClickListener(List<Object> objects, MyListActivity myListActivity) {
        this.myList = objects;
        this.activity = myListActivity;
    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        //TODO
    }
}
```
