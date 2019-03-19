<template>
    <div class="cheat-copy">
        <p class="subtitle">Child Overlap</p>
        <div class="cheat-box p-x">
            <p class="text-left">
                Just like in position fix, absolute and relative you can z-index the position of a child:  
            </p>
            <div class="text-left">
                <p>
                    z-index
                </p>
                <ul>
                    <li>
                        <span class="text__special">
                            number
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Overlap'
}
</script>

<style lang="scss" scoped>
    p {
        font-family: 'Open Sans', sans-serif;

        &.subtitle {
            font-weight: 700;
        }
    }

    .text {
        &-left {
        text-align: left;
        }

        &__special {
        color: #E8860C;
        font-weight: 600;
        font-style: italic;
        }
    }
</style>
