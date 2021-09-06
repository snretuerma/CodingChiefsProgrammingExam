<template>
    <v-container fluid fill-height>
        <v-row>
            <v-col justify="center" align="center">
                <v-card
                    class="rounded-lg"
                    max-width="800px"
                    outlined
                >
                    <v-toolbar flat color="primary" class="white--text">
                        <v-spacer />
                        <v-card-title primary-title>
                            <v-row >
                                <v-col class="overline">
                                    <h1>Login</h1>
                                </v-col>
                            </v-row>
                        </v-card-title>
                        <v-spacer />
                    </v-toolbar>
                    <v-card-text class="pr-10 pl-10">
                        <validation-observer
                            ref="observer"
                            v-slot="{ invalid }"
                        >
                            <v-form @submit.prevent="login">
                                <v-row>
                                    <v-col>
                                        <validation-provider
                                            name='Email' rules="required"
                                            v-slot="{ errors }"
                                        >
                                            <v-text-field
                                                tabindex="1"
                                                v-model.lazy="form.email"
                                                label="Email"
                                                clearable
                                                outlined
                                                required
                                                prepend-inner-icon="mdi-email-outline"
                                                :error-messages="errors"
                                            ></v-text-field>
                                        </validation-provider>
                                    </v-col>
                                </v-row>
                                <v-row align="center" justify="space-around">
                                    <v-col>
                                        <validation-provider
                                            name='Password' rules="min:6|required"
                                            v-slot="{ errors }"
                                        >
                                            <v-text-field
                                                tabindex="2"
                                                v-model.lazy="form.password"
                                                label="Password"
                                                outlined
                                                clearable
                                                required
                                                prepend-inner-icon="mdi-form-textbox-password"
                                                :error-messages="errors"
                                                :append-icon="form.show_password ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="show_password ? 'text' : 'password'"
                                                @click:append="show_password = !show_password"
                                            ></v-text-field>
                                        </validation-provider>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                        align="center"
                                        justify="space-around"
                                        class="mb-2"
                                    >
                                        <v-btn
                                            tabindex="3"
                                            depressed
                                            type="submit"
                                            :disabled="invalid"
                                            color="primary"
                                        >
                                            Submit
                                            <v-icon right>
                                                mdi-login-variant
                                            </v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </validation-observer>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
export default {
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
            show_password: false,
        }
    },
    methods: {
        async login() {
            await axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/login', this.form).then(response => {
                    this.$store.dispatch('setAuthUserToken', response.data).then(() => {
                        this.$router.push({ name: "Items" });
                    });
                });
            });
        }
    },
    mounted() {
    }
}
</script>