"use client"
import { signIn } from "next-auth/react"

const SignInWIthGoogle = () => {
    return (
        <div>
            <button type="button" onClick={() => signIn('google')}>Sign in with Google</button>

            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const username = formData.get('username') as string;
                const password = formData.get('password') as string;
                const email = formData.get('email') as string;

                signIn('credentials', {
                    username,
                    password,
                    email,
                    callbackUrl: '/'
                });
            }}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <input type="email" name="email" placeholder="Email" />
                <button type="button" onClick={() => signIn("credentials")}>
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default SignInWIthGoogle
