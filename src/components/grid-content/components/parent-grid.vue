<template>
    <div class="cheat-copy">
        <p class="subtitle">Parent Grid</p>
        <div class="cheat-box p-x">
            <p class="text-left">
                To activate grid write  
                <span class="text__special">
                    display: grid
                </span> .
                <br>
                Then you can add the following to make the template:
                <ul>
                    <li>
                        grid-template-columns
                    </li>
                    <li>
                        grid-template-rows
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
    name: 'ParentGrid'
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
