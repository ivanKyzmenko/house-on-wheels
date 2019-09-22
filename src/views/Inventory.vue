<template>
  <div class="app-content-inventory">
    <div class="app-content-inventory__inside">
      <template v-for="item in readyProducts">
        <div class="app-content-inventory__bar" v-bar>
          <div class="app-content-inventory__gallery">
            <div v-for="img in item.images" class="app-content-inventory__gallery-item">
              <img class="app-content-inventory__gallery-item__image" :src="img" alt="">
            </div>
          </div>
        </div>

        <div class="app-content-inventory__about">
          <h2 class="app-content-inventory__about-title">{{item.title}}</h2>
          <div class="app-content-inventory__about-price">{{item.price}}$</div>
          <div class="app-content-inventory__about-desc" v-html="item.description"></div>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    components: {
    },
    data: () => ({
      readyProducts: [
        {
          title: 'New Consession Food Trailer',
          price: 8999,
          images: [
            '/../img/gallery/gallery_1.jpg',
            '/../img/gallery/gallery_2.jpg',
            '/../img/gallery/gallery_3.jpg',
            '/../img/gallery/gallery_4.jpg',
            '/../img/gallery/gallery_5.jpg',
            '/../img/gallery/gallery_6.jpg',
            '/../img/gallery/gallery_7.jpg'
          ],
          description: "<ul>" +
          "<li>8 exhaust hood with vent</li>" +
          "<li>Stainless steel walls</li>" +
          "<li>Insulated walls</li>" +
          "<li>3 compartment sink</li>" +
          "<li>Handwash sink with splash guards</li>" +
          "<li>4 door cabinet above sinks</li>" +
          "<li>Big serving window with double opening</li>" +
          "<li>LED light kit</li>" +
          "<li>LP Gas cage</li>" +
          "<li>1 RV inlet plug</li>" +
          "<li>9 double electrical receptacles</li>" +
          "<li>30-gallon freshwater tank and 40-gallon grey</li>" +
          "<li>Plumbing system</li>" +
          "<li>2.7-gallon water heater</li>" +
          "<li>City Direct water line</li>" +
          "<li>Double axle with electric brakes</li>" +
          "<li>2-5/16\" coupler hitch</li>" +
          "<li>Cage for generator</li>" +
          "<li>Breakaway kit</li>" +
          "<li>Diamond pattern aluminum floor</li>" +
          "<li>Outside serving lights</li>" +
          "<li>Exterior folding serving food shelf</li>" +
          "</ul>"
        }
      ]
    }),
    mounted () {
    },
    methods: {
    }
  }
</script>


