---
title: "Using Vue Components in Nuxt Content with MDC"
description: "Learn how to embed interactive Vue components directly in your markdown content using Nuxt MDC syntax"
date: 2025-06-01
tags: ["nuxt", "vue", "mdc", "components"]
cover: "/images/nuxt-mdc.jpg"
published: true
author: "Your Name"
---

# Using Vue Components in Nuxt Content with MDC

Nuxt Content's MDC (MarkDown Components) syntax allows you to embed Vue components directly in your markdown content[1][9].

## Interactive Alert Component

::alert{type="info"}
This is an interactive alert component embedded in markdown!
::

## Code Block with Syntax Highlighting

<template> <div class="my-component"> <h2>{{ title }}</h2> <slot /> </div> </template> <script setup> defineProps({ title: String }) </script>

## Custom Counter Component

::counter{initial="5"}
This counter starts at 5 and you can increment it!
::

## Lists and Tables

### Features
- MDC syntax support
- Vue component embedding
- Props passing
- Slot content

| Feature | Support | Notes |
|---------|---------|-------|
| Props | ✅ | Pass data to components |
| Slots | ✅ | Content inside components |
| Reactivity | ✅ | Full Vue reactivity |

The MDC syntax makes it incredibly easy to create rich, interactive content[14].
