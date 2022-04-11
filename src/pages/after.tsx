import { useRouter } from 'next/router'

export default function after () {
    //コンソールログでqueryが確認できる
    //クエリから値を取得し、画面に描写することができた
    console.log(useRouter().query)
    return(
        <>
        <div>{ 'こんちわ' + useRouter().query.name }</div>
        </>
    )
    
}