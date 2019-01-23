//初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录

const state = {
    token: window.localStorage.getItem('token'),
    address: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        }
    ],
};

export default state;