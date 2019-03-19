<template>
    <div class="cheat-copy ">
        <p class="subtitle">How to manage Children Alignment</p>
        <div class="cheat-box p-x">
            <p class="text-left">
                Align your Children by declaring:
                <ul>
                    <li>
                    Justify Content: Children Row.
                    <br>
                    <span class="text__special">
                        flex-start, flex-end, center, space-between, space-around, space-evenly
                    </span>
                    </li>
                    <li>
                    Align Items: Each item.
                    <br>
                    <span class="text__special">
                        stretch, flex-start, flex-end, center, baseline
                    </span>
                    </li>
                    <li>
                    Align Content: Children rows.
                    <br>
                    <span class="text__special">
                        flex-start, flex-end, center, space-between, space-around, stretch
                    </span>
                    </li>
                </ul>
            </p>
            <p class="text-left">
                You can overwrite 
                <span class="text__special">
                    align-item
                </span>  
                property by writing:
                <span class="text__special">
                    align-self
                </span>
                to a flexed container child.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChildCopy'
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
