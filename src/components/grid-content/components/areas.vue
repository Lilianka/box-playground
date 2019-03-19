<template>
    <div class="cheat-copy">
        <p class="subtitle">Parent and Child Areas</p>
        <div class="cheat-box p-x">
            <p class="text-left">
                You can declare areas templates and items by:  
            </p>
            <div class="text-left">
                <p>
                    Parent
                </p>
                <ul>
                    <li>
                        grid-template-areas
                        <br>
                        <span class="text__special">
                            " grid-area-name "
                        </span>
                    </li>
                </ul>
            </div>
            <div class="text-left">
                <p>
                    Child
                </p>
                <ul>
                    <li>
                        grid-area
                        <br>
                        <span class="text__special">
                            area-name
                        </span>
                    </li>
                </ul>
            </div>
            <div class="text-left">
                <p>
                    Remenber to give each child an area name, you can then build as follows:
                </p>
                <p>
                    In parrent container
                </p>
                <ul>
                    <li>
                        grid-template-areas:
                        <br>
                        <span class="text__special">
                            "header header header header"
                            "main main . sidebar"
                            "footer footer footer footer"
                        </span>
                    </li>
                </ul>
                <p>
                    A " . " is an empty space.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Areas'
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
