// $().ready(function () {
//   $('#form-1').validate({
//     // onfocusout: true,
//     // onkeyup: true,
//     // onclick: true,
//     // rules: {
//     //   lastname: {
//     //     requied: true,
//     //     maxLength: 15,
//     //   },
//     //   firstname: {
//     //     requied: true,
//     //     maxLength: 15,
//     //   },
//     //   email: {
//     //     requied: true,
//     //     email: true,
//     //   },
//     //   password: {
//     //     requied: true,
//     //     minLminength: 8,
//     //   },
//     // },
//     //
//     // },

//   });
// });

var v = $('#form-1').validate({
  rules: {
    lastname: {
      required: true,
      maxlength: 15,
    },
    firstname: {
      required: true,
      maxlength: 15,
    },
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 8,
    },
  },
  messages: {
    lastname: {
      required: 'Vui lòng nhập tên của bạn',
      maxlength: 'Hãy nhập tối đa 15 ký tự',
    },
    firstname: {
      required: 'Vui lòng nhập họ của bạn',
      minlength: 'Hãy nhập tối đa 15 ký tự',
    },
    email: {
      required: 'Vui lòng nhập email của bạn',
      email: 'Vui lòng nhập đúng định dạng của email',
    },
    password: {
      required: 'Vui lòng nhập mật khẩu của bạn',
      minlength: 'Hãy nhập ít nhất 8 ký tự',
    },
  },
});
