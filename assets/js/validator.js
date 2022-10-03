$('#form-1').validate({
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

$('#form-2').validate({
  rules: {
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

$('#form-comment').validate({
  rules: {
    fullname: {
      required: true,
      maxlength: 15,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    fullname: {
      required: 'Vui lòng nhập họ tên của bạn',
      maxlength: 'Hãy nhập tối đa 15 ký tự',
    },
    email: {
      required: 'Vui lòng nhập email của bạn',
      email: 'Hãy nhập đúng định dạng email',
    },
  },
});
