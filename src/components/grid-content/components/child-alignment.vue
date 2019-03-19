<template>
    <div class="cheat-copy">
        <p class="subtitle">Child Alignment</p>
        <div class="cheat-box p-x">
            <p class="text-left">
                You can place the children anywhere you want!:  
            </p>
            <div class="text-left">
                <p>
                    X axis:
                </p>
                <ul>
                    <li>
                        justify-self
                        <br>
                        <span class="text__special">
                            start, end, center, strech
                        </span>
                    </li>
                </ul>
            </div>
            <div class="text-left">
                <p>
                    Y axis:
                </p>
                <ul>
                    <li>
                        align-self
                        <br>
                        <span class="text__special">
                            start, end, center, strech
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
                        place-self
                        <br>
                        <span class="text__special">
                            align-self / justify-self
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChildAlignment'
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
