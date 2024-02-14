<template>
  <div class="pa-6 pt-16">
    <h2>Wishlist</h2>
        <v-list>
      <v-list-item-group v-model="model">
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>

export default {
 name: "MyWishlist",
  data() {
    return {
      model: null,
    };
  },
  components: {
    // HouseDetail
  },
}
</script>

<style>

</style>