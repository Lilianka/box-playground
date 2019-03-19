<template>
    <div class="cheat-copy">
        <p class="subtitle">Child placements</p>
        <div class="cheat-box p-x">
            <p class="text-left">
                You can place the children anywhere you want!:  
            </p>
            <div class="text-left">
                <p>
                    Columns:
                </p>
                <ul>
                    <li>
                    <span class="text__special">
                        grid-column-start
                    </span>
                    </li>
                    <li>
                    <span class="text__special">
                        grid-column-end
                    </span>
                    </li>
                </ul>
            </div>
            <div class="text-left">
                <p>
                    Rows:
                </p>
                <ul>
                    <li>
                    <span class="text__special">
                        grid-row-start
                    </span>
                    </li>
                    <li>
                    <span class="text__special">
                        grid-row-end
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
                    grid-column: Sets the start and end.
                    <br>
                    <span class="text__special">
                        start-number / end number
                    </span>
                    </li>
                    <li>
                    grid-row: Sets the start and end.
                    <br>
                    <span class="text__special">
                        start-number / end number
                    </span>
                    </li>
                </ul>
                <p>
                    You can also set a 
                    <span class="text__special">
                        span
                    </span> 
                    to the end directive to fill the space.
                </p>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChildGrid'
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
