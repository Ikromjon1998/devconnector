const Validator = require('validator');

const isEmpty = require('./is-empty');


module.exports = function validateProfileInput(data) {
    let errors = {};

    // Convert all empty fields to empty strings
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';

    if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle needs to be between 2 and 40 characters';
    }

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required';
    }

    if (Validator.isEmpty(data.status)) {
        errors.status = 'Status field is required';
    }

    if (Validator.isEmpty(data.skills)) {
        errors.skills = 'Skills field is required';
    }

    if (!isEmpty(data.website)) {
        if (!Validator.isURL(data.website)) {
            errors.website = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.youtube)) {
        if (!Validator.isURL(data.youtube)) {
            errors.youtube = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.twitter)) {
        if (!Validator.isURL(data.twitter)) {
            errors.twitter = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.facebook)) {
        if (!Validator.isURL(data.facebook)) {
            errors.facebook = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.linkedin)) {
        if (!Validator.isURL(data.linkedin)) {
            errors.linkedin = 'Not a valid URL';
        }
    }

    if (!isEmpty(data.instagram)) {
        if (!Validator.isURL(data.instagram)) {
            errors.instagram = 'Not a valid URL';
        }
    }

    //     if (req.body.handle) profileFields.handle = req.body.handle;
    //     if (req.body.company) profileFields.company = req.body.company;
    //     if (req.body.website) profileFields.website = req.body.website;
    //     if (req.body.location) profileFields.location = req.body.location;
    //     if (req.body.bio) profileFields.bio = req.body.bio;
    //     if (req.body.status) profileFields.status = req.body.status;
    //     if (req.body.githubusername) profileFields.githubusername = req.body.githubusername;
    //
    //     // Skills - Split into array
    //     if (typeof req.body.skills !== 'undefined') {
    //         profileFields.skills = req.body.skills.split(',');
    //     }
    //
    //     // Social
    //     profileFields.social = {};
    //     if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    //     if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    //     if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    //     if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    //     if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
