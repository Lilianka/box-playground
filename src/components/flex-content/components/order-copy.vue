<template>
    <div class="cheat-copy">
        <p class="subtitle">How to manage Child Order</p>
        <div class="cheat-box p-x">
            <div class="text-left">
                <p>
                    Children Order:
                </p>
                <p class="text-left">
                    You can specified the order of each child by writting: 
                    <span class="text__special">
                        order
                    </span>
                    and declaring a 
                    <span class="text__special">
                        number
                    </span>.
                </p>
            </div>
            <div class="text-left">
                <p>
                    Children Flex Directive:
                </p>
                <ul>
                    <li>
                    <span class="text__special">
                        flex-grow
                    </span>
                    </li>
                    <li>
                    <span class="text__special">
                        flex-shrink
                    </span>
                    </li>
                    <li>
                    <span class="text__special">
                        flex-basis
                    </span>
                    </li>
                </ul>
            </div>
            <div class="text-left">
                You can combine these three in: 
                <span class="text__special">
                    flex
                </span> directive.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderCopy'
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
