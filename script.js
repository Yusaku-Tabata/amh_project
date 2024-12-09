// フォーム送信イベントをキャッチしてデータを保存
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルト動作を無効化
    console.log('フォーム送信イベントが発火しました'); // 確認用ログ
    // 各入力フィールドの値を取得
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 入力チェック
    if (!name || !email || !password || !confirmPassword) {
        alert('全ての項目を入力してください。');
        return;
    }

    if (password !== confirmPassword) {
        alert('パスワードが一致しません。');
        return;
    }

    // ユーザー情報をローカルストレージに保存
    const userList = JSON.parse(localStorage.getItem('users')) || [];
    userList.push({ name, email }); // パスワードは保存せず、必要最低限の情報だけ
    localStorage.setItem('users', JSON.stringify(userList));

    // 登録成功メッセージを表示
    alert('登録成功！');

    // フォームをリセット
    document.getElementById('register-form').reset();

    // ユーザーリストを再表示
    renderUserList();
});

// ユーザーリストをHTMLに表示する関数
function renderUserList() {
    const userList = JSON.parse(localStorage.getItem('users')) || []; // ローカルストレージからデータ取得
    console.log('ユーザーリストを取得:', userList);
    const userListContainer = document.getElementById('user-list'); // ユーザーリストのコンテナを取得
    

    // リストを初期化
    userListContainer.innerHTML = '';
    
    // 各ユーザー情報をリストに追加
    userList.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        userListContainer.appendChild(listItem);
    });
}

// 初回ロード時にユーザーリストを表示
document.addEventListener('DOMContentLoaded', renderUserList);
