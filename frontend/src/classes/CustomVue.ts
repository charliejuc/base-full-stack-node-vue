import Vue from 'vue'
import { CustomRouter } from '../router/CustomRouter'

export class CustomVue extends Vue {
    readonly $router!: CustomRouter
}
