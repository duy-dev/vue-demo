<template>
  <h1>List Dog</h1>
  <router-link :to="{ name: 'about-pets-dog-detail', params: { id: '1' } }"
    >Dog 1</router-link
  >
  |
  <router-link :to="{ name: 'about-pets-dog-detail', params: { id: '2' } }"
    >Dog 2</router-link
  >
  |
  <router-link :to="{ name: 'about-pets-dog-detail', params: { id: '3' } }"
    >Dog 3</router-link
  >
</template>
