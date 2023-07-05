<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li :class="{ 'active': $route.path === '/' }"><router-link to="/" class="nav-link">Foto</router-link></li>
          <li :class="{ 'active': $route.path === '/mylokasi' }"><router-link to="/mylokasi" class="nav-link">Lokasi</router-link></li>
          <li :class="{ 'active': $route.path === '/mycuaca' }"><router-link to="/mycuaca" class="nav-link">Cuaca</router-link></li>
          <li :class="{ 'active': $route.path === '/mystopwatch' }"><router-link to="/mystopwatch" class="nav-link">Stopwatch</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

#app {
  text-align: center;
}

body {
  background-color: #FEE0C0;
}

header {
  background: #3A3845;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

nav {
  display: flex;
  justify-content: space-between;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

nav li {
  display: inline-block;
  margin-right: 10px;
  font-weight: bold;
  flex-grow: 1;
  text-align: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a:hover,
.active {
  background-color: #C69B7B;
  border-radius: 4px;
}

@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  nav li {
    width: auto;
    margin: 0 5px;
  }
}
</style>
