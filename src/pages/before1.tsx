// 外部からbeforeを参照したいときにexportを書く
//import styles from '../styles/Home.moduleみたいに引っ張ってくる

import Link from "next/link" 
import Router from "next/router"

export default function before(){
    const name: string = 'sota'
    
    //アロー関数が流行っている↓
    //オプションがつけられる　クエリをつけたい
    //?id=1 value
    //?name=fignny
    //クエリから値を受け取って画面表示がしたい
    //import

    const clickEvent = () => {
        Router.push({
        pathname: '/after1',
        query: {name: 'fignny'}
         })
    }

    //読み込む方はimportを書く
    return (
        //constで宣言したnameをここに表示する
        //要素をちゃんと大きな括りで囲わなければならない
        //<>,<div>でもなんでもいい
        //<div className={styles.title}>sota</div>
        <>
        <div>{ name }</div>
        <div>{ name + 'ようこそ'}</div>
        <button onClick={() => console.log('押下したぜ。')} className="bg-red-400">Afterへ</button>
        <Link href="/after1">
            <a>リンク押下で遷移</a>
        </Link>
        <button onClick={() => Router.push('/after1')}>next/routerで遷移</button>
        <button onClick={clickEvent}>クリックしてね</button>
        </>
        //変数を入れて表示するときは{}が必要　可変
        //next/link　画面遷移するだけ
        //next/router URLを操作することができる
        //Router.pushのところに赤線が引かれる
        //どこに定義されているのか？と怒られているのでimportでRouterを定義する
        //returnの外に記述した関数を呼ぶには２７行目みたいに書こうね。
        //
    )
}