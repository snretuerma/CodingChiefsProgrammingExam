<template>
    <v-container fluid fill-height>
        <v-row>
            <v-col justify="center" align="center">
                <v-card flat max-width="700">
                    <v-carousel
                        height="800"
                        hide-delimiters
                        show-arrows-on-hover
                        fill-height
                    >
                        <template v-slot:prev="{ on, attrs }">
                            <v-btn
                                color="deep-purple lighten-2"
                                v-bind="attrs"
                                v-on="on"
                            >Previous</v-btn>
                        </template>
                        <template v-slot:next="{ on, attrs }">
                            <v-btn
                                color="deep-purple lighten-2"
                                v-bind="attrs"
                                v-on="on"
                            >Next</v-btn>
                        </template>
                        <v-carousel-item
                            v-for="(slide, i) in items"
                            :key="i"
                        >
                            <v-card
                                color="grey lighten-3"
                                class="mx-auto"
                                height="100%"
                            >
                                <v-img
                                    :src="slide.avatar"
                                    width="100%"
                                    height="590"
                                    contain
                                ></v-img>

                                <v-card-title class="mt-2">
                                    {{ slide.name }}
                                </v-card-title>
                                <v-card-text>
                                    <v-row
                                        align="center"
                                        class="mx-0"
                                    >
                                        <div>{{slide.description}}</div>
                                    </v-row>
                                </v-card-text>
                                <v-card-text>
                                    <v-row class="mx-0">
                                        <v-chip-group column>
                                            <v-chip label>
                                                <v-icon left>
                                                    mdi-label
                                                </v-icon>
                                                    {{slide.category}}
                                            </v-chip>

                                            <v-chip label>
                                                <v-icon left>
                                                    mdi-download
                                                </v-icon>
                                                    {{slide.downloads}}
                                            </v-chip>

                                            <v-chip label>
                                                <v-icon left>
                                                    mdi-license
                                                </v-icon>
                                                    {{slide.license}}
                                            </v-chip>

                                            <v-chip label>
                                                <v-icon left>
                                                    mdi-ray-start-vertex-end
                                                </v-icon>
                                                    {{slide.vertices}}
                                            </v-chip>
                                        </v-chip-group>
                                    </v-row>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-row class="mt-1">
                                        <v-col>
                                            <v-btn
                                                color="deep-purple lighten-2"
                                                text
                                                @click.prevent="selected=slide; edit_dialog=true;title='Edit Item'"
                                            >
                                                Edit
                                            </v-btn>
                                            <v-btn
                                                color="deep-purple lighten-2"
                                                text
                                                @click.prevent="selected=slide; dialog=true"
                                            >
                                                Delete
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-card-actions>
                            </v-card>
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-col>
        </v-row>
        <delete-confirmation :user_token="user_token.plainTextToken" 
            :dialog="dialog" :item="selected" @close-delete-dialog="closeDeleteDialog" 
            @show-delete-notif="removeItemFromList"
        />
        <add-edit-dialog :user_token="user_token.plainTextToken" :dialog="edit_dialog" :item="selected" :title="title"
            @close-edit-dialog="closeEditDialog"  @edit-item-complete="editItemFromList"
        />
    </v-container>
</template>

<script>
export default {
    components: {
        DeleteConfirmation : () => import('./DeleteConfirmation.vue'),
        AddEditDialog : () => import('./AddEditModal.vue'),
    },
    props: {
        user_token: {
            type: Object,
            required: true,
        }
    },
    data () {
      return {
            items: [],
            dialog: false,
            edit_dialog: false,
            selected: {},
            title: ''
        }
    },
    methods: {
        fetchItems() {
            axios.get('/api/items', {
                headers: {
                    'Authorization': `Bearer ${this.user_token.plainTextToken}`
                }
            }).then(response => {
                this.items = response.data
                    this.fetching_data = false;
            }).catch(error => { });
        },
        removeItemFromList() {
            this.items = this.items.filter(( obj ) => {
                return obj.slug !== this.selected.slug;
            });
            this.selected = {};
            this.dialog = false;
        },
        editItemFromList(payload) {
            this.items = this.items.filter(( obj ) => {
                return obj.slug !== this.selected.slug;
            });
            this.selected = payload;
            this.edit_dialog = false;
        },
        closeDeleteDialog() {
            this.selected = {};
            this.dialog = false;
        },
        closeEditDialog() {
            this.selected = {};
            this.edit_dialog = false;
        }
    },
    mounted() {
        this.fetchItems();
    },
}
</script>