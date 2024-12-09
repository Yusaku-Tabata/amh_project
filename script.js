document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    //↓入力漏れがあったら全て入力する様に警告
    if (!name || !email || !password || !confirmPassword) {
        alert('全ての項目を入力してください。');
        return;
    }

    if (password !== confirmPassword) {
        alert('パスワードが一致しません。');
        return;
    }
    
    alert('登録成功！');
});
