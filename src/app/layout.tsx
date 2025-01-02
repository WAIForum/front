import './globals.css'
import {ClusterProvider} from '@/components/cluster/cluster-data-access'
import {SolanaProvider} from '@/components/solana/solana-provider'
import {UiLayout} from '@/components/ui/ui-layout'
import {ReactQueryProvider} from './react-query-provider'

export const metadata = {
  title: 'World AI Forum',
  description: 'Shaping the Future of Artificial Intelligence',
}

const links: { label: string; path: string }[] = [
  { label: 'Centres', path: '/centres' },
  { label: 'Meetings', path: '/meetings' },
  { label: 'Stakeholders', path: '/stakeholders' },
  { label: 'Chart', path: 'https://www.defined.fi/embed/sol/CEqfTHUBLdf4rPABDoMdTupRZYLsgQSvrf4vKicX5YVE?quoteToken=token0' },
  { label: 'KlAIus', path: 'https://x.com/klaiusschwaib' },
  { label: 'WAIF', path: 'https://x.com/waiforum' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <UiLayout links={links}>{children}</UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
