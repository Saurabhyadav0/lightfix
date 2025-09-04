import loadable from "next/dynamic"

export const dynamic = "force-dynamic"

// ✅ Use `loadable` instead of `dynamic`
const MapClient = loadable(() => import("./MapClient"), { ssr: false })

export default function MapPage() {
  return <MapClient />
}
