<template>
    <div class="dropdown">
        <div class="p-1 px-2 rounded border border-primary-subtle text-primary text-center" data-bs-toggle="dropdown" aria-expanded="false">
            {{ currentHP }} / {{ maxHP }}
        </div>
        <ul class="dropdown-menu dropdown-menu-end" style="">
            <form class="px-3 py-2 text-center" @submit="runForm">
                <div class="mb-2">
                    <label for="healthInput" class="form-label">Modify Health</label>
                    <input v-model="hpInt" type="text" class="form-control" id="healthInput" placeholder="5" autofocus
                        style="width: 140px;">
                </div>
                <div class="d-flex justify-content-center">
                    <mdButton @click="addHP(hpInt)">Heal</mdButton>
                    <mdButton @click="addHP(hpInt, true)">Damage</mdButton>
                </div>
            </form>
        </ul>
    </div>
</template>

<script>
import mdButton from './ui/mdButton.vue';

export default {
    name: "tokenHealth",
    data(){
        return {
            hpInt: ""
        }
    },
    components: {
        mdButton
    },
    props: {
        currentHP: Number,
        maxHP: Number,
        addHP: Function
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped></style>