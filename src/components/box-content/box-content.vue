<template>
  <div class="hello">
    <div class="container__flex">
      <Boxes v-for="boxes in boxConfig"
      :key="boxes.class"
      :itemNumber="boxes.itemNumber"
      :bgColor="boxes.bgColor"
      :text="boxes.text"
      />
    </div>
  </div>
</template>

<script>
import Boxes from "./components/boxes";

export default {
  name: 'BoxContent',
  components: {
    Boxes
  },

  data () {
        return {
            boxConfig: [
                {
                    class: '1',
                    itemNumber: 'item-1',
                    text: 'BOX 1',
                    bgColor: 'bg__purple',
                },
                {
                    class: '2',
                    itemNumber: 'item-2',
                    text: 'BOX 2',
                    bgColor: 'bg__red',
                },
                {
                    class: '3',
                    itemNumber: 'item-3',
                    text: 'BOX 3',
                    bgColor: 'bg__orange',
                },
                {
                    class: '4',
                    itemNumber: 'item-4',
                    text: 'BOX 4',
                    bgColor: 'bg__yellow',
                },
                {
                    class: '5',
                    itemNumber: 'item-5',
                    text: 'BOX 5',
                    bgColor: 'bg__green',
                },
                {
                    class: '6',
                    itemNumber: 'item-6',
                    text: 'BOX 6',
                    bgColor: 'bg__blue',
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
  .container {
    &__flex {
      display: flex;

      .item {
        flex: 1 1 100%;
      }
    }
  }

  .bg {
    &__purple {
      background-color: #7C0EE8;
    }
    &__red {
      background-color: #FF0000;
    }
    &__orange {
      background-color: #E8860C;
    }
    &__yellow {
      background-color: #FFF208;
    }
    &__green {
      background-color: #09FF8A;
    }
    &__blue {
      background-color: #0888FF;
    }
  }
</style>
