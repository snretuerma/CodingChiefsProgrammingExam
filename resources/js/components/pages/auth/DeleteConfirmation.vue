<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
        <v-card>
            <v-card-title>
                <span class="text-h5">Delete {{item.name}}</span>
            </v-card-title>
            <v-card-text>
                <div>Are you sure you want to delete {{item.name}}?</div>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click.stop="$emit('close-delete-dialog')"
                >
                    Cancel
                </v-btn>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click.prevent="deleteItem"
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
        item: {
            type: Object,
            required: true
        },
        user_token: {
            type: String,
            required: true
        },
        dialog: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        deleteItem() {
            axios.delete(`api/items/${this.item.slug}`, {
                headers: {
                    'Authorization': `Bearer ${this.user_token}`
                }
            })
            .then(response => {
                this.$emit('show-delete-notif')
            }).catch(error => { });
        }
    }
}
</script>