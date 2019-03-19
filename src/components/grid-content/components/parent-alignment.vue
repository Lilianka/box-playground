<template>
    <div class="cheat-copy">
        <p class="subtitle">Parent Aligments</p>
        <div class="cheat-box p-x">
            <p class="text-left">
                Just like in Flexbox you have:  
            </p>
            <div class="text-left">
                <p>
                    Grid Align Items:
                </p>
                <ul>
                    <li>
                    Justify Item: Children Row.
                    <br>
                    <span class="text__special">
                        start, end, center,strech
                    </span>
                    </li>
                    <li>
                    Align Items: Each item.
                    <br>
                    <span class="text__special">
                        start, end, center, strech
                    </span>
                    </li>
                </ul>
            </div>
            <div class="text-left">
                <p>
                    Grid Align All Content:
                </p>
                <ul>
                    <li>
                    Justify Content: To align in X-Axis.
                    <br>
                    <span class="text__special">
                        start, end, center, space-between, strech, space-between, space-around, space-evenly
                    </span>
                    </li>
                    <li>
                    Align Content: To align in Y-Axis.
                    <br>
                    <span class="text__special">
                        start, end, center, space-between, strech, space-between, space-around, space-evenly
                    </span>
                    </li>
                </ul>
            </div>
            <div class="text-left">
                <p>
                    Auto Align:
                </p>
                <ul>
                    <li>
                    Place Item: Sets Item alignment.
                    <br>
                    <span class="text__special">
                        align-items / justify-items
                    </span>
                    </li>
                    <li>
                    Place Content: Sets Content alignment.
                    <br>
                    <span class="text__special">
                        align-content / justify-content
                    </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ParentAlignment'
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
