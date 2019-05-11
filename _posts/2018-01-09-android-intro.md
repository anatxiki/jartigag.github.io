---
title:  "android: introducción"
layout: post
date:   2018-01-09
category: blog
author: jartigag
image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Android-System-Architecture.svg/675px-Android-System-Architecture.svg.png
tag:
- android
---

## /índice:

- [Activity](#activity)
- [AndroidManifest.xml](#androidmanifestxml)
- [Layouts](#layouts)
- [Textos, traducciones](#textos-traducciones)
- [Events](#events)
- [Intent](#intent)

Fundada en 2003 por Andy Rubin, Rich Miner, Nick Sears y Chris White, comprada por Google en agosto de 2005.

[![Arquitectura de Android](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Android-System-Architecture.svg/675px-Android-System-Architecture.svg.png)](https://commons.wikimedia.org/wiki/File:Android-System-Architecture.svg)

Cada aplicación se ejecuta en su propio proceso. La VM Dalvik compila *bytecode* de Java en *dex*, de manera que logra mayor eficiencia y mejor adaptación.  
Compilación para desarrollo:  
![Compilación para desarrollo]({{site.baseurl}}/assets/images/posts/compil para desarr.png)  
Compilación para publicación:  
![Compilación para publicación]({{site.baseurl}}/assets/images/posts/compil para public.png)

Atendiendo a su arquitectura, una **app** podría definirse como un "paquete" de componentes _desacoplados_ trabajando conjuntamente respondiendo a eventos.
Estos componentes son:
* [Activities](https://developer.android.com/guide/components/activities/index.html)
* [Services](https://developer.android.com/guide/components/services.html)
* [Content providers](https://developer.android.com/guide/topics/providers/content-providers.html)
* [Broadcast receivers](https://developer.android.com/guide/components/broadcasts.html)
* [Intents](https://developer.android.com/guide/components/intents-filters.html)
* [Notifications](https://developer.android.com/guide/topics/ui/notifiers/notifications.html)

Las diferentes [versiones de Android](
https://source.android.com/source/build-numbers.html) (lanzadas bajo distintos codenames) se corresponden con **niveles de API**.  
[![Versiones de Android](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Android_historical_version_distribution_-_vector.svg/1024px-Android_historical_version_distribution_-_vector.svg.png)](https://commons.wikimedia.org/wiki/File:Android_historical_version_distribution_-_vector.svg)

## Activity

Simplificando, un Activity es una pantalla de interfaz. Una aplicación podría considerarse una sucesión de Activities independientes entre sí. Cada actividad tiene un ciclo de vida.

[![](https://developer.android.com/guide/components/images/activity_lifecycle.png)](https://developer.android.com/guide/components/activities/activity-lifecycle.html)

## AndroidManifest.xml

Contiene información esencial sobre la aplicación, como configuración, permisos, Activities, Services, Providers, etc. En [AndroidManifest.xml](http://developer.android.com/guide/topics/manifest/manifest-intro.html
), la Activity que se lanza al inicio tiene la categoría ``android.intent.category.LAUNCHER``.

## Layouts

Ordenación y representación de elementos en un Activity. En formato XML. Se colocan en ``res > layout``. Algunos tipos:
* [FrameLayout](https://developer.android.com/reference/android/widget/FrameLayout.html)
* [LinearLayout](https://developer.android.com/reference/android/widget/LinearLayout.html)
* [RelativeLayout](https://developer.android.com/reference/android/widget/RelativeLayout.html)

Los elementos que componen un layout son **Widgets**. Por ejemplo:
* TextView
* EditText
* Button
* RadioButton
* CheckBox
* Switch
* ToggleButton
* ImageView
* ProgressBar (spinner de "cargando..")

Para identificarlos se usa el parámetro ``android:id`` en el template. Con ``@+id/nombre`` se crea, con ``@id/nombre`` se hace referencia a él.

Podemos trabajar con Widgets desde el Activity a través del id. Por ejemplo:
```
EditText editText = (EditText)findViewById(R.id.edit_text);
```

De la clase **R.java** se pueden recuperar widgets, pero también strings:
```
String text = getResources().getString(R.string.hello);
```
o asignar imágenes:
```
ImageView imageView = (ImageView)findViewById(R.id.image);
imageView.setImageResource(R.drawable.background);
```

## Textos, traducciones

Los textos se almacenan en ficheros XML, en ``res > values``. Cada traducción va en la carpeta values--XX (es, en, de...). Para referenciarlos usamos ``@string/name``.

## Events

La interacción se basa en eventos. "Escucharemos" esos eventos para realizar acciones mediante **listeners**. Ejemplo:  
```
Button button = (Button)findViewById(R.id.my_button);
button.setOnClickListener(new OpenSettingsClickListener());
```

Creamos un listener que implemente el interfaz adecuado en una clase propia y se la asociamos al Widget.
```
public class OpenSettingsClickListener implements View.OnClickListener {
  @Override
  public void onClick(View view) {
    //TODO
  }
}
```

## Intent

Permite cambiar de Activity. Puede imaginarse una pila de Activities, de forma que la nueva se abre sobre la anterior.
```
Intent intent = new Intent(this, NextActivity.class);
startActivity(intent);
```
Si cerramos la nueva actividad usando ``finish()``, volveremos a la inicial.

Podemos pasar parámetros (extras): 
```
intent.putExtra("key", value);
```
Y recuperarlos en el destino:
```
Bundle bundle = getIntent().getExtras();
String value = bundle.getString("key");
```
Debemos de pasar la menor cantidad de datos posible.
