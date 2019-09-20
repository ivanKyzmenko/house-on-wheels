<template>
  <div class="app-content-faq">
    <div class="app-content-faq__expansion">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(item, i) in questions"
          :key="i"
        >
          <v-expansion-panel-header>{{item.question}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{item.answer}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <contact-us></contact-us>
  </div>
</template>

<script>
import ContactUs from '../components/ContactUs'

export default {
  name: 'faq',
  components: {
    ContactUs
  },
  data: () => ({
    questions: [
      {
        question: 'Financing',
        answer: 'We work together with financing partner to help you out  (Link)'
      },
      {
        question: 'Hitch for trailers',
        answer: 'All double axle trailers come with 2 5/16" size ball'
      },
      {
        question: 'Fire suppression',
        answer: 'We install a Fire suppression system per your request. Please check your local fire marshall for requirements for a fire suppression system'
      },
      {
        question: 'Custom order ',
        answer: 'we can make a truck/trailer by your personal plan. We will work together with you and try to meet all your requirements'
      },
      {
        question: 'Down payment',
        answer: 'We require a 20% down payment and the rest of the price is expected upon completion of the project'
      }
    ]
  })
}
</script>
