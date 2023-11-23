---
sidebar_position: 1
title: Riverpod Usecase 1
---

:::info[This is based on a YouTube Tutorial]

To follow the YouTube tutorial by [Vandad Nahavandipoor](https://www.youtube.com/@VandadNP), [click here](https://youtu.be/vtGCteFYs4M?si=HjEqY4207MwyCzBP&t=580).

:::

This is a very simple use case showing the data and time using a global provider.


## Create the project & add `hooks_riverpod`
Create the project
```bash
flutter create riverpod_example_1
```

Install hooks_riverpod
```bash
flutter pub add hooks_riverpod
```

## Open `main.dart` in the `lib` folder
Delete everything within the `main.dart` file and replace it with this:

```dart showLineNumbers
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

void main() {
  runApp(const ProviderScope(child: MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
} 

class MyHomePage extends ConsumerWidget {
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Example 1"),
      ),
    );
  }
}
```
On line 5 we wrap our `MyApp()` in riverpod's `ProviderScope()` widget. This gives riverpod access to the entire app. This code returns a material app with a consumer stateless widget, shown from lines 25-36, that is able to access providers from riverpod.


## Add Our Provider

```dart
     home: const MyHomePage(),
    );
  }
} 
//Next Line Added
+ final currentDate = Provider((ref) => DateTime.now());

class MyHomePage extends ConsumerWidget {
  const MyHomePage({super.key});

  @override

```
By adding this line of code we added a provider that has the current date and time to the variable currentDate.

## Access the provider
To access our provider we need to call our `WidgetRef` (named `ref` as shown in line 29 of the code above) property in the `consumerWidget` we added. We access the provider with the `ref.watch()` since we always want to up to date data. We will save the provider's value to a variable `date`.
```dart
@override
  Widget build(BuildContext context, WidgetRef ref) {
    //Next Line Added
+   final date = ref.watch(currentDate);
    return Scaffold(
```

## Display the provider value
We then simply use our variable in a text widget and convert it to a string to display the current date-time.

As written the date will not update as there is nothing calling for the value to check the date-time again, so it will display the date-time of when it was rendered.

```dart
Widget build(BuildContext context, WidgetRef ref) {
    final date = ref.watch(currentDate);
    return Scaffold(
        appBar: AppBar(
          title: const Text("Example 1"),
        ),
    //Next Line Added
+       body: Center(
    //Next Line Added
+         child: Text(
    //Next Line Added
+           date.toIso8601String(),
    //Next Line Added
+         ),
    //Next Line Added
+       ));
  }
}
```