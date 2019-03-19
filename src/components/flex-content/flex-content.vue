<template>
    <div class="container container__flex">
        <ParentCopy/>
        <ChildCopy/>
        <Orderopy/>
    </div>
</template>

<script>
import ParentCopy from './components/parent-copy'
import ChildCopy from './components/child-copy'
import Orderopy from './components/order-copy'
export default {
    name: 'FlexContent',
    components: {
        ParentCopy,
        ChildCopy,
        Orderopy
    }
}
</script>
<style lang="scss">
    .container {
        max-width: 95%;
        margin: 0 auto;

        &__flex {
            display: flex;

            .cheat-copy {
                flex: 1 1 100%;

                &:nth-child(odd) {
                    .cheat-box {
                        background-color: #f7f6f6;
                    }
                }
            }

            .cheat-box {
                border: 1px solid #e8e8e8;
                margin: 0 2px;
                border-radius: 5px;
                display: flex;
                flex-flow: column;
                height: 100%;

                &:nth-child(odd) {
                    background-color: #f7f7f7;
                }

                .cheat-content {
                    flex: 1 1 100%;
                }
            }
        }
    }
    .p-x {
        padding-left: 15px; 
        padding-right: 15px; 
    }
    
</style>
