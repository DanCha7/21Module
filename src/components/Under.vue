<template>
    <div>
        <header class="header">
            <nav class="nav__btn">
               <router-link class="router-link" to="/">Home</router-link>
               <router-link class="router-link" to="/about">About us</router-link>
            </nav>
            <router-link class="router-link" to="/channel">channel</router-link>
        </header>
    </div>
</template>
<style>
.header {
  display: flex;
  justify-content: space-between;
  color: rgb(23, 23, 23);
}

.router-link:hover {
  transition: 0.5s all;
  text-decoration: underline ;
  color: var(--green);
}

.nav__btn {
  display: flex;
  gap: 40px;
  margin-bottom: 170px;
}
</style>
