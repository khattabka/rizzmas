import { StatsCard } from "@/app/components/stats-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-100 via-green-100 to-red-100 p-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="snowflakes" aria-hidden="true">
          {[...Array(500)].map((_, i) => (
            <div key={i} className={`snowflake snowflake-${i % 3} color-${i % 5}`}>
              {i % 5 === 0 ? '❄' : i % 3 === 0 ? '❅' : '❆'}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 85% 50%, 70% 0, 55% 50%, 40% 0, 25% 50%, 10% 0, 0 50%)' }}></div>
      </div>
      <div className="relative z-10">
        <StatsCard />
      </div>
    </main>
  )
}
