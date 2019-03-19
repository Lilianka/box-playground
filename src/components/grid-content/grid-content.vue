<template>
    <div class="container container__grid">
        <ParentGrid class="item-1"/>
        <ParentAlignment class="item-3"/>
        <ChildGrid class="item-2" />
        <ChildAlignment class="item-4" />
        <Areas class="item-5" />
        <Overlap class="item-6" />
    </div>
</template>

<script>
import ParentGrid from './components/parent-grid.vue'
import ParentAlignment from './components/parent-alignment.vue'
import ChildGrid from './components/child-grid.vue'
import ChildAlignment from './components/child-alignment.vue'
import Areas from './components/areas.vue'
import Overlap from './components/overlap.vue'


export default {
    name: 'GridContent',
    components: {
        ParentGrid,
        ParentAlignment,
        ChildGrid,
        ChildAlignment,
        Areas,
        Overlap,
    }
}
</script>
<style lang="scss">
    .container {
        max-width: 95%;
        margin: 0 auto;

        &__grid {
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-template-rows: auto auto auto auto;

            .cheat-copy {
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
                height: 100%;

                &:nth-child(odd) {
                    background-color: #f7f7f7;
                }
            }

            .item-1 {
                grid-column: 1 / span 1;
                grid-row: 1 / span 1;
            }

            .item-2 {
                grid-column: 1 / span 1;
                grid-row: 2/span 3;
            }

            .item-3 {
                grid-column: 2 / span 2;
                grid-row: 1 / span 2;
            }

            .item-4 {
                grid-column: 2;
                grid-row: 3/span 2;
            }

            .item-5 {
                grid-column: 3;
                grid-row: 3/span 2;
            }

            .item-6 {
                grid-column: 4;
                grid-row: 3/span 1;
            }
        }
    }
    .p-x {
        padding-left: 15px; 
        padding-right: 15px; 
    }
    
</style>
