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
        <div>{ 'こんちわ' + 'YourName'}</div>
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
             
            <div>id:</div><div>{ 'id_' + useRouter().query.id }</div>
            <div>名前:</div><div>{ 'user' + useRouter().query.id }</div>
            <div>メールアドレス:</div><div>{ 'user' + useRouter().query.id + '@gmail.com' }</div>

            <div>権限:</div><div>{ useRouter().query.Authority }</div>
        
        
        
        </div>
       </main>
       </div>
       

    )
}