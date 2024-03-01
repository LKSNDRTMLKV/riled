import React from "react";

export default async function FootballLayout({
    children,
} : {children: React.ReactNode}) {

    return(
        <div className="flex-col max-w-screen mx-auto max-w-screen-2xl">
            {children}
        </div>
    )
}