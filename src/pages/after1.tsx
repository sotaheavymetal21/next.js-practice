//遷移後の画面　fromの後はパスを指定する
import before from './before1'
import { useRouter } from 'next/router'

//beforeのnameを出したいからbefore.nameと記述
export default function after() {
    const router = useRouter()
    console.log(router.query) // router.query???? 
    console.log(router.query.name) // これで画面に出せる$$$$$$$$$$$
    //const router = useRouter()
    console.log(before.name)
    return(
         <div>遷移したよ</div>


    )
}