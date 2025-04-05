import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";

export default function Page() {
    return (
        <Suspense fallback={<InvoicesTableSkeleton />}>
            <p>Invoices Page</p>
        </Suspense>
    )
}