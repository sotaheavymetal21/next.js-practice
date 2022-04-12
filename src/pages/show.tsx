import styles from "../styles/Home.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function show() {
    const router = useRouter()
    
  
    return(
        <div className={styles.container}>
        <div className="bg-gray-100"></div>
        <header className="text-right border-2 border-black">
        <>
        <div>{ 'こんちわ' + localStorage.getItem('asdf') }</div>
        </>
          </header>

        <main className={styles.table}>
        <div className="grid grid-cols-5 gap-2">
           <div className="col-span-1 border-2 border-black">              
               <Link href="/record">
               <a>Home</a>
               </Link>
               <Link href="/user">
                <a>ユーザー管理</a>
               </Link>
             </div>
             
             <table className="col-span-2">
              <tr>
               <td>id:</td>
               <td>{ 'id_' + useRouter().query.id }</td>
              </tr>
               <tr>
                <td>名前:</td>
                <td>{ 'user' + useRouter().query.id }</td></tr>
              <tr>
               <td>メールアドレス:</td>
               <td>{ 'user' + useRouter().query.id + '@gmail.com' }</td>
              </tr>
            <tr>
             <td>権限:</td>
             <td>{ useRouter().query.Authority }</td>
            </tr>
       </table> 
        </div>
       </main>
       <div className={"w-24 text-center text-white border-2 border-black rounded-full py-2 px-1 text-1xl bg-red-400"}>
          <button>編集</button></div>
          <div className={"w-24 text-center border-2 border-black rounded-full py-2 px-1 text-1xl"}>
          <Link href="/user">戻る</Link></div>
       </div>
       

    )
}