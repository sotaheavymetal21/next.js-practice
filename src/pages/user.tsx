import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Router from "next/router"



export default function index(){
 
  const clickEvent1 = () => {
    Router.push({
    pathname: '/show',
    query: {id: '1',Authority: '管理者'}
     })
}
const clickEvent2 = () => {
  Router.push({
  pathname: '/show',
  query: {id: '2',Authority: '管理者'}
   })
}
const clickEvent3 = () => {
  Router.push({
  pathname: '/show',
  query: {id: '3',Authority: 'ユーザー'}
   })
}
const clickEvent4 = () => {
  Router.push({
  pathname: '/show',
  query: {id: '4',Authority: '管理者'}
   })
}
const clickEvent5 = () => {
  Router.push({
  pathname: '/show',
  query: {id: '5',Authority: 'ユーザー'}
   })
}

    return (
      <div className={styles.container}>
        <div className="bg-gray-100">
       
        c
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
            <div className="flex col-span-4">
                <h3>検索</h3>
                <form className=" px-6 mt-4 mb-4 w-full,text-align">
          <div>id</div>
         <input className = "flex-1 border-2 border-black"></input>
        </form>
        <form className="px-6 mt-4 mb-4 w-full,text-align">
          <div>名前</div>
         <input className = "flex-1 border-2 border-black"></input>
        </form>
        <form className="px-6 mt-4 mb-4 w-full,text-align">
          <div>メールアドレス</div>
         <input className = "flex-1 border-2 border-black"></input>
        </form>
        <form className="px-6 mt-4 mb-4 w-full,text-align">
          <div>権限</div>
         <input className = "flex-1 border-2 border-black"></input>
        </form>
        </div>
        <ul>
         <li>
          <div className={"w-24 text-white border-2 border-black rounded-full py-2 px-3 text-2xl bg-red-400"}>
          <button>検索</button></div>
        </li>
       </ul>
             <h3>ユーザー一覧</h3>
              <div className="pl-20 bg-gray-100">
               <table width="500 height=100">
                <div className="py-4">
                 <tbody className="border-2 border-black">
                  <tr className="border-2 border-black">
                   <th>id</th>
                   <th>名前</th>
                   <th>メールアドレス</th>
                   <th>権限</th>
                  </tr>
                  <tr>
                  <button onClick={clickEvent1}><td>id_1</td></button>
                   <td>user1</td>
                   <td>user1@gmail.com</td>
                   <td>管理者</td>
                  </tr>
                  <tr>
                  <button onClick={clickEvent2}><td>id_2</td></button>
                   <td>user2</td>
                   <td>user2@gmail.com</td>
                   <td>管理者</td>
                  </tr>
                  <tr>
                  <button onClick={clickEvent3}><td>id_3</td></button>
                   <td>user3</td>
                   <td>user3@gmail.com</td>
                   <td>ユーザー</td>
                  </tr>
                  <tr>
                  <button onClick={clickEvent4}><td>id_4</td></button>
                    <td>user4</td>
                    <td>user4@gmail.com</td>
                    <td>管理者</td>
                   </tr>
                   <tr>
                   <button onClick={clickEvent5}><td>id_5</td></button>
                       <td>user5</td>
                       <td>user5@gmail.com</td>
                       <td>ユーザー</td>
                   </tr>
                 </tbody>
                </div>
               </table>
              </div>
             </div>
            </main>
           </div>
          </div>
    );
  };