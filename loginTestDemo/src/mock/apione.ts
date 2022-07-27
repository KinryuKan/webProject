import Mock from "mockjs";
export default [
  // GetToken
  {
    url: "/auth/user/getUser",
    type: "post",
    response: (option: any) => {
      const $username = JSON.parse(option.body).username;
	  const $password = JSON.parse(option.body).password;
      if ($username == 'admin' && $password == '123456') {
        return Mock.mock({
          code: 200,
          message: "登录成功",
          data: {
            token: "testToken",
			id: "@id", //得到随机id
			username: "@cname()", //得到随机姓名
			phone:/^1[0-9]{10}$/,
			date: "@date()", //得到随机日期
			avatar: "@image('200*200','red','#fff','avatar')", //得到随机图片
			description: "@paragraph(1)", //得到随机描述
			ip: "@ip()", //得到随机ip
			email: "@email()", //得到随机邮箱
          },
        });
      } else {
        return Mock.mock({
          code: 400,
          message: "用户名或密码错误",
        });
      }
    },
  },
];