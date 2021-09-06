<template>
    <v-container fluid fill-height>
        <v-carousel
            cycle
            height="800"
            hide-delimiter-background
            show-arrows-on-hover
            fill-height
        >
            <template v-slot:prev="{ on, attrs }">
            <v-btn
                color="success"
                v-bind="attrs"
                v-on="on"
            >Previous slide</v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
            <v-btn
                color="info"
                v-bind="attrs"
                v-on="on"
            >Next slide</v-btn>
            </template>
            <v-carousel-item
                v-for="(slide, i) in items"
                :key="i"
            >
            <v-card
                color="pink lighten-2"
                class="mx-auto"
                height="100%"
            >
                <v-img
                    :src="slide.avatar"
                    height="400"
                ></v-img>

                <v-card-title>
                    {{ slide.name }}
                </v-card-title>

                <v-card-subtitle>
                    <v-chip
                        color="pink"
                        label
                        text-color="white"
                    >
                    <v-icon left>
                        mdi-label
                    </v-icon>
                        {{ slide.category }}
                    </v-chip>
                </v-card-subtitle>

                <v-card-actions>
                    <v-row>
                        <v-col>
                            <v-chip>
                                <v-icon left>
                                    mdi-download
                                </v-icon>
                                    {{slide.downloads}}
                            </v-chip>
                        </v-col>
                        <v-col>
                            
                        </v-col>
                        <v-col>
                            
                        </v-col>
                    </v-row>
                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        {{ slide.description }}
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
export default {
    props: {
        user_token: {
            type: Object,
            required: true
        }
    },
    data () {
      return {
            items: [],
            show: false
        }
    },
    methods: {
        getItems() {
            axios.get('/api/items', {
                headers: {
                    'Authorization': `Bearer ${this.user_token.plainTextToken}`
                }
            }).then(response => {
                this.items = response.data
            }).catch(error => {

            });
        }
    },
    mounted() {
        this.getItems();
    }
}
</script>