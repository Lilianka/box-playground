<template>
    <div class="item" :class="[itemNumber, bgColor]">
        <p class="text-center">
            {{text}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'FlexBoxes',
    props: {
        itemNumber: String,
        bgColor: String,
        text: String,
    }
}
</script>

<style lang="scss" scoped>
    .text-center {
        text-align: center;
    }
</style>
