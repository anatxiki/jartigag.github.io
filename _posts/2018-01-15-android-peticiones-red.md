---
title:  "android: peticiones de red"
layout: post
date:   2018-01-15
category: blog
author: jartigag
tag:
- android
---

## /índice:

- [Peticiones HTTP](#peticiones-http)
- [JSON](#json)

En Android es necesario declarar explícitamente los servicios a los que quiere acceder tu aplicación en `AndroidManifest.xml`. Para poder acceder a
Internet debe incluirse:  `<uses-permission android:name="android.permission.INTERNET"/>`

## Peticiones HTTP

Para tratar con peticiones [REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional) en Android podemos usar la librería
[Android Asynchronous Http Client](http://loopj.com/android-async-http), añadiendo `compile 'com.loopj.android:android-async-http:1.4.9'` al
build.gradle de la app.

Ejemplo de petición GET:

``` import com.loopj.android.http.AsyncHttpClient;

AsyncHttpClient client = new AsyncHttpClient(); client.addHeader("X-AUTH-TOKEN",settings.getString("token","")); client.get( activity,
"https:/api.xxx.xx/v2/resource", new ResourceResponseHandler(activity)); ```

Y tratamiento de su respuesta:

``` public class ResourceResponseHandler extends AsyncHttpResponseHandler {

  private Context context = null;

  public ResourceResponseHandler (Context context) { this.context = context; }

  @Override public void onSuccess(int statusCode, Header[] header, byte[] bytes) { Gson gson = new Gson(); ResponseContent content = gson.fromJson
  (new String(bytes), Response.class); Toast.makeTtext(this.context, content.getContent(), Toast.LENGTH.LONG).show(); }

  @Override public void onFailure(int statusCode, Header[] header, byte[] bytes, Throwable throwable) { Log.d("ResourceResponseHandler","Request
  returned error " + statusCode); } } ```

## JSON

Una forma de trabajar con JSON es convertir sus elementos en objetos de Java, mediante librerías como [Gson](https://github.com/google/gson). Se
instala añadiendo `compile 'com.google.code.gson:gson:2.8.2'` al build.gradle de la app.

Ejemplo (como el anterior, pero con petición POST):

``` Gson gson = new Gson();

//Response: ObjectResponse objectResponse = gson.fromJson(new String(responseBody, ObjectResponse.class));

//Request: AsyncHttpClient client = new AsyncHttpClient(); try { client.post( activity, "https://api.xxx.xx/something", new
StringEntity(gson.toJson(new ObjectRequest(params))), "application/json", new ResourceResponseHandler(activity)); } catch
(UnsupportedEncodingException e) { e.printStackTrace(); } ```
