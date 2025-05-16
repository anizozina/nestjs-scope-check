## なにこれ
Scopeの動きを確認するやつ

Default ScopeがRequest Scopeに依存してた場合どうなるの？を検証するやつ
結論: Default ScopeがRequest Scopeに依存してた場合、Request Scopeになる（＝インスタンスがリクエストごとに作られる）

`curl localhost:3001/default-depends-on-request` を投げるたびにInstanceが作られ、IDが変わることが確認できる
