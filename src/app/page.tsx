import BannerM from '@/components/BannerM'
import MassageSec from '@/components/MassageSec'
import ShopSec from '@/components/ShopSec'
import getMassageshops from "@/libs/getMassageshops"
import MassageshopCatalog from "@/components/MassageshopCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import getMassagers from "@/libs/getMassagers"
import MassagerCatalog from '@/components/MassagerCatalog'

export default async function Home() {

  const massageshops = await getMassageshops()
  const massagers = await getMassagers()
  return (
    <main>
      <BannerM/>
      <ShopSec/>
      <div className="ml-20 mr-20 mb-20">
        <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
            <MassageshopCatalog massageshopsJson={massageshops}/>
        </Suspense>
      </div>
      <MassageSec/>
      <div className="ml-20 mr-20 mb-20">
        <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
            <MassagerCatalog massagersJson={massagers}/>
        </Suspense>
      </div>
    </main>
  )
}
