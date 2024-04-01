<template>
    <div>
        <div class="container">
            <h3 class="text-uppercase">Add an Entity</h3>
            <div class="mb-2">
                <label class="form-label text-muted">Name</label>
                <input type="text" class="form-control" v-model="$parent.f.name" />
            </div>
            <div class="mb-2">
                <label class="form-label text-muted">Health Points</label>
                <input type="number" min="0" class="form-control" v-model="$parent.f.hp" />
            </div>
            <div class="mb-2">
                <label class="form-label text-muted">AC</label>
                <input type="number" min="0" max="30" class="form-control" v-model="$parent.f.ac" />
            </div>
            <div class="mt-3">
                <mdButton class="ms-0" @click="$parent.addToken()">Add</mdButton>
                <mdButton class="btn-outline-secondary me-0" @click="$parent.clearForm()">Clear</mdButton>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './ui/Card.vue'
import mdButton from './ui/mdButton.vue';
export default {
    name: "addCard",
    components: {
        Card,
        mdButton
        
    }
}
</script>

<style lang="scss" scoped></style>