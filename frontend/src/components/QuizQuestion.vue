<template lang="pug">
    h1 I am a quiz question
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { CustomVue } from '../classes/CustomVue'

@Component
export default class QuizQuestion extends CustomVue {
    created() {
        console.log('Hola', this.$router.routerHello())
    }
}
</script>
