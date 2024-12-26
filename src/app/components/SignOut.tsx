import { signOut } from "next-auth/react"

const SignOut = () => {
    return (
        <button onClick={() => signOut( { redirect: true, callbackUrl: '/' })}>sign out</button>
    )
}

export default SignOut
