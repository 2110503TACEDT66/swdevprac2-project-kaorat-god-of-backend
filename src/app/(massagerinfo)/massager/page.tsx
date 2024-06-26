import getMassagers from "@/libs/getMassagers"
import MassagerCatalog from "@/components/MassagerCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default async function Massager() {
    
    const massagers = await getMassagers()

    return (
        <main className="text-center p-5">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white">See All Favorite Massager</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <MassagerCatalog massagersJson={massagers}/>
            </Suspense>
        </main>
    )
}