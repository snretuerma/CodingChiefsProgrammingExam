<template>
    <v-dialog
        v-model="dialog"
      persistent
      max-width="800px"
    >
        <v-card>
            <v-card-title>
                <span class="text-h5">{{title}}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                                v-model.trim="form.name"
                                label="Name"
                                clearable
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                            <v-text-field
                                v-model.trim="form.category"
                                label="Category"
                                clearable
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="12"
                            md="12"
                        >
                             <v-textarea
                                v-model.trim="form.description"
                                label="Description"
                                clearable
                                outlined
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="4"
                            md="4"
                        >
                            <v-text-field
                                v-model.number="form.downloads"
                                label="Downloads"
                                clearable
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="4"
                        >
                            <v-text-field
                                v-model.number="form.vertices"
                                label="Vertices"
                                clearable
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="4"
                            md="4"
                        >
                                <v-text-field
                                    v-model.trim="form.license"
                                    label="License"
                                    clearable
                                    outlined
                                ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                                <v-text-field
                                    v-model.trim="form.slug"
                                    label="Slug"
                                    clearable
                                    outlined
                                ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="6"
                        >
                           
                            <v-file-input
                                accept="image/*"
                                v-model="form.avatar"
                                chips
                                multiple
                                label="Avatar"
                                outlined
                                clearable
                            ></v-file-input>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click.stop="$emit('close-edit-dialog')"
                >
                    Cancel
                </v-btn>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click.prevent="editItem"
                >
                    Accept
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        dialog: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object,
            required: true
        },
        user_token: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            form: {
                category: '',
                description: '',
                downloads: '',
                license: '',
                name: '',
                vertices: '',
                slug: '',
                avatar: null,
            }
        }
    },
    methods: {
        editItem() {
            if (this.form.avatar) {
                var data = new FormData();
                for (var key in this.form) {
                    data.append(key, this.form[key]);
                }
                axios.patch(`api/items/${this.item.slug}`, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${this.user_token}`
                    }
                })
                .then(response => {
                    this.$emit('edit-item-complete', response.data)
                });
            }else {
                axios.patch(`api/items/${this.item.slug}`, this.form, {
                    headers: {
                        'Authorization': `Bearer ${this.user_token}`
                    }
                })
                .then(response => {
                    this.$emit('edit-item-complete', response.data)
                });
            }
            
        }
    }
}
</script>