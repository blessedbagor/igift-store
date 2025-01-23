import { Metadata } from "next";
import { auth } from "@/auth";
import {SessionProvider} from 'next-auth/react';
import MyAccountForm from "./my-account-form";

export const metadata: Metadata = {
    title: 'My Account',
}

const UserPage = async () => {
    const session = await auth(); 

    return <SessionProvider session={session}>
        <div className="max-w-md space-y-4">
            <h2 className="h2-bold">My Account</h2>
            <MyAccountForm />
        </div>
    </SessionProvider>;
};
 
export default UserPage;