import { extend } from 'vee-validate';
import { max, min, numeric, required, email, confirmed } from 'vee-validate/dist/rules';

extend('max', max);
extend('min', min);
extend('numeric', numeric);
extend('required', {
    ...required,
    message: '{_field_} is required'
});
extend("email", {
    ...email,
    message: "This field must be a valid email"
});

extend('minmax', {
    validate(value, { min, max }) {
        return value.length >= min && value.length <= max
    },
    params: ['min', 'max'],
    message: '{_field_} must be at least {min} characters and {max} characters at most'
})

extend('confirmed', { ...confirmed })