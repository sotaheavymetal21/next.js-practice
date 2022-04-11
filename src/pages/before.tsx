import Router from "next/router"

export default function before () {
    console.log('こんにちは')
    return (
        <>
        こんちわ
        <button onClick={ () => Router.push({pathname: '/after', query: {name: 'sota'}}) }>Afterへ</button>
        </>
    )
}