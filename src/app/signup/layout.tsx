import React from "react";



export default function SignUpLayout({ children }: { children: React.ReactNode }) {
   return (
      <section>
         {/* Include shared UI here e.g. a header or sidebar */}
         {children}
      </section>
   )
}

