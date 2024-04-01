<template>
    <div>
        <div class="py-3 px-5 d-flex align-items-center flex-wrap justify-content-between">
            <h1 class="h2 m-0">Uplink v.0.1</h1>
            <span>Welcome, Hades.</span>
        </div>
        <div class="row g-0 mt-4">
            <div class="col mt-3">
                <div class="container">
                    <div class="d-flex flex-wrap">
                        <Card v-for="t, index in tokens" class="card-token mx-2 overflow-visible">
                            <div class="position-absolute top-0 end-0">
                                <btn class="btn" @click="removeToken(index)">
                                    <i class="bi bi-x"></i>
                                </btn>
                            </div>
                            <h5 class="card-title">{{ t.name }}</h5>
                            <p class="mb-1">AC: {{ t.ac }}</p>
                            <tokenHealth :currentHP="t.currentHP" :maxHP="t.hp" :addHP="t.addHP" />
                        </Card>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mt-3">
                <addCard class="pe-3" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import mdButton from '../components/ui/mdButton.vue';
import Card from '../components/ui/Card.vue';
import addCard from '../components/addCard.vue';
import tokenHealth from '../components/tokenHealth.vue'

class Token {
    constructor(props = {}) {
        const {
            name = "Monster",
            ac = 10,
            hp = 5
        } = props;
        this.name = name;
        this.ac = ac;
        this.hp = hp;
        this.currentHP = hp;
    }
    addHP(dmg, reverse = false) {
        const diceRoll = this.$md.Dice.x(dmg);
        this.currentHP += reverse ? diceRoll.total * -1 : diceRoll.total;

        if (this.currentHP > this.hp) {
            this.currentHP = this.hp;
        }
    }
}

export default {
    name: "HomeView",
    components: {
        mdButton,
        Card,
        addCard,
        tokenHealth
    },
    methods: {
        clearForm() {
            // reset form
            this.f = {
                name: "",
                hp: 0,
                ac: 0
            }
        },
        addToken() {
            if (this.f.name) {
                this.tokens.push(new Token(this.f));
                this.saveBattle();
            }
        },
        removeToken(index) {
            this.tokens.splice(index, 1);
            this.saveBattle();
        },
        saveBattle() {
            localStorage.setItem("monsterList", JSON.stringify(this.tokens));
        },
        restoreBattle() {
            let savedList = localStorage.getItem("monsterList");
            savedList = JSON.parse(savedList);

            this.tokens = savedList;
        }
    },
    data() {
        return {
            f: {
                name: "",
                hp: 0,
                ac: 0
            }
        }
    },
    setup() {
        const tokens = ref([]);

        onMounted(() => {
            let savedList = localStorage.getItem("monsterList");
            savedList = JSON.parse(savedList);
            tokens.value = savedList || [];
        });

        return { tokens };
    }

}
</script>

<style lang="scss" scoped>
.card-token {
    min-width: 13rem;
}
</style>