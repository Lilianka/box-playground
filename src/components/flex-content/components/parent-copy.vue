<template>
    <div class="cheat-copy">
        <p class="subtitle">How to activate Flex</p>
        <div class="cheat-box p-x">
            <div class="text-left">
                <p>
                    Parrent Component: display: 
                    <span class="text__special">flex</span>
                </p>
            </div>
            <div class="text-left">
                <p>
                    Flex Directions:
                </p>
                <ul>
                    <li><span class="text__special">row:</span> left to right</li>
                    <li><span class="text__special">row-reverse:</span> right to left</li>
                    <li><span class="text__special">column:</span> top to bottom</li>
                    <li><span class="text__special">column-reverse:</span> bottom to top</li>
                </ul>
            </div>
            <div class="text-left">
                <p>
                    To wrap your children write:
                </p>
                <ul>
                    <li>
                        <span class="text__special">nowrap:</span> 
                        all flex items will be on one line.
                    </li>
                    <li>
                        <span class="text__special">wrap:</span> 
                        flex items will wrap onto multiple lines, from top to bottom.
                    </li>
                    <li>
                        <span class="text__special">wrap-reverse:</span> 
                        flex items will wrap onto multiple lines from bottom to top.
                    </li>
                </ul>
            </div>
            <div class="text-left">
                <p>
                    You can combine your 
                    <span class="text__special">Flex Parrent Basis</span> 
                    by writting:
                    <span class="text__special">flex-flow</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ParrentCopy'
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
