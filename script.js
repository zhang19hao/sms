var token = "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"; // 替换为你的个人访问令牌
fetch('https://api.github.com/repos/zhang19hao/sms/issues', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Authorization': 'token ' + token,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  // 处理响应
})
.catch(error => {
  // 处理错误
});
