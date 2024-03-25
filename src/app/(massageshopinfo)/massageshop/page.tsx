import getMassageshops from "@/libs/getMassageshops"
import MassageshopCatalog from "@/components/MassageshopCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default async function Massageshop() {
    
    const massageshops = await getMassageshops()

    return (
        <main className="text-center p-5">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white">Select Massageshop</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <MassageshopCatalog massageshopsJson={massageshops}/>
            </Suspense>
        </main>
    )
}