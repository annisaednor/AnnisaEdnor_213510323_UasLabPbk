<template>
  <div class="photo-widget">
    <h2>Widget Photo</h2>
    <h2 class="title">{{ title }}</h2>
    <div class="photo-container">
      <img :src="photoUrl" :alt="title" />
    </div>
    <button @click="getRandomPhoto">Cari Gambar Baru</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      photoUrl: '',
    };
  },
  mounted() {
    this.getRandomPhoto();
  },
  methods: {
    async getRandomPhoto() {
      try {
        const apiKey = '38037020-2c48722c03be8437a05b588e6';
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.hits.length);
        const randomPhoto = data.hits[randomIndex];

        this.title = randomPhoto.tags;
        this.photoUrl = randomPhoto.webformatURL;
      } catch (error) {
        console.error('Error fetching random photo:', error);
      }
    },
  },
};
</script>

<style scoped>

.photo-widget {
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #826F66;
  border-radius: 8px;
  max-width: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left:auto ;
  margin-right: auto;
}
h2{
  color: white;
  margin: 5px;
}
.title {
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  text-transform: capitalize;
}

.photo-container {
  width: 100%;
  max-width: 500px;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-widget button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
  color: #fff;
  background-color: #EA906C;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.photo-widget button:hover {
  background-color: #D49B54;
}
</style>